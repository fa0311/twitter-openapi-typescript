import type { DefaultFlag, RequestParam, TweetApiUtilsData, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, buildTweetApiUtils, errorCheck, getKwargs, InitOverridesType } from '@/utils';
import type * as i from 'twitter-openapi-typescript-generated';

export type ProfileSpotlightsQueryParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

export type TweetResultByRestIdParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

export class DefaultApiUtils {
  api: i.DefaultApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.DefaultApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async request<T1, T2>(param: RequestParam<T1, T2>): Promise<TwitterApiUtilsResponse<T1>> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args, this.initOverrides(this.flag[param.key]));
    const data = param.convertFn(await response.value());
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: data,
    };
  }

  async getProfileSpotlightsQuery(
    param: ProfileSpotlightsQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.UserResultByScreenName>> {
    const args = {
      screenName: param.screenName,
      ...param.extraParam,
    };
    const response = await this.request({
      key: 'ProfileSpotlightsQuery',
      apiFn: this.api.getProfileSpotlightsQueryRaw,
      convertFn: (e) => errorCheck(e.data.userResultByScreenName, e.errors),
      param: args,
    });

    return response;
  }

  async getTweetResultByRestId(
    param: TweetResultByRestIdParam,
  ): Promise<TwitterApiUtilsResponse<TweetApiUtilsData | undefined>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const response = await this.request({
      key: 'TweetResultByRestId',
      apiFn: this.api.getTweetResultByRestIdRaw,
      convertFn: (e) => errorCheck(buildTweetApiUtils({ result: errorCheck(e.data.tweetResult, e.errors) }), e.errors),
      param: args,
    });

    return response;
  }
}
