import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types';

export class PostApiUtils {
  api: i.PostApi;
  flag: DefaultFlag;

  constructor(api: i.PostApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
