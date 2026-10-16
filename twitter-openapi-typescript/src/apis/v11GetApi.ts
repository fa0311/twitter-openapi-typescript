import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag } from '@/models';
import type { InitOverridesType } from '@/utils';

export class V11GetApiUtils {
  api: i.V11GetApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.V11GetApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }
}
