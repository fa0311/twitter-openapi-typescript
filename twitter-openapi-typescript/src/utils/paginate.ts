import type { TimelineApiUtilsResponse, TwitterApiUtilsResponse } from '@/models';

export type PaginateParam = {
  /** stop after this many items */
  limit?: number;
  /** wait for the rate-limit window to reset when it is used up (default: true) */
  wait?: boolean;
};

export type PaginateFn<T> = (cursor?: string) => Promise<TwitterApiUtilsResponse<TimelineApiUtilsResponse<T>>>;

const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

/**
 * Walks a timeline page by page through its bottom cursor and yields the items.
 * Stops when a page brings no item, has no bottom cursor or repeats the cursor, or after `limit` items.
 */
export async function* paginate<T>(
  fetch: PaginateFn<T>,
  param: PaginateParam = {},
): AsyncGenerator<T, void, undefined> {
  let cursor: string | undefined;
  let count = 0;
  while (true) {
    const response = await fetch(cursor);
    for (const item of response.data.data) {
      if (param.limit !== undefined && count >= param.limit) return;
      yield item;
      count += 1;
    }
    const next = response.data.cursor.bottom?.value;
    if (response.data.data.length === 0 || next === undefined || next === cursor) return;
    if (param.limit !== undefined && count >= param.limit) return;
    cursor = next;
    if (param.wait !== false && response.header.rateLimitRemaining === 0) {
      await sleep(Math.max(0, response.header.rateLimitReset * 1000 - Date.now()) + 1000);
    }
  }
}
