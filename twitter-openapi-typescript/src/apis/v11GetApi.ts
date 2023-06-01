import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types';

export class V11GetApiUtils {
  api: i.V11GetApi;
  flag: DefaultFlag;

  constructor(api: i.V11GetApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
