import { TwitterOpenApi } from '@/api';
import { promises as fs } from 'fs';
import * as log4js from 'log4js';

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

export type Cookie = {
  name: string;
  domain: string;
  value: string;
};

export const getClient = async () => {
  const api = new TwitterOpenApi();
  api.setAdditionalApiHeaders({
    'sec-ch-ua-platform': '"Windows"',
  });
  const data = await fs.readFile('cookies.json', 'utf-8');
  const parsed = JSON.parse(data);
  const cookies = parsed as Cookie[];
  const json = Object.fromEntries(
    cookies.filter((e) => ['.twitter.com', '.x.com'].includes(e.domain)).map((e) => [e.name, e.value]),
  );
  const client = await api.getClientFromCookies(json);
  return client;
};
export const getGuestClient = async () => {
  const api = new TwitterOpenApi();
  const client = await api.getGuestClient();
  return client;
};
