import "server-only";

/**
 * 簡易固定視窗 rate limiter（記憶體內）。
 * 適用於單一執行個體；部署到多個 serverless instance 時，應改用 Upstash Redis 或平台內建的限流。
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true };
  }
  entry.count += 1;
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.resetAt < now) hits.delete(k);
  }
  return { ok: entry.count <= MAX_REQUESTS };
}
