import {
  Configuration,
  ConfigurationParameters,
  TweetApi,
  HTTPHeaders,
} from 'twitter-openapi-typescript-generated/src';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
dotenv.config();

export interface GlobalWithCognitoFix extends Global {
  fetch: any;
}
declare const global: GlobalWithCognitoFix;
global.fetch = fetch;

const hash = 'd5ccc25869b68cbb39c68fa81a1fa77967a667da';
const url = `https://raw.githubusercontent.com/fa0311/twitter-openapi/${hash}/src/config/placeholder.json`;
const userAgent =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36';
const bearer =
  'AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA';

const authToken = process.env.AUTH_TOKEN;
const ct0 = process.env.CSRF_TOKEN;

type ConfigType = {
  [key: string]: {
    [key: string]: any;
  };
};

const config = fetch(url, { method: 'GET' }).then((res) => res.json()) as Promise<ConfigType>;

const apiConfig: ConfigurationParameters = {
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
          const headers = context.init.headers as HTTPHeaders;
          headers['cookie'] = cookie;
        }
        return context;
      },
    },
  ],
  apiKey: (key) => {
    return {
      'user-agent': userAgent,
      'x-twitter-client-language': 'ja',
      'x-twitter-active-user': 'yes',
      'x-twitter-auth-type': 'OAuth2Session',
      'x-csrf-token': ct0,
    }[key]!;
  },
  accessToken: bearer,
};

const tweetApi = new TweetApi(new Configuration(apiConfig));
test('test', async () => {
  const args = await config.then((res) => res.HomeTimeline);
  const response = await tweetApi.getHomeTimeline({
    queryId: args.queryId,
    variables: JSON.stringify(args.variables),
    features: JSON.stringify(args.features),
  });

  expect(0).toBe(0);
});
