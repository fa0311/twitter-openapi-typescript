import { DefaultFlag, initOverrides } from '@/models';
import * as i from 'twitter-openapi-typescript-generated';

export class V11GetApiUtils {
  api: i.V11GetApi;
  flag: DefaultFlag;
  initOverrides: initOverrides;

  constructor(api: i.V11GetApi, flag: DefaultFlag, initOverrides: initOverrides) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }
}
