import { DefaultFlag, RequestParam, TwitterApiUtilsResponse, UserApiUtilsData } from '@/models';
import { buildHeader, errorCheck, getKwargs, InitOverridesType, userResultConverter } from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

type getUsersByRestIdsParam = {
  userIds: string[];
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
}
