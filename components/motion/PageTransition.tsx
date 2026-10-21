"use client";

import { useEffect, useState } from "react";

// 首次載入不做淡入（避免主要內容在 LCP 前為透明）；之後的站內換頁才播放 260ms 淡入（spec §11.1）
let hasNavigated = false;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => hasNavigated);
  useEffect(() => {
    hasNavigated = true;
  }, []);
  return <div className={animate ? "page-enter" : undefined}>{children}</div>;
}
