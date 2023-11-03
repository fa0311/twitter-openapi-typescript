import { TwitterOpenApi } from 'twitter-openapi-typescript';
import { TwitterApi, ITwitterApiClientPlugin } from 'twitter-api-v2';
import fetch from 'node-fetch';

import * as dotenv from 'dotenv';
dotenv.config();

const authToken = process.env.AUTH_TOKEN as string;
const CsrfToken = process.env.CSRF_TOKEN as string;

export const login = async () => {
  const cookie = { auth_token: authToken, ct0: CsrfToken };

  const api = new TwitterOpenApi({ fetchApi: fetch as any });
  const client = await api.getClientFromCookies(cookie);

  const plugin: ITwitterApiClientPlugin = {
    onBeforeRequest: async (params) => {
      params.computedParams.headers = {
        ...params.computedParams.headers,
        ...TwitterOpenApi.api_key,
        'x-csrf-token': cookie.ct0,
        'x-twitter-auth-type': 'OAuth2Session',
        authorization: `Bearer ${TwitterOpenApi.bearer}`,
        cookie: api.cookieEncode(cookie),
      };
      params.requestOptions.headers = {
        ...params.requestOptions.headers,
        ...TwitterOpenApi.api_key,
        'x-csrf-token': cookie.ct0,
        'x-twitter-auth-type': 'OAuth2Session',
        authorization: `Bearer ${TwitterOpenApi.bearer}`,
        cookie: api.cookieEncode(cookie),
      };
    },
  };

  const legacy = new TwitterApi('_', { plugins: [plugin] });

  return { client, legacy };
};

export default login;
