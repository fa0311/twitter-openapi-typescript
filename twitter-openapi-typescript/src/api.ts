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
import { DefaultFlag, initOverrides } from '@/models';
import * as i from 'twitter-openapi-typescript-generated';
import { UsersApiUtils } from './apis/usersApi';

export class TwitterOpenApi {
  static hash = 'fbfe847e9b3f11e2b25e294827f3637e316d41f0';
  static url = `https://raw.githubusercontent.com/fa0311/twitter-openapi/${this.hash}/src/config/placeholder.json`;
  static header = "https://raw.githubusercontent.com/fa0311/latest-user-agent/main/header.json"
  static twitter = 'https://twitter.com/home';
  static bearer =
    'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';


  async get_browser_headers(): Promise<{ [key: string]: string }> {
    const raw = await TwitterOpenApi.fetchApi(TwitterOpenApi.header);
    const json = await raw.json();

    const ignore = ["host", "connection"];
    const keys = Object.keys(json["chrome-fetch"]).filter((key) => !ignore.includes(key));
     

    return {
      ...keys.reduce((a, b) => ({ ...a, [b]: json["chrome-fetch"][b] }), {}),
      'accept-encoding': 'identity',
      "priority": "u=1, i",
      "referer":"https://twitter.com/home",
  };
  }


  async get_api_key(): Promise<{ [key: string]: string }> {
    const data = await this.get_browser_headers();
    return {
      ...data,
      'x-twitter-client-language': 'en',
      'x-twitter-active-user': 'yes',
      authorization: `Bearer ${TwitterOpenApi.bearer}`
    };
  }

  static fetchApi: i.FetchAPI = fetch.bind(globalThis);

  initOverrides: initOverrides = {};

  setInitOverrides(initOverrides: initOverrides): void {
    this.initOverrides = initOverrides;
  }

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
      ...this.initOverrides,
    });

    if (response.headers.getSetCookie) {
      cookies = { ...cookies, ...this.cookie_normalize(response.headers.getSetCookie()) };
    } else {
      cookies = { ...cookies, ...this.cookie_normalize(response.headers.get('set-cookie')?.split(', ') || []) };
    }
    const html = await response.text();

    // const html = await TwitterOpenApi.fetchApi(TwitterOpenApi.twitter, {
    //   method: 'GET',
    //   headers: { Cookie: this.cookieEncode(cookies) },
    //   ...this.initOverrides,
    // }).then((response) => response.text());

    const re = new RegExp('document.cookie="(.*?)";', 'g');

    const find = [...html.matchAll(re)].map((e) => e[1]);
    cookies = { ...cookies, ...this.cookie_normalize(find) };

    cookies = Object.entries(cookies)
      .filter(([key, value]) => key != 'ct0')
      .reduce((a, [key, value]) => ({ ...a, [key]: value }), {});

    if (!cookies['gt']) {
      const activate_headers = await this.get_api_key();
      const { guest_token } = await TwitterOpenApi.fetchApi('https://api.twitter.com/1.1/guest/activate.json', {
        method: 'POST',
        headers: activate_headers,
        ...this.initOverrides,
      }).then((response) => response.json());
      cookies['gt'] = guest_token;
    }

    // const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    // const csrfToken = [...Array(32)].reduce((a) => a + chars[Math.floor(Math.random() * chars.length)], '');
    // cookies.push({ name: 'ct0', value: csrfToken });

    return this.getClientFromCookies(cookies);
  }

  async getClientFromCookies(cookies: { [key: string]: string }): Promise<TwitterOpenApiClient> {
    const api_key = await this.get_api_key();
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
      ...this.initOverrides,
    }).then((res) => res.json())) as DefaultFlag;
    return new TwitterOpenApiClient(api, flag, this.initOverrides);
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
