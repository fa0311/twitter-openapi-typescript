import { TwitterOpenApi } from '@/api';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as log4js from 'log4js';

dotenv.config();

const authToken = process.env.AUTH_TOKEN as string;
const ct0 = process.env.CSRF_TOKEN as string;

export const logger = log4js
  .configure({
    appenders: {
      system: {
        type: 'file',
        filename: 'logs/test.log',
        layout: {
          type: 'pattern',
          pattern: '[%d{hh:mm:ss}] [%p] %m',
        },
      },
    },
    categories: {
      default: { appenders: ['system'], level: 'all' },
    },
  })
  .getLogger('Test');

export const getClient = async () => {
  const api = new TwitterOpenApi();
  api.setFetchApi(fetch as any);
  const client = await api.getClientFromCookies(ct0, authToken);
  return client;
};
