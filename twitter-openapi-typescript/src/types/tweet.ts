import * as i from 'twitter-openapi-typescript-generated';
import { CursorApiUtilsResponse, ApiUtilsRaw } from '@/types/timeline';
import { ApiUtilsHeader } from '@/types/header';

export type TweetListApiUtilsResponse = {
  raw: ApiUtilsRaw;
  header: ApiUtilsHeader;
  cursor: CursorApiUtilsResponse;
  data: TweetApiUtilsData[];
};

export type TweetApiUtilsData = {
  raw: i.ItemResult;
  tweet: i.Tweet;
  user: i.User;
  reply: TweetApiUtilsData[];
  quoted?: TweetApiUtilsData;
  retweeted?: TweetApiUtilsData;
  promotedMetadata?: any;
};
