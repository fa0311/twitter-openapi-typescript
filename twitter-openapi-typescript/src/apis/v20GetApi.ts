import { DefaultFlag, initOverrides } from '@/models';
import * as i from 'twitter-openapi-typescript-generated';

export class V20GetApiUtils {
  api: i.V20GetApi;
  flag: DefaultFlag;
  initOverrides: initOverrides;

  constructor(api: i.V20GetApi, flag: DefaultFlag, initOverrides: initOverrides) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }
}
