import * as i from 'twitter-openapi-typescript-generated';
import { buildHeader } from '@/utils';
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
    const response = await apiFn({
      pathQueryId: this.flag[param.key]['queryId'],
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param.param }),
      features: JSON.stringify(this.flag[param.key]['features']),
    });
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
      convertFn: (value) => value.data.userResultByScreenName,
      param: args,
    });

    return response;
  }
}
