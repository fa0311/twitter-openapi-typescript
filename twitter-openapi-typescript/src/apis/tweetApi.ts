import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types/flag';

export class TweetApiUtils {
  api: i.TweetApi;
  flag: DefaultFlag;

  constructor(api: i.TweetApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
