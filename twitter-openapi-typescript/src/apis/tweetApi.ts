import * as i from 'twitter-openapi-typescript-generated/src';
import { DefaultFlag } from '@/types/flag';
import { ApiFunction, ConvertInstructionsFunction } from '@/util/type';
import { TweetListApiUtilsResponse } from '@/types/tweet';
import { ApiUtilsRaw } from '@/types/timeline';
import { buildCursor, entriesCursor, instructionToEntry, tweetEntriesConverter } from '@/util/api';

type requestParam<T> = {
  apiFn: ApiFunction<T>;
  convertFn: ConvertInstructionsFunction<T>;
  key: string;
  param: Map<String, any>;
};

export class TweetApiUtils {
  api: i.TweetApi;
  flag: DefaultFlag;

  constructor(api: i.TweetApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: requestParam<T>): Promise<TweetListApiUtilsResponse> {
    const response = await param.apiFn({
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param }),
      features: JSON.stringify(this.flag[param.key]['features']),
    });
    const instruction = param.convertFn(response as T);
    const entry = instructionToEntry(instruction);
    const data = tweetEntriesConverter(entry);

    const raw: ApiUtilsRaw = {
      // response: response,
      instruction: instruction,
      entry: entry,
    };
    return {
      raw: raw,
      // header: response.headers,
      cursor: entriesCursor(entry),
      data: data,
    };
  }
}
