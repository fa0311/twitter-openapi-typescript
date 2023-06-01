import * as i from 'twitter-openapi-typescript-generated';
import { CursorApiUtilsResponse, ApiUtilsRaw } from '@/types/timeline';

export type TweetListApiUtilsResponse = {
  raw: ApiUtilsRaw;
  header: ApiUtilsHeader;
  cursor: CursorApiUtilsResponse;
  data: TweetApiUtils[];
};

export type TweetApiUtils = {
  raw: i.ItemResult;
  tweet: i.Tweet;
  user: i.User;
  reply: TweetApiUtils[];
  quoted?: TweetApiUtils;
  retweeted?: TweetApiUtils;
  promotedMetadata?: any;
};
