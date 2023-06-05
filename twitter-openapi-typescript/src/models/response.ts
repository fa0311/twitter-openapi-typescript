import { ApiUtilsHeader } from '@/models';

export type TwitterApiUtilsResponse<T> = {
  raw: TwitterApiUtilsRaw;
  header: ApiUtilsHeader;
  data: T;
};

export type TwitterApiUtilsRaw = {
  response: Response;
};
