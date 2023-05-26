import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types/flag';

export class UserApiUtils {
  api: i.UserApi;
  flag: DefaultFlag;

  constructor(api: i.UserApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
