"use server";

import { headers } from "next/headers";
import { contactSchema, toFieldErrors, type FieldErrors } from "@/lib/contact-schema";
import { rateLimit } from "@/lib/rate-limit";

export type ContactResult =
  | { ok: true }
  | { ok: false; reason: "validation"; fieldErrors: FieldErrors }
  | { ok: false; reason: "rate_limited" | "server" };

const inquiryLabels: Record<string, string> = {
  education: "教育機構合作 Education partnership",
  product: "產品／技術合作 Product / technology",
  media: "媒體／活動邀請 Media / event",
  other: "其他 Other",
};

/** 表單送出最短時間：防止機器人瞬間送出 */
const MIN_FILL_MS = 2500;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export async function submitContact(input: {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
  consent: boolean;
  /** honeypot：真人不會看到或填寫 */
  website: string;
  startedAt: number;
  locale: string;
}): Promise<ContactResult> {
  // 伺服器端驗證（spec §13.7）
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, reason: "validation", fieldErrors: toFieldErrors(parsed.error) };
  }

  // 防垃圾訊息：honeypot 或填寫過快時，靜默視為成功，不寄送
  if (input.website || Date.now() - Number(input.startedAt) < MIN_FILL_MS) {
    return { ok: true };
  }

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  if (!rateLimit(`contact:${ip}`).ok) {
    return { ok: false, reason: "rate_limited" };
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      // 開發模式：未設定郵件服務時只記錄在伺服器 console
      console.info("[contact] 郵件服務未設定，開發模式僅記錄：", { ...data, locale: input.locale });
      return { ok: true };
    }
    console.error("[contact] RESEND_API_KEY / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL 未設定");
    return { ok: false, reason: "server" };
  }

  const rows: [string, string][] = [
    ["姓名 Name", data.name],
    ["Email", data.email],
    ["單位 Organization", data.organization || "—"],
    ["類型 Type", inquiryLabels[data.inquiryType]],
    ["語言 Locale", input.locale],
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `[SuperB 官網洽詢] ${inquiryLabels[data.inquiryType]} — ${data.name}`,
        text: `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\n${data.message}`,
        html: `<table>${rows
          .map(([k, v]) => `<tr><th align="left">${escapeHtml(k)}</th><td>${escapeHtml(v)}</td></tr>`)
          .join("")}</table><p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      console.error("[contact] Resend 回應錯誤", res.status, await res.text());
      return { ok: false, reason: "server" };
    }
    return { ok: true };
  } catch (error) {
    console.error("[contact] 寄送失敗", error);
    return { ok: false, reason: "server" };
  }
}
