"use client";

import * as m from "motion/react-m";
import type { Variants } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Scroll Reveal：opacity 0→1、translateY 16px→0、450ms，只執行一次（spec §11.3） */
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
};

const group: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.075 } },
};

type Tag = "div" | "section" | "ul" | "li" | "ol" | "article" | "header";

export function Reveal({
  as = "div",
  className,
  children,
  delay = 0,
}: {
  as?: Tag;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={item}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}

/** 子項目依序出現（stagger 75ms），子元素需使用 RevealItem */
export function RevealGroup({ as = "div", className, children }: { as?: Tag; className?: string; children: React.ReactNode }) {
  const Comp = m[as];
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={group}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({ as = "div", className, children }: { as?: Tag; className?: string; children: React.ReactNode }) {
  const Comp = m[as];
  return (
    <Comp className={className} variants={item}>
      {children}
    </Comp>
  );
}
