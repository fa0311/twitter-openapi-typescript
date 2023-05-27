import {
  Configuration,
  ConfigurationParameters,
  TweetApi,
  HTTPHeaders,
} from 'twitter-openapi-typescript-generated/src';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import log4js from 'log4js';
import { TwitterOpenApi } from '@/api';

dotenv.config();
const logger = log4js
  .configure({
    appenders: {
      system: { type: 'file', filename: 'logs/test.log' },
    },
    categories: {
      default: { appenders: ['system'], level: 'all' },
    },
  })
  .getLogger('Test');

export interface GlobalWithCognitoFix extends Global {
  fetch: any;
}
declare const global: GlobalWithCognitoFix;
global.fetch = fetch;

const authToken = process.env.AUTH_TOKEN as string;
const ct0 = process.env.CSRF_TOKEN as string;

const getClient = async () => {
  const api = new TwitterOpenApi();
  const client = await api.getClientFromCookies(ct0, authToken);
  return client;
};

test('getHomeTimelineRaw', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().api.getHomeTimeline({
    queryId: client.flag.HomeTimeline.queryId,
    variables: JSON.stringify(client.flag.HomeTimeline.variables),
    features: JSON.stringify(client.flag.HomeTimeline.features),
  });
  logger.debug(response);
  response.data.home.homeTimelineUrt.instructions;

  expect(0).toBe(0);
});

test('getHomeTimeline', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getHomeTimeline({});
  logger.debug(response);

  expect(0).toBe(0);
});
