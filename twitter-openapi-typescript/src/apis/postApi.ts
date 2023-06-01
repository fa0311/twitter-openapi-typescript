import * as i from 'twitter-openapi-typescript-generated/dist';
import { DefaultFlag } from '@/types/flag';

export class PostApiUtils {
  api: i.PostApi;
  flag: DefaultFlag;

  constructor(api: i.PostApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }
}
