import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "404｜SuperB 超棒軟體科技",
  description: "找不到頁面 · Page not found",
};

/** 完全不符合任何路由（例如不支援的語系）時的 404，提供中英雙語返回入口 */
export default function GlobalNotFound() {
  return (
    <html lang="zh-TW" className={inter.variable}>
      <body className="flex min-h-dvh items-center bg-page">
        <main className="container-site py-20">
          <p className="text-eyebrow text-brand">404 · NOT FOUND</p>
          <h1 className="text-h1 mt-5">這個頁面不存在。</h1>
          <p className="text-body-lg mt-2 text-muted" lang="en">
            This page doesn&apos;t exist.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/zh-TW" className="inline-flex min-h-12 items-center justify-center rounded-[12px] bg-brand px-6 font-semibold text-white hover:bg-brand-hover">
              回到首頁
            </Link>
            <Link href="/en" lang="en" className="inline-flex min-h-12 items-center justify-center rounded-[12px] border border-line bg-surface px-6 font-semibold text-navy hover:bg-soft-blue">
              Back to home
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
