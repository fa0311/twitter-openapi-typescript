import * as i from 'twitter-openapi-typescript-generated';
import { ApiUtilsHeader } from '@/types';

export type UserApiUtilsResponse = {
  raw: UserApiUtilsRaw;
  header: ApiUtilsHeader;
  data: i.User;
};

export type UserApiUtilsRaw = {
  response: Response;
};
