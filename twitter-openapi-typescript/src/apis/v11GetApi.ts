import * as i from 'twitter-openapi-typescript-generated/src';
import { DefaultFlag } from '@/types/flag';

export class V11GetApiUtils {
  api: i.V11GetApi;
  flag: DefaultFlag;

  constructor(api: i.V11GetApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
