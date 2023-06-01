import * as i from 'twitter-openapi-typescript-generated/src';
import { TweetApiUtils } from '@/types/tweet';
import { UserApiUtils } from '@/types/user_list';
import { CursorApiUtilsResponse } from '@/types/timeline';

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => (e.type == i.InstructionType.TimelineAddEntries ? [e as i.TimelineAddEntries] : []))[0]
    .entries;
};

export const tweetEntriesConverter = (item: i.TimelineAddEntry[]): TweetApiUtils[] => {
  return item
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        const timeline = item.itemType == i.ContentItemType.TimelineTweet ? (item as i.TimelineTweet) : null;
        if (timeline == null) return null;
        return buildTweetApiUtils({
          result: timeline.tweetResults,
          promotedMetadata: timeline.promotedMetadata,
        });
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineModule) {
        const item = (e.content as i.TimelineTimelineModule).items ?? [];
        const timelineList = item
          .filter((e) => e.item.itemContent.itemType == i.ContentItemType.TimelineTweet)
          .map((e) => e.item.itemContent as i.TimelineTweet);
        if (timelineList.length == 0) return null;
        const timeline = timelineList[0];
        return buildTweetApiUtils({
          result: timeline.tweetResults,
          promotedMetadata: timeline.promotedMetadata,
          reply: timelineList.slice(1),
        });
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
};

type buildTweetApiUtilsArgs = {
  result: i.ItemResult;
  promotedMetadata?: any;
  reply?: i.TimelineTweet[];
};
export const buildTweetApiUtils = (args: buildTweetApiUtilsArgs): TweetApiUtils | undefined => {
  const tweet = tweetResultsConverter(args.result);
  if (tweet == null) return undefined;
  const quoted = tweet.quotedStatusResult;
  const retweeted = tweet.legacy.retweetedStatusResult;
  return {
    raw: args.result,
    promotedMetadata: args.promotedMetadata,
    tweet: tweet,
    user: tweet.core.userResults.result,
    reply:
      args.reply
        ?.map((e) => buildTweetApiUtils({ result: e.tweetResults, promotedMetadata: e.promotedMetadata }))
        .filter((e): e is NonNullable<typeof e> => e != null) ?? [],
    quoted: quoted == undefined ? undefined : buildTweetApiUtils({ result: quoted }),
  };
};

export const tweetResultsConverter = (tweetResults: i.ItemResult): i.Tweet | undefined => {
  switch (tweetResults.result.typename) {
    case i.TypeName.Tweet:
      return tweetResults.result as i.Tweet;
    case i.TypeName.TweetWithVisibilityResults:
      return (tweetResults.result as i.TweetWithVisibilityResults).tweet;
    case i.TypeName.TweetTombstone:
      return undefined;
  }
  throw Error();
};

export const userEntriesConverter = (item: i.TimelineAddEntry[]): i.TimelineUser[] => {
  return item
    .map((e) => {
      if (e.content.typename == i.TypeName.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        return item.itemType == i.ContentItemType.TimelineUser ? (item as i.TimelineUser) : null;
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
};

export const buildUserResponse = (user: i.TimelineUser): UserApiUtils => {
  return {
    raw: user,
    user: user.userResults.result,
  };
};

export const entriesCursor = (item: i.TimelineAddEntry[]): CursorApiUtilsResponse => {
  const cursorList = item
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineCursor) {
        return e.content as i.TimelineTimelineCursor;
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = e.content as i.TimelineTimelineItem;
        if (item.itemContent.itemType == i.ContentItemType.TimelineTimelineCursor) {
          return item.itemContent as i.TimelineTimelineCursor;
        }
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
  return buildCursor(cursorList);
};

export const buildCursor = (cursorList: i.TimelineTimelineCursor[]): CursorApiUtilsResponse => {
  return {
    top: cursorList.find((e) => e.cursorType == i.TimelineTimelineCursorCursorTypeEnum.Top),
    bottom: cursorList.find((e) => e.cursorType == i.TimelineTimelineCursorCursorTypeEnum.Bottom),
  };
};

export const buildHeader = (headers: Headers): ApiUtilsHeader => {
  return {
    raw: headers,
    connectionHash: headers.get('x-connection-hash'),
    contentTypeOptions: headers.get('x-content-type-options'),
    frameOptions: headers.get('x-frame-options'),
    rateLimitLimit: Number(headers.get('x-rate-limit-limit')),
    rateLimitRemaining: Number(headers.get('x-rate-limit-remaining')),
    rateLimitReset: Number(headers.get('x-rate-limit-reset')),
    responseTime: Number(headers.get('x-response-time')),
    tfePreserveBody: headers.get('x-tfe-preserve-body') == 'true',
    transactionId: headers.get('x-transaction-id'),
    twitterResponseTags: headers.get('x-twitter-response-tags'),
    xssProtection: Number(headers.get('x-xss-protection')),
  };
};
