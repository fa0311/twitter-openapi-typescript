import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, RequestParam, TweetApiUtilsData, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, buildTweetApiUtils, errorCheck, getKwargs, type InitOverridesType } from '@/utils';

export type ProfileSpotlightsQueryParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

export type TweetResultByRestIdParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

export type ExtraParam = {
  extraParam?: { [key: string]: any };
};

export type DataSaverModeParam = {
  deviceId?: string;
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

  // A Periscope (live video) token for the account.
  async getAuthenticatePeriscope(param: ExtraParam = {}): Promise<TwitterApiUtilsResponse<string>> {
    const args = {
      ...param.extraParam,
    };
    return this.request({
      key: 'AuthenticatePeriscope',
      apiFn: this.api.getAuthenticatePeriscopeRaw,
      convertFn: (e) => e.data.authenticatePeriscope,
      param: args,
    });
  }

  async getCreatorStudioTabBarItemQuery(
    param: ExtraParam = {},
  ): Promise<TwitterApiUtilsResponse<i.CreatorStudioTabBarItemQueryResponseData>> {
    const args = {
      ...param.extraParam,
    };
    return this.request({
      key: 'CreatorStudioTabBarItemQuery',
      apiFn: this.api.getCreatorStudioTabBarItemQueryRaw,
      convertFn: (e) => e.data,
      param: args,
    });
  }

  async getDataSaverMode(
    param: DataSaverModeParam = {},
  ): Promise<TwitterApiUtilsResponse<i.DataSaverModeResponseData>> {
    const args = {
      ...(param.deviceId == undefined ? {} : { device_id: param.deviceId }),
      ...param.extraParam,
    };
    return this.request({
      key: 'DataSaverMode',
      apiFn: this.api.getDataSaverModeRaw,
      convertFn: (e) => e.data,
      param: args,
    });
  }

  // Grok model options, prompts and eligibility.
  async getGrokHome(param: ExtraParam = {}): Promise<TwitterApiUtilsResponse<i.GrokHome>> {
    const args = {
      ...param.extraParam,
    };
    return this.request({
      key: 'GrokHome',
      apiFn: this.api.getGrokHomeRaw,
      convertFn: (e) => e.data.grokHome,
      param: args,
    });
  }

  async getPinnedTimelines(param: ExtraParam = {}): Promise<TwitterApiUtilsResponse<i.PinnedTimelines>> {
    const args = {
      ...param.extraParam,
    };
    return this.request({
      key: 'PinnedTimelines',
      apiFn: this.api.getPinnedTimelinesRaw,
      convertFn: (e) => e.data.pinnedTimelines,
      param: args,
    });
  }
}
