import type { Project } from "../types";
import { superbot } from "./superbot";
// MapIt 尚未發布，暫不公開（2026-10-21）
// import { mapit } from "./mapit";
import { sevenPeach } from "./seven-peach";
import { twoHundredOk } from "./200ok";
import { aiPlanner } from "./aiplanner";
import { zhongxingErp } from "./zhongxing-erp";

const allProjects: Project[] = [superbot, zhongxingErp, /* mapit, */ sevenPeach, twoHundredOk, aiPlanner];

/** 可公開的作品（排除 withheld），順序即作品頁的顯示順序 */
export const projects = allProjects.filter((p) => p.publicationApproval.status !== "withheld");

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getHomeProjects() {
  return projects
    .filter((p) => p.homeOrder !== undefined)
    .sort((a, b) => (a.homeOrder ?? 0) - (b.homeOrder ?? 0));
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return projects[(index + 1) % projects.length];
}
