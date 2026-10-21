/**
 * 全站官方資訊的唯一來源。
 *
 * 標記 `placeholder: true` 的欄位尚未取得公司核准的正式資料（spec §9.4、§15.2、§18），
 * 正式上線前必須逐一替換。開發模式下頁面會以「待確認」標籤提醒；
 * 見 LAUNCH_CHECKLIST.md。
 */

export type PendingValue<T> = { value: T; placeholder: boolean };

export const siteConfig = {
  /** 正式網域（TODO：取得官方網域後設定 NEXT_PUBLIC_SITE_URL） */
  siteUrl: {
    value: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.superb.example").replace(/\/$/, ""),
    placeholder: !process.env.NEXT_PUBLIC_SITE_URL,
  },
  companyName: {
    zh: "超棒軟體科技有限公司",
    /** 英文簡稱（Logo、品牌名稱） */
    en: "SuperB Software Technology",
    /** 英文正式全名（公司資訊、版權、法律文件） */
    enLegal: "SuperB Software Technology Co., Ltd.",
  },
  brandName: "SuperB",
  /** 官方聯絡 Email — 不可使用創辦人私人信箱（spec §9.4） */
  contactEmail: {
    value: "hello@superb-tutor.com",
    placeholder: false,
  } satisfies PendingValue<string>,
  /** 公司登記資訊（與 DOGTOR 官網 lib/company.js 一致） */
  registration: {
    value: {
      taxId: "62214225",
      address: {
        zh: "臺北市中正區金山北路 1 號 5 樓之 6",
        en: "5F.-6, No. 1, Jinshan N. Rd., Zhongzheng Dist., Taipei City, Taiwan",
      },
      phone: { display: "0963-779-263", displayEn: "+886 963 779 263", href: "+886963779263" },
    },
    placeholder: false,
  } satisfies PendingValue<{
    taxId: string;
    address: { zh: string; en: string };
    phone: { display: string; displayEn: string; href: string };
  }>,
  /** DOGTOR 產品官網與商店連結 */
  dogtorUrl: {
    value: "https://dogtor.superb-tutor.com",
    placeholder: false,
  } satisfies PendingValue<string>,
  dogtorStores: {
    appStore: "https://apps.apple.com/tw/app/dogtor-%E9%80%97%E8%AA%B2/id6751773627",
    googlePlay: "https://play.google.com/store/apps/details?id=com.dogtor.superbFlutterApp",
  },
  /** 適合公開的社群連結；空陣列時 Footer 不顯示社群區塊 */
  socialLinks: [] as { label: string; href: string }[],
  /** 版權起始年 */
  copyrightYear: 2026,
} as const;

export const isDevelopment = process.env.NODE_ENV !== "production";

export function absoluteUrl(path = "") {
  return `${siteConfig.siteUrl.value}${path}`;
}
