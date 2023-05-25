import { TimelineUser, User } from 'twitter-openapi-typescript-generated';
import { ApiUtilsRaw, CursorApiUtilsResponse } from './timeline';

export type UserListApiUtilsResponse = {
  raw: ApiUtilsRaw;
  header: ApiUtilsHeader;
  cursor: CursorApiUtilsResponse;
  data: UserApiUtils[];
};

export type UserApiUtils = {
  raw: TimelineUser;
  user: User;
};
