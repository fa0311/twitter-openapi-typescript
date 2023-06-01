import { ItemResult, Tweet, User } from 'twitter-openapi-typescript-generated/src';
import { CursorApiUtilsResponse, ApiUtilsRaw } from '../types/timeline';

export type TweetListApiUtilsResponse = {
  raw: ApiUtilsRaw;
  header: ApiUtilsHeader;
  cursor: CursorApiUtilsResponse;
  data: TweetApiUtils[];
};

export type TweetApiUtils = {
  raw: ItemResult;
  tweet: Tweet;
  user: User;
  reply: TweetApiUtils[];
  quoted?: TweetApiUtils;
  retweeted?: TweetApiUtils;
  promotedMetadata?: any;
};
