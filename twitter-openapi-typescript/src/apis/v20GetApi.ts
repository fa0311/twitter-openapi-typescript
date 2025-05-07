import { DefaultFlag } from '@/models';
import { InitOverridesType } from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

export class V20GetApiUtils {
  api: i.V20GetApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.V20GetApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }
}
