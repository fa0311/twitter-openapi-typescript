import * as i from 'twitter-openapi-typescript-generated';

export type CursorApiUtilsResponse = {
  bottom?: i.TimelineTimelineCursor;
  top?: i.TimelineTimelineCursor;
};

export type ApiUtilsRaw = {
  instruction: i.InstructionUnion[];
  entry: i.TimelineAddEntry[];
};

export type TweetApiUtilsData = {
  raw: i.ItemResult;
  tweet: i.Tweet;
  user: i.User;
  replies: TweetApiUtilsData[];
  quoted?: TweetApiUtilsData;
  retweeted?: TweetApiUtilsData;
  promotedMetadata?: Record<string, unknown>;
};

export type UserApiUtilsData = {
  raw: i.UserResults;
  user: i.User | undefined;
};

export type TimelineApiUtilsResponse<T> = {
  raw: ApiUtilsRaw;
  cursor: CursorApiUtilsResponse;
  data: T[];
};
