import { DefaultFlag } from '@/models';
import { InitOverridesType } from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

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
