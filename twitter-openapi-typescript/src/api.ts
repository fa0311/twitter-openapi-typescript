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

type TwitterOpenApiParams = {
  lang?: string;
};

export type FetchApi = i.FetchAPI;

export class TwitterOpenApi {
  static hash = 'd5ccc25869b68cbb39c68fa81a1fa77967a667da';
  static url = `https://raw.githubusercontent.com/fa0311/twitter-openapi/${this.hash}/src/config/placeholder.json`;
  static userAgent =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';
  static bearer =
    'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';
  param: TwitterOpenApiParams;

  fetchApi: FetchApi | undefined;

  constructor(param: TwitterOpenApiParams = {}) {
    this.param = param;
  }

  setFetchApi(fetchApi: FetchApi) {
    this.fetchApi = fetchApi;
  }

  async getClientFromCookies(ct0: string, authToken: string): Promise<TwitterOpenApiClient> {
    const config: i.ConfigurationParameters = {
      fetchApi: this.fetchApi || fetch,
      middleware: [
        {
          pre: async (context) => {
            const cookie = [
              {
                name: 'auth_token',
                value: authToken,
              },
              {
                name: 'ct0',
                value: ct0,
              },
            ]
              .map((cookie) => `${cookie.name}=${cookie.value}`)
              .join('; ');

            if (context.init.headers) {
              const headers = context.init.headers as i.HTTPHeaders;
              headers['cookie'] = cookie;
            }
            return context;
          },
        },
      ],
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
    const flag = config
      .fetchApi(TwitterOpenApi.url, { method: 'GET' })
      .then((res) => res.json()) as Promise<DefaultFlag>;
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
