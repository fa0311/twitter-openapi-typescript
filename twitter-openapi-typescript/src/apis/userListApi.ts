import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types/flag';

export class UserListApiUtils {
  api: i.UserListApi;
  flag: DefaultFlag;

  constructor(api: i.UserListApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
