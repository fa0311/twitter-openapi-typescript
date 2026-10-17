import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, RequestParam, TwitterApiUtilsResponse, UserApiUtilsData } from '@/models';
import { buildHeader, dataRequest, errorCheck, getKwargs, type InitOverridesType, userResultConverter } from '@/utils';

type getUsersByRestIdsParam = {
  userIds: string[];
  extraParam?: { [key: string]: any };
};

type getUsersVerifiedAvatarsParam = {
  userIds: string[];
  extraParam?: { [key: string]: any };
};

type getSidebarUserRecommendationsParam = {
  profileUserId: string;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<UserApiUtilsData[]>;

export class UsersApiUtils {
  api: i.UsersApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.UsersApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async request<T>(param: RequestParam<i.UserResults[], T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args, this.initOverrides(this.flag[param.key]));
    const result = param.convertFn(await response.value());
    const user = userResultConverter(result);

    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: user,
    };
  }
  async getUsersByRestIds(param: getUsersByRestIdsParam): Promise<ResponseType> {
    const args = {
      userIds: param.userIds,
      ...param.extraParam,
    };
    const response = this.request({
      key: 'UsersByRestIds',
      apiFn: this.api.getUsersByRestIdsRaw,
      convertFn: (e) => errorCheck(e.data.users, e.errors),
      param: args,
    });
    return response;
  }

  // Partial users (avatar shape, verification) for the given ids.
  async getUsersVerifiedAvatars(
    param: getUsersVerifiedAvatarsParam,
  ): Promise<TwitterApiUtilsResponse<i.VerifiedAvatarUser[]>> {
    const args = {
      userIds: param.userIds,
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getUsersVerifiedAvatarsRaw,
      flag: this.flag.UsersVerifiedAvatars,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.usersResults.map((x) => x.result),
      param: args,
    });
  }

  // Who to follow, shown in the sidebar of a profile, each with its recommendation token.
  async getSidebarUserRecommendations(
    param: getSidebarUserRecommendationsParam,
  ): Promise<TwitterApiUtilsResponse<i.SidebarUserRecommendation[]>> {
    const args = {
      profileUserId: param.profileUserId,
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getSidebarUserRecommendationsRaw,
      flag: this.flag.SidebarUserRecommendations,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.sidebarUserRecommendations,
      param: args,
    });
  }
}
