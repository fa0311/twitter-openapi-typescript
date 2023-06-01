import * as i from 'twitter-openapi-typescript-generated/dist';
import { DefaultFlag } from '@/types/flag';

export class V20GetApiUtils {
  api: i.V20GetApi;
  flag: DefaultFlag;

  constructor(api: i.V20GetApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
