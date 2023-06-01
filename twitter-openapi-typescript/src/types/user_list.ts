import * as i from 'twitter-openapi-typescript-generated';
import { ApiUtilsRaw, CursorApiUtilsResponse, ApiUtilsHeader } from '@/types';

export type UserListApiUtilsResponse = {
  raw: ApiUtilsRaw;
  header: ApiUtilsHeader;
  cursor: CursorApiUtilsResponse;
  data: UserApiUtilsData[];
};

export type UserApiUtilsData = {
  raw: i.TimelineUser;
  user: i.User;
};
