import { educationSolutions } from "@/content/education-solutions";
import { dogtor } from "@/content/projects/dogtor";
import { projects } from "@/content/projects";
import { insights } from "@/content/insights";
import { faq } from "@/content/faq";
import { team } from "@/content/team";
import { localizedPath, organizationDescription } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

/**
 * llms.txt（https://llmstxt.org）：給生成式 AI 與答案引擎的網站摘要（GEO）。
 * 全部由網站內容資料產生，避免與頁面內容不一致。
 */
const url = (path: string, locale: "zh-TW" | "en" = "zh-TW") => absoluteUrl(localizedPath(locale, path));

function facts() {
  const r = siteConfig.registration.value;
  return [
    `- 公司名稱 Company: ${siteConfig.companyName.zh}（${siteConfig.companyName.enLegal}）`,
    `- 簡稱 Short name: SuperB / 超棒軟體 / ${siteConfig.companyName.en}`,
    `- 統一編號 Tax ID: ${r.taxId}`,
    `- 地址 Address: ${r.address.zh}（${r.address.en}）`,
    `- 聯絡信箱 Email: ${siteConfig.contactEmail.value}`,
    `- 旗艦產品 Flagship product: DOGTOR 逗課 — ${dogtor.url.value}`,
    "- 合作夥伴 Partners: 精湛教育 Superb Education（2023 年起）；國立臺灣大學教授顧問群（AI、軟體、HCI、學習互動）",
  ].join("\n");
}

function metrics() {
  return dogtor.metrics
    .filter((m) => m.verified)
    .map((m) => `- ${m.value} ${m.label["zh-TW"]} / ${m.label.en}（${m.period?.["zh-TW"] ?? m.asOf}）`)
    .join("\n");
}

export function llmsTxt() {
  return `# ${siteConfig.companyName.zh} SuperB Software

> ${organizationDescription["zh-TW"]}
> ${organizationDescription.en}

## Company facts

${facts()}

## Main pages

- [首頁 Home](${url("/")}): 品牌理念、DOGTOR、產品與合作、教育解決方案、開發方法
- [DOGTOR 逗課產品故事](${url("/products/dogtor")}): 為什麼打造 DOGTOR、做法、真實畫面與經核實的成果數據
- [產品與合作 Products & Partnerships](${url("/work")}): 自有產品與參與打造的應用（標示參與關係與狀態）
- [教育解決方案 Education Solutions](${url("/solutions")}): 面向教育與補教機構的客製軟體開發，包含家長通知、AI 批改、題庫、作業 App、出缺席與營運系統
- [關於我們 About](${url("/about")}): 公司故事、使命願景、團隊、能力、公司簡介與常見問題
- [觀點與研究 Insights](${url("/insights")}): 教育科技、AI 與產品設計的觀點與公司消息
- [聯絡我們 Contact](${url("/contact")}): 合作洽詢
- English versions: ${url("/", "en")}

## Education solutions (custom development directions, not ready-made products)

${educationSolutions.map((s) => `- [${s.content["zh-TW"].title}](${url(`/solutions#${s.slug}`)}): ${s.content["zh-TW"].description} / ${s.content.en.title}`).join("\n")}

## DOGTOR key facts

- ${dogtor.url.value} — App Store: ${dogtor.stores.appStore} — Google Play: ${dogtor.stores.googlePlay}
${metrics()}

## Products & Partnerships

${projects.map((p) => `- [${p.localeContent["zh-TW"].title}](${url(`/work/${p.slug}`)}): ${p.localeContent["zh-TW"].summary}`).join("\n")}

## Optional

- [Full text for LLMs](${absoluteUrl("/llms-full.txt")})
- [Privacy policy](${url("/privacy")})
`;
}

export function llmsFullTxt() {
  const projectBlocks = projects
    .map((p) => {
      const c = p.localeContent["zh-TW"];
      const e = p.localeContent.en;
      return `### ${c.title}｜${c.subtitle}

- URL: ${url(`/work/${p.slug}`)}
- 年度 Year: ${p.year ?? "—"}；狀態 Status: ${p.status}；參與關係 Relationship: ${p.relationshipType}
- 技術 Technology: ${c.technology.stack.join(", ") || "—"}

${c.overview}

${c.challenge}

${c.solution}

參與 Involvement: ${c.involvement}

EN: ${e.overview}`;
    })
    .join("\n\n");

  return `${llmsTxt()}
## Team

${team.map((m) => `- ${m.name}${m.nameZh ? `（${m.nameZh}）` : ""} — ${m.role["zh-TW"]} / ${m.role.en}`).join("\n")}

## Frequently asked questions

${faq.map((f) => `### ${f.q["zh-TW"]}\n\n${f.a["zh-TW"]}\n\n**${f.q.en}** ${f.a.en}`).join("\n\n")}

## Projects (details)

${projectBlocks}

## Insights

${insights.map((i) => `- [${i.title["zh-TW"] ?? i.title.en}](${url(`/insights/${i.slug}`)}) (${i.date}): ${i.summary["zh-TW"] ?? i.summary.en}`).join("\n")}
`;
}
