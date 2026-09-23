type RateLimitResult = {
  allowed: boolean;
  retryAfter: number;
};

type Entry = {
  count: number;
  expiresAt: number;
};

const MAX_REQUESTS = 3;
const WINDOW_MS = 10 * 60 * 1000;
const store = new Map<string, Entry>();

export function checkRateLimit(identifier: string): RateLimitResult {
  const now = Date.now();
  const current = store.get(identifier);

  if (!current || now > current.expiresAt) {
    store.set(identifier, { count: 1, expiresAt: now + WINDOW_MS });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= MAX_REQUESTS) {
    const retryAfter = Math.ceil((current.expiresAt - now) / 1000);
    return { allowed: false, retryAfter };
  }

  current.count += 1;
  store.set(identifier, current);
  return { allowed: true, retryAfter: 0 };
}
