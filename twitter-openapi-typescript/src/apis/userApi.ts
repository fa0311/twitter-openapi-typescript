import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, RequestParam, TwitterApiUtilsResponse, UserApiUtilsData } from '@/models';
import { buildHeader, dataRequest, errorCheck, getKwargs, type InitOverridesType, userOrNullConverter } from '@/utils';

type getUserByScreenNameParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

type getUserByRestIdParam = {
  userId: string;
  extraParam?: { [key: string]: any };
};

type getViewerBadgeCountsParam = {
  extraParam?: { [key: string]: any };
};

type getFetchDraftTweetsParam = {
  ascending?: boolean;
  extraParam?: { [key: string]: any };
};

type getFetchScheduledTweetsParam = {
  ascending?: boolean;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<UserApiUtilsData>;

export class UserApiUtils {
  api: i.UserApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.UserApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async request<T>(param: RequestParam<i.UserResults, T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args, this.initOverrides(this.flag[param.key]));
    const result = param.convertFn(await response.value());
    const user = result.result && userOrNullConverter(result.result);

    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: {
        raw: result,
        user: user,
      },
    };
  }

  async getUserByScreenName(param: getUserByScreenNameParam): Promise<ResponseType> {
    const args = {
      screen_name: param.screenName,
      ...param.extraParam,
    };
    const response = this.request({
      key: 'UserByScreenName',
      apiFn: this.api.getUserByScreenNameRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors),
      param: args,
    });
    return response;
  }
  async getUserByRestId(param: getUserByRestIdParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...param.extraParam,
    };
    const response = this.request({
      key: 'UserByRestId',
      apiFn: this.api.getUserByRestIdRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors),
      param: args,
    });
    return response;
  }

  // Unread counts (notifications, DMs, XChat) of the authenticated account.
  async getViewerBadgeCounts(param: getViewerBadgeCountsParam = {}): Promise<TwitterApiUtilsResponse<i.BadgeCounts>> {
    const args = {
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getViewerBadgeCountsRaw,
      flag: this.flag.ViewerBadgeCounts,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data, e.errors).viewerV2.userResults.result.badgeCounts,
      param: args,
    });
  }

  async getFetchDraftTweets(param: getFetchDraftTweetsParam = {}): Promise<TwitterApiUtilsResponse<i.DraftTweet[]>> {
    const args = {
      ...(param.ascending == undefined ? {} : { ascending: param.ascending }),
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getFetchDraftTweetsRaw,
      flag: this.flag.FetchDraftTweets,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data, e.errors).viewer.draftList.responseData,
      param: args,
    });
  }

  // Items are untyped: no scheduled post has been recorded yet.
  async getFetchScheduledTweets(
    param: getFetchScheduledTweetsParam = {},
  ): Promise<TwitterApiUtilsResponse<{ [key: string]: any }[]>> {
    const args = {
      ...(param.ascending == undefined ? {} : { ascending: param.ascending }),
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getFetchScheduledTweetsRaw,
      flag: this.flag.FetchScheduledTweets,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data, e.errors).viewer.scheduledTweetList,
      param: args,
    });
  }
}
