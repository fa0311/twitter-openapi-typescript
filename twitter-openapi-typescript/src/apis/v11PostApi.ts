import * as i from 'twitter-openapi-typescript-generated/src';
import { DefaultFlag } from '@/types/flag';

export class V11PostApiUtils {
  api: i.V11PostApi;
  flag: DefaultFlag;

  constructor(api: i.V11PostApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
