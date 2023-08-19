import * as i from 'twitter-openapi-typescript-generated';
import { buildHeader, errorCheck, getKwargs } from '@/utils';
import { RequestParam, DefaultFlag, TwitterApiUtilsResponse } from '@/models';

export type ProfileSpotlightsQueryParam = {
  screenName: string;
  extraParam?: { [key: string]: any };
};

export class DefaultApiUtils {
  api: i.DefaultApi;
  flag: DefaultFlag;

  constructor(api: i.DefaultApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T1, T2>(param: RequestParam<T1, T2>): Promise<TwitterApiUtilsResponse<T1>> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args);
    const checked = errorCheck(await response.value());
    const data = param.convertFn(checked);
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
      convertFn: (value) => value.data.userResultByScreenName,
      param: args,
    });

    return response;
  }
}
