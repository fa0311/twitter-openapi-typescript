import {
  DefaultApiUtils,
  InitialStateApiUtils,
  PostApiUtils,
  TweetApiUtils,
  UserApiUtils,
  UserListApiUtils,
  V11GetApiUtils,
  V11PostApiUtils,
  V20GetApiUtils,
} from '@/apis';
import type { DefaultFlag, initOverrides } from '@/models';
import * as i from 'twitter-openapi-typescript-generated';
import { UsersApiUtils } from './apis/usersApi';

import { generateTransactionId } from 'x-client-transaction-id-generater';

export class TwitterOpenApi {
  static hash = '408d8e34cb30fffa287c29d5739aa37ce0d9193a';
  static url = `https://raw.githubusercontent.com/fa0311/twitter-openapi/${this.hash}/src/config/placeholder.json`;
  static header = 'https://raw.githubusercontent.com/fa0311/latest-user-agent/refs/heads/main/header.json';
  static twitter = 'https://x.com/home';
  static bearer =
    'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';

  static fetchApi: i.FetchAPI = fetch.bind(globalThis);

  additionalBrowserHeaders: { [key: string]: string } = {};

  setAdditionalBrowserHeaders(headers: { [key: string]: string }): void {
    this.additionalBrowserHeaders = headers;
  }

  additionalApiHeaders: { [key: string]: string } = {};

  setAdditionalApiHeaders(headers: { [key: string]: string }): void {
    this.additionalApiHeaders = headers;
  }

  async getHeaders(): Promise<{
    api: { [key: string]: string };
    browser: { [key: string]: string };
  }> {
    const raw = await TwitterOpenApi.fetchApi(TwitterOpenApi.header, {
      method: 'GET',
    });
    const json = await raw.json();
    const ignore = ['host', 'connection'];

    const getHader = (name: string): { [key: string]: string } => {
      return Object.entries(json[name]).reduce((a, [key, value]) => {
        if (ignore.includes(key)) return a;
        return { ...a, [key]: value };
      }, {});
    };

    return {
      api: {
        ...getHader('chrome-fetch'),
        'accept-encoding': 'identity',
        pragma: 'no-cache',
        referer: TwitterOpenApi.twitter,
        priority: 'u=1, i',
        'x-twitter-client-language': 'en',
        'x-twitter-active-user': 'yes',
        // 'x-twitter-auth-type': 'xxxx'
        // 'x-csrf-token': 'xxxx',
        // 'x-guest-token': 'xxxx',
        authorization: `Bearer ${TwitterOpenApi.bearer}`,
        ...this.additionalApiHeaders,
      },
      browser: {
        ...getHader('chrome'),
        ...this.additionalBrowserHeaders,
      },
    };
  }

  cookieNormalize(cookie: string[]): { [key: string]: string } {
    return cookie.reduce((a, b) => {
      const [key, value] = b.split('; ')[0].split('=');
      return { ...a, [key]: value };
    }, {});
  }

  cookieEncode(cookie: { [key: string]: string }): string {
    return Object.entries(cookie)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');
  }

  setCookies(context: i.RequestContext, cookies: { [key: string]: string }): i.RequestContext {
    if (context.init.headers) {
      const headers = context.init.headers as i.HTTPHeaders;
      headers['cookie'] = this.cookieEncode(cookies);
    }
    return context;
  }

  async getGuestClient(): Promise<TwitterOpenApiClient> {
    let cookies: { [key: string]: string } = {};

    const response = await TwitterOpenApi.fetchApi(TwitterOpenApi.twitter, {
      method: 'GET',
      redirect: 'manual',
      headers: { Cookie: this.cookieEncode(cookies), ...(await this.getHeaders()).browser },
    });

    if (response.headers.getSetCookie) {
      cookies = {
        ...cookies,
        ...this.cookieNormalize(response.headers.getSetCookie()),
      };
    } else {
      cookies = {
        ...cookies,
        ...this.cookieNormalize(response.headers.get('set-cookie')?.split(', ') || []),
      };
    }
    const html = await response.text();

    const re = /document.cookie="(.*?)";/g;

    const find = [...html.matchAll(re)].map((e) => e[1]);
    cookies = { ...cookies, ...this.cookieNormalize(find) };

    cookies = Object.entries(cookies)
      .filter(([key, value]) => key != 'ct0')
      .reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

    if (!cookies['gt']) {
      const activate_headers = {
        ...(await this.getHeaders()).api,
        cookie: this.cookieEncode(cookies),
      };
      const { guest_token } = await TwitterOpenApi.fetchApi('https://api.x.com/1.1/guest/activate.json', {
        method: 'POST',
        headers: activate_headers,
      }).then((response) => response.json());
      cookies['gt'] = guest_token;
    }

    return this.getClientFromCookies(cookies);
  }

  async getClientFromCookies(cookies: { [key: string]: string }): Promise<TwitterOpenApiClient> {
    const api_key = (await this.getHeaders()).api;
    if (cookies['ct0']) {
      api_key['x-twitter-auth-type'] = 'OAuth2Session';
      api_key['x-csrf-token'] = cookies['ct0'];
    }
    if (cookies['gt']) {
      api_key['x-guest-token'] = cookies['gt'];
    }

    const config: i.ConfigurationParameters = {
      fetchApi: TwitterOpenApi.fetchApi,
      middleware: [{ pre: async (context) => this.setCookies(context, cookies) }],
      apiKey: (key) => api_key[key.toLowerCase()],
      accessToken: TwitterOpenApi.bearer,
    };

    return this.getClient(new i.Configuration(config));
  }

  async getClient(api: i.Configuration): Promise<TwitterOpenApiClient> {
    const flag = (await TwitterOpenApi.fetchApi(TwitterOpenApi.url, {
      method: 'GET',
    }).then((res) => res.json())) as DefaultFlag;

    const url = 'https://raw.githubusercontent.com/fa0311/x-client-transaction-pair-dict/refs/heads/main/pair.json';
    const pair = await TwitterOpenApi.fetchApi(url, {
      method: 'GET',
    }).then((res) => res.json());

    const initOverrides: initOverrides = async ({ context, init }) => {
      const randomPair = pair[Math.floor(Math.random() * pair.length)];
      const { animationKey, verification } = randomPair;
      const tid = await generateTransactionId(context.method, `/i/api${context.path}`, verification, animationKey);
      init.headers = { ...init.headers, 'x-client-transaction-id': tid };
      return init;
    };

    return new TwitterOpenApiClient(api, flag, initOverrides);
  }
}

export class TwitterOpenApiClient {
  config: i.Configuration;
  flag: DefaultFlag;
  initOverrides: initOverrides;

  constructor(config: i.Configuration, flag: DefaultFlag, initOverrides: initOverrides) {
    this.config = config;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  getDefaultApi(): DefaultApiUtils {
    return new DefaultApiUtils(new i.DefaultApi(this.config), this.flag, this.initOverrides);
  }

  getTweetApi(): TweetApiUtils {
    return new TweetApiUtils(new i.TweetApi(this.config), this.flag, this.initOverrides);
  }

  getUserApi(): UserApiUtils {
    return new UserApiUtils(new i.UserApi(this.config), this.flag, this.initOverrides);
  }

  getUsersApi(): UsersApiUtils {
    return new UsersApiUtils(new i.UsersApi(this.config), this.flag, this.initOverrides);
  }

  getUserListApi(): UserListApiUtils {
    return new UserListApiUtils(new i.UserListApi(this.config), this.flag, this.initOverrides);
  }

  getPostApi(): PostApiUtils {
    return new PostApiUtils(new i.PostApi(this.config), this.flag, this.initOverrides);
  }

  getV11GetApi(): V11GetApiUtils {
    return new V11GetApiUtils(new i.V11GetApi(this.config), this.flag, this.initOverrides);
  }

  getV11PostApi(): V11PostApiUtils {
    return new V11PostApiUtils(new i.V11PostApi(this.config), this.flag, this.initOverrides);
  }

  getV20GetApi(): V20GetApiUtils {
    return new V20GetApiUtils(new i.V20GetApi(this.config), this.flag, this.initOverrides);
  }

  getInitialStateApi(): InitialStateApiUtils {
    return new InitialStateApiUtils();
  }
}
