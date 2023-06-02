import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types';
import { RequestParamDefault } from '@/models';

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

  async request<T>(param: RequestParamDefault<T>): Promise<T> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const response = await apiFn({
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param }),
      features: JSON.stringify(this.flag[param.key]['features']),
    });
    return response.value() as T;
  }

  async gettProfileSpotlightsQuery(param: ProfileSpotlightsQueryParam): Promise<i.UserResultByScreenName> {
    const args = {
      screenName: param.screenName,
      ...param.extraParam,
    };
    const response = this.request({
      key: 'ProfileSpotlightsQuery',
      apiFn: this.api.getProfileSpotlightsQueryRaw,
      param: args,
    });
    return (await response).data.userResultByScreenName;
  }
}
