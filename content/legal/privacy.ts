import type { Localized } from "../types";

/**
 * 公司官網隱私權政策（spec §13.7）。
 * 草稿內容：正式上線前需經公司與法務審閱，並填入正式公司名稱與聯絡方式。
 */
export const privacyPolicy: {
  updated: string;
  sections: Localized<{ title: string; body: string[] }[]>;
} = {
  updated: "2026-10-21",
  sections: {
    "zh-TW": [
      {
        title: "一、適用範圍",
        body: [
          "本隱私權政策適用於超棒軟體科技有限公司（以下稱「本公司」）官方網站。DOGTOR 逗課 App 與 DOGTOR 官網另有其各自的隱私權政策，請以該服務公告為準。",
        ],
      },
      {
        title: "二、我們收集的資料",
        body: [
          "當你透過「聯絡我們」表單與我們聯繫時，我們會收集你主動提供的姓名或稱呼、Email、單位或公司名稱（選填）、洽詢類型與訊息內容。",
          "為防止垃圾訊息與濫用，伺服器會短暫處理你的 IP 位址以進行送出頻率限制，不會將其與你的聯絡資料長期保存。",
          "本網站不使用廣告追蹤 Cookie。若啟用網站分析，我們只採用不使用 Cookie、不識別個人的隱私友善方案，用於了解頁面瀏覽與主要按鈕點擊等彙總數據。",
        ],
      },
      {
        title: "三、資料的使用目的",
        body: [
          "你所提供的聯絡資料僅用於回覆你的洽詢及後續相關溝通，不會用於行銷訂閱，亦不會出售或提供給無關的第三方。",
        ],
      },
      {
        title: "四、第三方服務",
        body: [
          "為寄送表單內容，我們使用經核准的郵件服務供應商代為傳遞訊息。供應商僅能為傳送目的處理資料。",
          "網站中的 Demo 影片在你點擊播放之前不會載入任何 YouTube 內容；點擊播放後，影片由 YouTube（youtube-nocookie.com 隱私加強模式）提供，並適用 Google 的隱私權政策。",
        ],
      },
      {
        title: "五、資料保存與安全",
        body: [
          "我們會在完成洽詢及合理的後續溝通所需期間內保存聯絡資料，並採取合理的技術與管理措施保護資料安全。",
        ],
      },
      {
        title: "六、你的權利",
        body: [
          "依個人資料保護法，你可以請求查詢、閱覽、製給複製本、補充或更正、停止處理或利用，以及刪除你的個人資料。請透過本頁下方的官方聯絡信箱與我們聯繫。",
        ],
      },
      {
        title: "七、政策更新",
        body: ["本政策如有修訂，將公告於本頁並更新「最後更新」日期。"],
      },
    ],
    en: [
      {
        title: "1. Scope",
        body: [
          "This Privacy Policy applies to the official website of SuperB Software Technology Co., Ltd. (\"we\", \"us\"). The DOGTOR app and the DOGTOR website have their own privacy policies.",
        ],
      },
      {
        title: "2. Information we collect",
        body: [
          "When you contact us through the contact form, we collect the information you choose to provide: your name, email, organization (optional), enquiry type and message.",
          "To prevent spam and abuse, our server briefly processes your IP address for rate limiting; it is not stored long-term with your contact details.",
          "This website does not use advertising cookies. If analytics are enabled, we only use a privacy-friendly, cookieless solution that does not identify individuals, to understand aggregate page views and key button clicks.",
        ],
      },
      {
        title: "3. How we use it",
        body: [
          "Your contact details are used only to respond to your enquiry and related follow-up. They are not used for marketing subscriptions, and are never sold or shared with unrelated third parties.",
        ],
      },
      {
        title: "4. Third-party services",
        body: [
          "We use an approved email service provider to deliver form submissions. The provider may process data only for that purpose.",
          "Demo videos on this site load nothing from YouTube until you press play. Once played, the video is served by YouTube in privacy-enhanced mode (youtube-nocookie.com) under Google's privacy policy.",
        ],
      },
      {
        title: "5. Retention and security",
        body: [
          "We keep contact information only as long as needed to handle your enquiry and reasonable follow-up, and protect it with reasonable technical and organizational measures.",
        ],
      },
      {
        title: "6. Your rights",
        body: [
          "Under Taiwan's Personal Data Protection Act, you may request access to, a copy of, correction of, restriction of processing of, or deletion of your personal data. Please contact us at the official email below.",
        ],
      },
      {
        title: "7. Updates",
        body: ["Any changes to this policy will be posted on this page with an updated date."],
      },
    ],
  },
};
