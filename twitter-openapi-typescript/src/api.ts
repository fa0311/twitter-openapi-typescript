import * as i from 'twitter-openapi-typescript-generated';
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
import { DefaultFlag } from '@/models';
import { UsersApiUtils } from './apis/usersApi';

export class TwitterOpenApi {
  static hash = '7560ee63488ec9d15f5389e64867f2413701d7dd';
  static url = `https://raw.githubusercontent.com/fa0311/twitter-openapi/${this.hash}/src/config/placeholder.json`;
  static twitter = 'https://twitter.com/home';

  static userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';
  static bearer =
    'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';

  static browser_headers = {
    accept: 'text/plain, */*; q=0.01',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': TwitterOpenApi.userAgent,
  };

  static api_key = {
    'x-twitter-client-language': 'en',
    'x-twitter-active-user': 'yes',
    ...TwitterOpenApi.browser_headers,
  };

  static fetchApi: i.FetchAPI = fetch;

  cookie_normalize(cookie: string[]): { [key: string]: string } {
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
      headers: { Cookie: this.cookieEncode(cookies) },
    });
    cookies = { ...cookies, ...this.cookie_normalize(response.headers.getSetCookie()) };

    const html = await TwitterOpenApi.fetchApi(TwitterOpenApi.twitter, {
      method: 'GET',
      headers: { Cookie: this.cookieEncode(cookies) },
    }).then((response) => response.text());

    const re = new RegExp('document.cookie="(.*?)";', 'g');

    const find = [...html.matchAll(re)].map((e) => e[1]);
    cookies = { ...cookies, ...this.cookie_normalize(find) };

    cookies = Object.entries(cookies)
      .filter(([key, value]) => key != 'ct0')
      .reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

    if (!cookies['gt']) {
      const activate_headers = {
        ...TwitterOpenApi.api_key,
        authorization: `Bearer ${TwitterOpenApi.bearer}`,
      };
      const { guest_token } = await TwitterOpenApi.fetchApi('https://api.twitter.com/1.1/guest/activate.json', {
        method: 'POST',
        headers: activate_headers,
      }).then((response) => response.json());
      cookies['gt'] = guest_token;
    }

    // const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    // const csrfToken = [...Array(32)].reduce((a) => a + chars[Math.floor(Math.random() * chars.length)], '');
    // cookies.push({ name: 'ct0', value: csrfToken });

    return this.getClientFromCookies(cookies);
  }

  async getClientFromCookies(cookies: { [key: string]: string }): Promise<TwitterOpenApiClient> {
    let api_key: { [key: string]: string } = { ...TwitterOpenApi.api_key };
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
    const flag = (await TwitterOpenApis.fetchApi(TwitterOpenApi.url, { method: 'GET' }).then((res) =>
      res.json(),
    )) as DefaultFlag;
    return new TwitterOpenApiClient(api, flag);
  }
}

export class TwitterOpenApiClient {
  private config: i.Configuration;
  public flag: DefaultFlag;

  constructor(config: i.Configuration, flag: DefaultFlag) {
    this.config = config;
    this.flag = flag;
  }

  getDefaultApi(): DefaultApiUtils {
    return new DefaultApiUtils(new i.DefaultApi(this.config), this.flag);
  }

  getTweetApi(): TweetApiUtils {
    return new TweetApiUtils(new i.TweetApi(this.config), this.flag);
  }

  getUserApi(): UserApiUtils {
    return new UserApiUtils(new i.UserApi(this.config), this.flag);
  }

  getUsersApi(): UsersApiUtils {
    return new UsersApiUtils(new i.UsersApi(this.config), this.flag);
  }

  getUserListApi(): UserListApiUtils {
    return new UserListApiUtils(new i.UserListApi(this.config), this.flag);
  }

  getPostApi(): PostApiUtils {
    return new PostApiUtils(new i.PostApi(this.config), this.flag);
  }

  getV11GetApi(): V11GetApiUtils {
    return new V11GetApiUtils(new i.V11GetApi(this.config), this.flag);
  }

  getV11PostApi(): V11PostApiUtils {
    return new V11PostApiUtils(new i.V11PostApi(this.config), this.flag);
  }

  getV20GetApi(): V20GetApiUtils {
    return new V20GetApiUtils(new i.V20GetApi(this.config), this.flag);
  }

  getInitialStateApi(): InitialStateApiUtils {
    return new InitialStateApiUtils();
  }
}
