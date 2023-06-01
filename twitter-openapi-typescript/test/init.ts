import { TwitterOpenApi } from '@/api';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as log4js from 'log4js';

dotenv.config();

declare const global: GlobalWithCognitoFix;
global.fetch = fetch;

const authToken = process.env.AUTH_TOKEN as string;
const ct0 = process.env.CSRF_TOKEN as string;

export const logger = log4js
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
export const getClient = async () => {
  const api = new TwitterOpenApi();
  const client = await api.getClientFromCookies(ct0, authToken);
  return client;
};
