"use client";

import { LazyMotion, MotionConfig } from "motion/react";

// 動畫功能按需載入（spec §13.5）
const loadFeatures = () => import("./features").then((mod) => mod.default);

/** reducedMotion="user"：使用者開啟減少動態時，取消位移只保留淡入（spec §11.9） */
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
