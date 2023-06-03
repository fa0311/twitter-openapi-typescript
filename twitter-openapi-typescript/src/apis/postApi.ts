import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types';
import { buildHeader, entriesCursor } from '@/models/api';
import { TwitterApiUtilsResponse } from '@/types/response';

type PostCreateTweetParam = {
  tweetText: string;
};

export class PostApiUtils {
  api: i.PostApi;
  flag: DefaultFlag;

  constructor(api: i.PostApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  mergeDefaultValue<T>(defaultValue: T | undefined, value: T | undefined): T {
    if (value == undefined) return defaultValue;
    if (defaultValue == undefined) return value;
    if (typeof defaultValue === 'object') {
      if (Array.isArray(value)) {
        return value.map((v) => this.mergeDefaultValue(defaultValue[0], v)) as T;
      } else {
        const key = [...Object.keys(defaultValue), ...Object.keys(value)];
        return key.reduce((v, k) => ({ ...v, [k]: this.mergeDefaultValue(defaultValue[k], value[k]) }), <T>{});
      }
    }
    return value;
  }

  async postCreateTweet(param: PostCreateTweetParam): Promise<TwitterApiUtilsResponse<i.CreateTweetResponse>> {
    const value = this.mergeDefaultValue(i.PostCreateTweetRequestFromJSON(this.flag.CreateTweet), {
      variables: {
        tweetText: param.tweetText,
        darkRequest: undefined,
        media: undefined,
        semanticAnnotationIds: undefined,
      },
      features: undefined,
      queryId: undefined,
    });
    const response = await this.api.postCreateTweetRaw({
      postCreateTweetRequest: value,
    });
    const raw = {
      response: response.raw,
    };
    return {
      raw: raw,
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }
}
