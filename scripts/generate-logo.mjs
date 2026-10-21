import { readFileSync, writeFileSync } from "node:fs";
/**
 * 由向量化路徑（scripts/logo-paths.source.json）產生 public/brand 的 Logo 檔案、favicon 與 components/brand/logo-paths.ts。
 * 用法：node scripts/generate-logo.mjs scripts .
 */
const [SRC_DIR, ROOT] = process.argv.slice(2);
const p = JSON.parse(readFileSync(`${SRC_DIR}/logo-paths.source.json`, "utf8"));
const BLUE = "#2868A6", GOLD = "#F3B338", INK = "#000000";

// 幾何（原始 1500px 圖檔座標）
const MARK = { x: 431, y: 227, w: 601, h: 764 };
const BLOCK = p.blockH; // 中文 + 英文文字區塊高度
const S = BLOCK / MARK.h; // 橫式組合：標誌與文字區塊等高
const markW = MARK.w * S, markH = MARK.h * S;
const TEXT_X = markW * 1.38; // 標誌與文字間距約為標誌寬度的 38%

const markGroup = (blue = BLUE, gold = GOLD) => `<path fill-rule="evenodd" fill="${gold}" d="${p.gold}"/><path fill-rule="evenodd" fill="${blue}" d="${p.blueMark}"/>`;
const zhGroup = (ink = INK, blue = BLUE) => `<path fill-rule="evenodd" fill="${ink}" d="${p.blackZh}"/><path fill-rule="evenodd" fill="${blue}" d="${p.blueZh}"/>`;
const ZH_SCALE = 0.68;
const compactZh = (ink = INK, blue = BLUE) => `<g transform="translate(361 1055) scale(${ZH_SCALE}) translate(-361 -1055)">${zhGroup(ink, blue)}</g>`;
const enGroup = (ink = INK) => `<path fill="${ink}" d="${p.enCaps}"/>`;
const svg = (vb, body, title) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" role="img" aria-label="${title}"><title>${title}</title>${body}</svg>\n`;
const TITLE = "超棒軟體 SuperB Software";

// 1. 直式標準 Logo（與原始圖檔相同構圖）
writeFileSync(`${ROOT}/public/brand/superb-logo.svg`, svg(`326 197 ${Math.max(815, p.enCapsBox.w + 65)} ${1055 + BLOCK - 197 + 30}`, markGroup() + compactZh() + enGroup(), TITLE));
writeFileSync(`${ROOT}/public/brand/superb-logo-white.svg`, svg(`326 197 ${Math.max(815, p.enCapsBox.w + 65)} ${1055 + BLOCK - 197 + 30}`, markGroup("#FFFFFF") + compactZh("#FFFFFF", "#FFFFFF") + enGroup("#FFFFFF"), TITLE));
// 2. 標誌
writeFileSync(`${ROOT}/public/brand/superb-mark.svg`, svg(`${MARK.x - 6} ${MARK.y - 6} ${MARK.w + 12} ${MARK.h + 12}`, markGroup(), "SuperB"));
// 3. 橫式組合（標誌 + 中英文名稱）
const textBlockH = BLOCK;
const textY = (markH - textBlockH) / 2;
const hFull = `<g transform="scale(${S}) translate(${-MARK.x} ${-MARK.y})">${markGroup()}</g><g transform="translate(${TEXT_X - 361} ${textY - 1055})">${compactZh()}${enGroup()}</g>`;
writeFileSync(`${ROOT}/public/brand/superb-lockup.svg`, svg(`-8 -8 ${TEXT_X + p.enCapsBox.w + 16} ${markH + 16}`, hFull, TITLE));
// 4. favicon
writeFileSync(`${ROOT}/app/icon.svg`, `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800"><rect width="800" height="800" rx="160" fill="#FFFFFF"/><g transform="translate(400 400) scale(0.82) translate(${-(MARK.x + MARK.w / 2)} ${-(MARK.y + MARK.h / 2)})">${markGroup()}</g></svg>\n`);

// 5. React 元件使用的路徑資料
writeFileSync(`${ROOT}/components/brand/logo-paths.ts`, `/**
 * 由 public/brand/superb_logo.png 向量化（potrace）而成的 SuperB 正式 Logo 路徑。
 * 座標為原始 1500×1500 圖檔座標。請勿修改比例或造型（spec §11.7、§15.3）。
 */
export const LOGO_COLORS = { blue: "${BLUE}", gold: "${GOLD}", ink: "${INK}" } as const;

export const MARK_BOX = ${JSON.stringify(MARK)} as const;
export const ZH_BOX = { x: 356, y: 1055, w: 755, h: 153 } as const;
export const EN_BOX = { x: 356, y: 1236, w: 755, h: 56 } as const;

/** 橫式組合的英文名稱（Montserrat，SuperB Software），由 scripts/build-logo-english.py 產生 */
export const EN_CAPS_BOX = ${JSON.stringify(p.enCapsBox)} as const;
export const TEXT_BLOCK_H = ${p.blockH};
export const ZH_SCALE = ${ZH_SCALE};

export const logoPaths = ${JSON.stringify({ gold: p.gold, blueMark: p.blueMark, blackZh: p.blackZh, blueZh: p.blueZh, blackEn: p.blackEn, enCaps: p.enCaps }, null, 2)} as const;
`);
console.log("logo files written");
