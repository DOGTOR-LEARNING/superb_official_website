/**
 * Noto Sans TC 子集化（spec §10.3、§13.5 Font Subsetting）
 *
 * 掃描網站所有文案（翻譯檔、內容、元件），只保留實際用到的中文字與常用標點，
 * 輸出單一可變字重（400–700）woff2 給 next/font/local 使用。
 * 於 predev / prebuild 自動執行，新增文案後不需手動處理。
 * 不在子集內的字（例如使用者在表單輸入的罕用字）會由系統中文字型顯示。
 */
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from "node:fs";
import { join, extname } from "node:path";
import subsetFont from "subset-font";

const root = new URL("..", import.meta.url).pathname;
const source = join(root, "fonts", "NotoSansTC[wght].ttf");
const output = join(root, "app", "fonts", "NotoSansTC-subset.woff2");
const scanDirs = ["messages", "content", "components", "app", "lib"];
const exts = new Set([".json", ".ts", ".tsx", ".mdx", ".md"]);

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (exts.has(extname(name))) files.push(path);
  }
  return files;
}

const chars = new Set();
for (const dir of scanDirs) {
  for (const file of walk(join(root, dir))) {
    for (const ch of readFileSync(file, "utf8")) {
      // 只收集非 ASCII 字元；英數由 Inter 負責
      if (ch.codePointAt(0) > 0x7f) chars.add(ch);
    }
  }
}
// 常用中文標點與符號，確保使用者輸入時也能正確顯示
for (const ch of "，。、；：？！「」『』（）《》〈〉…—～・·％＋－＝／＠＃＆＊") chars.add(ch);

const text = [...chars].sort().join("");
const signaturePath = output + ".chars";
if (existsSync(output) && existsSync(signaturePath) && readFileSync(signaturePath, "utf8") === text) {
  console.log(`[fonts] Noto Sans TC subset up to date (${chars.size} glyphs)`);
  process.exit(0);
}

const subset = await subsetFont(readFileSync(source), text, {
  targetFormat: "woff2",
  variationAxes: { wght: { min: 400, max: 700 } },
});
writeFileSync(output, subset);
writeFileSync(signaturePath, text);
console.log(`[fonts] Noto Sans TC subset: ${chars.size} glyphs → ${(subset.length / 1024).toFixed(1)} KB`);
