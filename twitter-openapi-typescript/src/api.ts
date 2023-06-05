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
import { DefaultFlag } from '@/types/flag';

export type TwitterOpenApiParams = {
  lang?: string;
  fetchApi?: i.FetchAPI;
};

export type TwitterOpenApiCookie = {
  name: string;
  value: string;
};

export class TwitterOpenApi {
  static hash = 'd5ccc25869b68cbb39c68fa81a1fa77967a667da';
  static url = `https://raw.githubusercontent.com/fa0311/twitter-openapi/${this.hash}/src/config/placeholder.json`;
  static twitter = 'https://twitter.com/home';

  static userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';
  static bearer =
    'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';
  param: TwitterOpenApiParams;

  constructor(param: TwitterOpenApiParams = {}) {
    this.param = param;
  }

  get fetchApi(): i.FetchAPI {
    return this.param.fetchApi || fetch;
  }

  cookieDecode(cookie: string): TwitterOpenApiCookie[] {
    return cookie
      .split(', ')
      .map((cookie) => cookie.split(';')[0])
      .filter((cookie) => cookie.indexOf('=') != -1)
      .map((cookie) => cookie.split('='))
      .map(([name, value]) => ({
        name: name,
        value: value,
      }));
  }
  cookieEncode(cookie: TwitterOpenApiCookie[]): string {
    return cookie.map((cookie) => `${cookie.name}=${cookie.value}`).join('; ');
  }

  async getGuestSession(): Promise<TwitterOpenApiCookie[]> {
    const response = await this.fetchApi(TwitterOpenApi.twitter, { method: 'GET', redirect: 'manual' });
    const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    const csrfToken = [...Array(32)].reduce((a) => a + chars[Math.floor(Math.random() * chars.length)], '');
    const cookie = this.cookieDecode(response.headers.get('set-cookie')!);
    cookie.push({ name: 'ct0', value: csrfToken });

    const html = await this.fetchApi(TwitterOpenApi.twitter, {
      method: 'GET',
      headers: { Cookie: this.cookieEncode(cookie) },
    }).then((response) => response.text());

    const re = new RegExp('<script nonce="([a-zA-Z0-9]{48})">(document.cookie="(.*?)";)+<\\/script>');

    const script = html.match(re)[0];
    const document = script
      .split('document.cookie="')
      .slice(1)
      .map((e) => e.replace('</script>', '').replace('";', ''))
      .map((e) => this.cookieDecode(e)[0])
      .filter((e) => cookie.findIndex((c) => c.name == e.name) == -1)
      .forEach((e) => cookie.push(e));

    return cookie;
  }

  setCookies(context: i.RequestContext, cookies: TwitterOpenApiCookie[]): i.RequestContext {
    if (context.init.headers) {
      const headers = context.init.headers as i.HTTPHeaders;
      headers['cookie'] = this.cookieEncode(cookies);
    }
    return context;
  }

  async getClient(): Promise<TwitterOpenApiClient> {
    const cookies: TwitterOpenApiCookie[] = await this.getGuestSession();
    const config: i.ConfigurationParameters = {
      fetchApi: this.fetchApi,
      middleware: [{ pre: async (context) => this.setCookies(context, cookies) }],
      apiKey: (key) => {
        return {
          'user-agent': TwitterOpenApi.userAgent,
          'x-twitter-client-language': this.param.lang ?? 'en',
          'x-twitter-active-user': 'yes',
          'x-csrf-token': cookies.find((cookie) => cookie.name === 'ct0')?.value,
        }[key]!;
      },
      accessToken: TwitterOpenApi.bearer,
    };
    const flag = this.fetchApi(TwitterOpenApi.url, { method: 'GET' }).then((res) => res.json()) as Promise<DefaultFlag>;
    return new TwitterOpenApiClient(new i.Configuration(config), await flag);
  }

  async getClientFromCookies(ct0: string, authToken: string): Promise<TwitterOpenApiClient> {
    const cookies: TwitterOpenApiCookie[] = [
      ...(await this.getGuestSession()),
      { name: 'auth_token', value: authToken },
      { name: 'ct0', value: ct0 },
    ];
    const config: i.ConfigurationParameters = {
      fetchApi: this.param.fetchApi || fetch,
      middleware: [{ pre: async (context) => this.setCookies(context, cookies) }],
      apiKey: (key) => {
        return {
          'user-agent': TwitterOpenApi.userAgent,
          'x-twitter-client-language': this.param.lang ?? 'en',
          'x-twitter-active-user': 'yes',
          'x-twitter-auth-type': 'OAuth2Session',
          'x-csrf-token': ct0,
        }[key]!;
      },
      accessToken: TwitterOpenApi.bearer,
    };
    const flag = this.fetchApi(TwitterOpenApi.url, { method: 'GET' }).then((res) => res.json()) as Promise<DefaultFlag>;
    return new TwitterOpenApiClient(new i.Configuration(config), await flag);
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
