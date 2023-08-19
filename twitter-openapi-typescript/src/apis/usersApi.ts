import * as i from 'twitter-openapi-typescript-generated';
import { RequestParam, DefaultFlag, UserApiUtilsData, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, errorCheck, getKwargs, userOrNullConverter, userResultConverter } from '@/utils';

type getUsersByRestIdsParam = {
  userIds: string[];
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<UserApiUtilsData[]>;

export class UsersApiUtils {
  api: i.UsersApi;
  flag: DefaultFlag;

  constructor(api: i.UsersApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: RequestParam<i.UserResults[], T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args);
    const checked = errorCheck(await response.value());
    const result = param.convertFn(checked);
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
      convertFn: (e) => e.data.users,
      param: args,
    });
    return response;
  }
}
