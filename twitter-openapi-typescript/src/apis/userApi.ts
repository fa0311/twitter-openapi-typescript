import { DefaultFlag, RequestParam, TwitterApiUtilsResponse, UserApiUtilsData, initOverrides } from '@/models';
import { buildHeader, errorCheck, getKwargs, nonNullable, userOrNullConverter } from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

type getUserByScreenNameParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

type getUserByRestIdParam = {
  userId: string;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<UserApiUtilsData>;

export class UserApiUtils {
  api: i.UserApi;
  flag: DefaultFlag;
  initOverrides: initOverrides;

  constructor(api: i.UserApi, flag: DefaultFlag, initOverrides: initOverrides) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async request<T>(param: RequestParam<i.UserResults, T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args, this.initOverrides);
    const checked = errorCheck(await response.value());
    const result = param.convertFn(checked);
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
      convertFn: (e) => nonNullable(e.data.user),
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
      convertFn: (e) => nonNullable(e.data.user),
      param: args,
    });
    return response;
  }
}
