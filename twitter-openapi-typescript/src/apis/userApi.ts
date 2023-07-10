import * as i from 'twitter-openapi-typescript-generated';
import { RequestParam, DefaultFlag, UserApiUtilsResponse, UsersApiUtilsResponse } from '@/models';
import { buildHeader } from '@/utils';

type getUserByScreenNameParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

type getUserByRestIdParam = {
  userId: string;
  extraParam?: { [key: string]: any };
};

type getUsersByRestIdsParam = {
  userIds: string[];
  extraParam?: { [key: string]: any };
};

export class UserApiUtils {
  api: i.UserApi;
  flag: DefaultFlag;

  constructor(api: i.UserApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: RequestParam<i.UserResults, T>): Promise<UserApiUtilsResponse> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const fieldTogglesFn = () => {
      if (this.flag[param.key]['fieldToggles'] == null) return { fieldToggles: '' };
      return { fieldToggles: JSON.stringify(this.flag[param.key]['fieldToggles']) };
    };
    const response = await apiFn({
      pathQueryId: this.flag[param.key]['queryId'],
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param.param }),
      features: JSON.stringify(this.flag[param.key]['features']),
      ...fieldTogglesFn(),
    });
    const user = param.convertFn(await response.value());
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: user.result,
    };
  }

  async requests<T>(param: RequestParam<i.UserResults[], T>): Promise<UsersApiUtilsResponse> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const fieldTogglesFn = () => {
      if (this.flag[param.key]['fieldToggles'] == null) return { fieldToggles: '' };
      return { fieldToggles: JSON.stringify(this.flag[param.key]['fieldToggles']) };
    };
    const response = await apiFn({
      pathQueryId: this.flag[param.key]['queryId'],
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param.param }),
      features: JSON.stringify(this.flag[param.key]['features']),
      ...fieldTogglesFn(),
    });
    const user = param.convertFn(await response.value()).map((e) => e.result);
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: user,
    };
  }

  async getUserByScreenName(param: getUserByScreenNameParam): Promise<UserApiUtilsResponse> {
    const args = {
      screen_name: param.screenName,
      ...param.extraParam,
    };
    const response = this.request({
      key: 'UserByScreenName',
      apiFn: this.api.getUserByScreenNameRaw,
      convertFn: (e) => e.data.user,
      param: args,
    });
    return response;
  }
  async getUserByRestId(param: getUserByRestIdParam): Promise<UserApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...param.extraParam,
    };
    const response = this.request({
      key: 'UserByRestId',
      apiFn: this.api.getUserByRestIdRaw,
      convertFn: (e) => e.data.user,
      param: args,
    });
    return response;
  }

  async getUsersByRestIds(param: getUsersByRestIdsParam): Promise<UsersApiUtilsResponse> {
    const args = {
      userIds: param.userIds,
      ...param.extraParam,
    };
    const response = this.requests({
      key: 'UsersByRestIds',
      apiFn: this.api.getUsersByRestIdsRaw,
      convertFn: (e) => e.data.users,
      param: args,
    });
    return response;
  }
}
