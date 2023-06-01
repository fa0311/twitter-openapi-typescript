import * as i from 'twitter-openapi-typescript-generated';
import { ApiUtilsRaw, CursorApiUtilsResponse } from '@/types/timeline';

export type UserListApiUtilsResponse = {
  raw: ApiUtilsRaw;
  header: ApiUtilsHeader;
  cursor: CursorApiUtilsResponse;
  data: UserApiUtils[];
};

export type UserApiUtils = {
  raw: i.TimelineUser;
  user: i.User;
};
