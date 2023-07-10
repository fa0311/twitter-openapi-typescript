import * as i from 'twitter-openapi-typescript-generated';
import { ApiUtilsHeader } from '@/models';

export type UserApiUtilsResponse = {
  raw: UserApiUtilsRaw;
  header: ApiUtilsHeader;
  data: i.User;
};
export type UsersApiUtilsResponse = {
  raw: UserApiUtilsRaw;
  header: ApiUtilsHeader;
  data: i.User[];
};

export type UserApiUtilsRaw = {
  response: Response;
};
