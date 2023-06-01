import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types/flag';

export type ProfileSpotlightsQueryParam = {
  screenName: string;
  extraParam: {
    [key: string]: any;
  };
};

export class DefaultApiUtils {
  api: i.DefaultApi;
  flag: DefaultFlag;

  constructor(api: i.DefaultApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
