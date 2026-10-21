/**
 * 隱私友善的事件追蹤（spec §13.7）。
 * 預設不載入任何第三方腳本；設定 NEXT_PUBLIC_PLAUSIBLE_DOMAIN 後才會啟用 Plausible（無 Cookie）。
 */
export type AnalyticsEvent =
  | "dogtor_cta_click"
  | "selected_work_click"
  | "contact_submit_success"
  | "language_switch";

type Plausible = (event: string, options?: { props?: Record<string, string> }) => void;

export function track(event: AnalyticsEvent, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const plausible = (window as unknown as { plausible?: Plausible }).plausible;
  plausible?.(event, props ? { props } : undefined);
  if (process.env.NODE_ENV !== "production") console.debug("[analytics]", event, props ?? {});
}
