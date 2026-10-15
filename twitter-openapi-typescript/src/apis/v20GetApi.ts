import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag } from '@/models';
import type { InitOverridesType } from '@/utils';

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
