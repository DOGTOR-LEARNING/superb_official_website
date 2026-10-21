"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AlertCircle, Loader2, RotateCcw } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { submitContact } from "@/lib/actions/contact";
import { contactSchema, inquiryTypes, MESSAGE_MAX, toFieldErrors, type ContactField, type FieldErrors } from "@/lib/contact-schema";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { buttonClasses, ButtonArrow } from "@/components/ui/Button";
import { FieldError, FormField, inputClasses } from "@/components/ui/FormField";
import { SuccessState } from "@/components/ui/States";

type Values = {
  name: string;
  email: string;
  organization: string;
  inquiryType: string;
  message: string;
  consent: boolean;
};

const initialValues: Values = { name: "", email: "", organization: "", inquiryType: "", message: "", consent: false };
const fieldOrder: ContactField[] = ["name", "email", "organization", "inquiryType", "message", "consent"];

type Status = { kind: "idle" } | { kind: "submitting" } | { kind: "success" } | { kind: "error"; reason: "server" | "rate_limited" | "network" };

/**
 * 合作洽詢表單（spec §9.2、§9.3）
 * 狀態：Default / Input Focus / Field Validation Error / Submitting / Submission Success / Submission Failure。
 * 失敗時保留所有已填寫內容（受控元件，不會被 form reset），並提供重新送出。
 */
export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const t = useTranslations("Contact.form");
  const locale = useLocale();
  const formId = useId();
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [honeypot, setHoneypot] = useState("");
  const startedAt = useRef(0);
  /** 每次驗證失敗遞增，於錯誤摘要渲染後再移動焦點 */
  const [summaryFocusTick, setSummaryFocusTick] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const failureRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  useEffect(() => {
    if (summaryFocusTick) summaryRef.current?.focus();
  }, [summaryFocusTick]);

  useEffect(() => {
    if (status.kind === "success") successRef.current?.focus();
    if (status.kind === "error") failureRef.current?.focus();
  }, [status.kind]);

  const id = (field: string) => `${formId}-${field}`;

  function validate(next: Values) {
    const parsed = contactSchema.safeParse(next);
    return parsed.success ? {} : toFieldErrors(parsed.error);
  }

  function update<K extends keyof Values>(field: K, value: Values[K]) {
    const next = { ...values, [field]: value };
    setValues(next);
    // 第一次送出後，即時更新錯誤狀態
    if (submitted) setErrors(validate(next));
  }

  function onBlur(field: ContactField) {
    if (!values[field as keyof Values] && !submitted) return;
    const fieldError = validate(values)[field];
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;
    setSubmitted(true);

    const clientErrors = validate(values);
    setErrors(clientErrors);
    if (Object.keys(clientErrors).length) {
      setStatus({ kind: "idle" });
      setSummaryFocusTick((n) => n + 1);
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const result = await submitContact({ ...values, website: honeypot, startedAt: startedAt.current, locale });
      if (result.ok) {
        track("contact_submit_success", { type: values.inquiryType });
        setStatus({ kind: "success" });
      } else if (result.reason === "validation") {
        setErrors(result.fieldErrors);
        setStatus({ kind: "idle" });
        setSummaryFocusTick((n) => n + 1);
      } else {
        setStatus({ kind: "error", reason: result.reason });
      }
    } catch {
      setStatus({ kind: "error", reason: "network" });
    }
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
    setSubmitted(false);
    setStatus({ kind: "idle" });
    startedAt.current = Date.now();
  }

  if (status.kind === "success") {
    return (
      <SuccessState
        headingRef={successRef}
        title={t("success.title")}
        body={t("success.body")}
        action={
          <button type="button" onClick={reset} className={buttonClasses("secondary")}>
            {t("success.again")}
          </button>
        }
      />
    );
  }

  const errorEntries = fieldOrder.filter((f) => errors[f]);
  const submitting = status.kind === "submitting";
  const describedBy = (field: ContactField, extra?: string) => cn(errors[field] && `${id(field)}-error`, extra) || undefined;

  return (
    <form noValidate onSubmit={onSubmit} aria-busy={submitting} className="space-y-7">
      <p className="text-caption text-muted">{t("requiredNote")}</p>

      {/* Field validation error summary */}
      {submitted && errorEntries.length ? (
        <div ref={summaryRef} tabIndex={-1} role="alert" className="rounded-[var(--radius-card-sm)] border border-danger/30 bg-danger-soft p-5 outline-none focus-visible:ring-4 focus-visible:ring-danger/20">
          <p className="flex items-center gap-2 font-semibold text-danger">
            <AlertCircle aria-hidden className="size-5" />
            {t("errorSummary", { count: errorEntries.length })}
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-9 text-[0.9375rem] text-danger">
            {errorEntries.map((f) => (
              <li key={f}>
                <a href={`#${id(f === "inquiryType" ? "inquiryType-education" : f)}`} className="underline underline-offset-2">
                  {t(`errors.${errors[f]}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="grid gap-7 md:grid-cols-2">
        <FormField id={id("name")} label={t("name")} required requiredText={t("required")} optionalText={t("optional")} error={errors.name && t(`errors.${errors.name}`)}>
          <input
            id={id("name")}
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            onBlur={() => onBlur("name")}
            placeholder={t("namePlaceholder")}
            aria-required
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={cn(inputClasses, errors.name ? "border-danger" : "border-line hover:border-muted/40")}
          />
        </FormField>
        <FormField id={id("email")} label={t("email")} required requiredText={t("required")} optionalText={t("optional")} error={errors.email && t(`errors.${errors.email}`)}>
          <input
            id={id("email")}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            onBlur={() => onBlur("email")}
            placeholder={t("emailPlaceholder")}
            aria-required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={cn(inputClasses, errors.email ? "border-danger" : "border-line hover:border-muted/40")}
          />
        </FormField>
      </div>

      <FormField
        id={id("organization")}
        label={t("organization")}
        requiredText={t("required")}
        optionalText={t("optional")}
        error={errors.organization && t(`errors.${errors.organization}`)}
      >
        <input
          id={id("organization")}
          name="organization"
          autoComplete="organization"
          value={values.organization}
          onChange={(e) => update("organization", e.target.value)}
          onBlur={() => onBlur("organization")}
          placeholder={t("organizationPlaceholder")}
          aria-invalid={!!errors.organization}
          aria-describedby={describedBy("organization")}
          className={cn(inputClasses, errors.organization ? "border-danger" : "border-line hover:border-muted/40")}
        />
      </FormField>

      <fieldset role="radiogroup" aria-describedby={describedBy("inquiryType")} aria-required aria-invalid={!!errors.inquiryType}>
        <legend className="mb-3 font-semibold text-navy">
          {t("inquiryType")}
          <span className="ml-2 text-caption font-medium text-brand">{t("required")}</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {inquiryTypes.map((type) => {
            const checked = values.inquiryType === type;
            return (
              <label
                key={type}
                htmlFor={id(`inquiryType-${type}`)}
                className={cn(
                  "flex min-h-12 cursor-pointer items-center gap-3 rounded-[var(--radius-button)] border bg-surface px-4 py-3 transition-[border-color,background-color,box-shadow] duration-150",
                  "has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-brand/15",
                  checked ? "border-brand bg-soft-blue" : errors.inquiryType ? "border-danger" : "border-line hover:border-muted/40",
                )}
              >
                <input
                  id={id(`inquiryType-${type}`)}
                  type="radio"
                  name="inquiryType"
                  value={type}
                  checked={checked}
                  onChange={() => update("inquiryType", type)}
                  className="size-[1.125rem] shrink-0 accent-[#2868A6] focus:outline-none"
                />
                <span className={cn("font-medium", checked && "text-brand-hover")}>{t(`types.${type}`)}</span>
              </label>
            );
          })}
        </div>
        <FieldError id={`${id("inquiryType")}-error`} message={errors.inquiryType && t(`errors.${errors.inquiryType}`)} />
      </fieldset>

      <FormField
        id={id("message")}
        label={t("message")}
        required
        requiredText={t("required")}
        optionalText={t("optional")}
        error={errors.message && t(`errors.${errors.message}`)}
        hint={<span id={`${id("message")}-counter`}>{t("messageCounter", { count: values.message.length, max: MESSAGE_MAX })}</span>}
      >
        <textarea
          id={id("message")}
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          onBlur={() => onBlur("message")}
          placeholder={t("messagePlaceholder")}
          aria-required
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message", `${id("message")}-counter`)}
          className={cn(inputClasses, "min-h-40 resize-y", errors.message ? "border-danger" : "border-line hover:border-muted/40")}
        />
      </FormField>

      {/* Honeypot：視覺與輔助科技皆隱藏 */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor={id("website")}>{t("honeypot")}</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
      </div>

      <div>
        <label htmlFor={id("consent")} className="flex cursor-pointer items-start gap-3">
          <input
            id={id("consent")}
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(e) => update("consent", e.target.checked)}
            aria-required
            aria-invalid={!!errors.consent}
            aria-describedby={describedBy("consent")}
            className="mt-1 size-5 shrink-0 rounded accent-[#2868A6]"
          />
          <span className="text-[0.9375rem] text-navy/85">
            {t.rich("consent", {
              link: (chunks) => (
                <Link href="/privacy" target="_blank" className="font-semibold text-brand underline underline-offset-2 hover:text-brand-hover">
                  {chunks}
                </Link>
              ),
            })}
            <span className="ml-2 text-caption font-medium text-brand">{t("required")}</span>
          </span>
        </label>
        <FieldError id={`${id("consent")}-error`} message={errors.consent && t(`errors.${errors.consent}`)} />
      </div>

      {/* Submission failure：保留資料、提供重新送出 */}
      {status.kind === "error" ? (
        <div ref={failureRef} tabIndex={-1} role="alert" className="rounded-[var(--radius-card-sm)] border border-danger/30 bg-danger-soft p-5 outline-none">
          <p className="flex items-center gap-2 font-semibold text-danger">
            <AlertCircle aria-hidden className="size-5" />
            {t("failure.title")}
          </p>
          <p className="mt-2 text-[0.9375rem] text-navy">{t(`failure.${status.reason === "rate_limited" ? "rateLimited" : status.reason}`)}</p>
          <p className="mt-1 text-[0.9375rem] text-navy">
            {t.rich("failure.alternative", {
              email: () => (
                <a href={`mailto:${contactEmail}`} className="font-semibold text-brand underline underline-offset-2">
                  {contactEmail}
                </a>
              ),
            })}
          </p>
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" disabled={submitting} className={buttonClasses("primary", "w-full sm:w-auto")}>
          {submitting ? (
            <>
              <Loader2 aria-hidden className="size-[1.125rem] motion-safe:animate-spin" />
              <span>{t("submitting")}</span>
            </>
          ) : status.kind === "error" ? (
            <>
              <RotateCcw aria-hidden className="size-[1.125rem]" />
              <span>{t("retry")}</span>
            </>
          ) : (
            <>
              <span>{t("submit")}</span>
              <ButtonArrow />
            </>
          )}
        </button>
        <p aria-live="polite" className="sr-only">
          {submitting ? t("submitting") : ""}
        </p>
      </div>
    </form>
  );
}
