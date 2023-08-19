import * as i from 'twitter-openapi-typescript-generated';
import { TweetApiUtilsData, UserApiUtilsData, CursorApiUtilsResponse, ApiUtilsHeader } from '@/models';

export const getKwargs = (flag: { [key: string]: any }, additional: { [key: string]: any }): any => {
  const kwargs: { [key: string]: any } = { pathQueryId: flag.queryId };
  if (flag.variables != null) {
    kwargs.variables = JSON.stringify({ ...flag.variables, ...additional });
  }
  if (flag.features != null) {
    kwargs.features = JSON.stringify(flag.features);
  }
  if (flag.fieldToggles != null) {
    kwargs.fieldToggles = JSON.stringify(flag.fieldToggles);
  }
  return kwargs;
};

export const errorCheck = <T>(data: i.Errors | T): T => {
  const res: any = data;
  if (res.data != undefined) {
    return res;
  } else if (res.error != undefined) {
    throw Error(res.errors[0].message);
  }
};

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => {
    if (e.type == i.InstructionType.TimelineAddEntries) {
      return (e as i.TimelineAddEntries).entries;
    } else if (e.type == i.InstructionType.TimelineReplaceEntry) {
      return [(e as i.TimelineReplaceEntry).entry];
    }
    return [];
  });
};

export const tweetEntriesConverter = (item: i.TimelineAddEntry[]): TweetApiUtilsData[] => {
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
export const buildTweetApiUtils = (args: buildTweetApiUtilsArgs): TweetApiUtilsData | undefined => {
  const tweet = tweetResultsConverter(args.result);
  if (tweet == null) return undefined;
  const user = userOrNullConverter(tweet.core.userResults.result);
  if (user == null) return undefined;
  const quoted = tweet.quotedStatusResult;
  const retweeted = tweet.legacy.retweetedStatusResult;
  const reply =
    args.reply
      ?.map((e) => buildTweetApiUtils({ result: e.tweetResults, promotedMetadata: e.promotedMetadata }))
      .filter((e): e is NonNullable<typeof e> => e != null) ?? [];
  return {
    raw: args.result,
    promotedMetadata: args.promotedMetadata,
    tweet: tweet,
    user: user,
    replies: reply,
    retweeted: retweeted == undefined ? undefined : buildTweetApiUtils({ result: retweeted }),
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

export const userOrNullConverter = (userResults: i.UserUnion): i.User | null => {
  if (userResults.typename == i.TypeName.User) {
    return userResults as i.User;
  }
};

export const userEntriesConverter = (item: i.TimelineAddEntry[]): i.UserResults[] => {
  return item
    .map((e) => {
      if (e.content.typename == i.TypeName.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        if (item.itemType == i.ContentItemType.TimelineUser) {
          return (item as i.TimelineUser).userResults;
        }
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
};

export const userResultConverter = (user: i.UserResults[]): UserApiUtilsData[] => {
  return user
    .map((e) => {
      const user = userOrNullConverter(e.result);
      if (user == null) return null;
      return {
        raw: e,
        user: user,
      };
    })
    .filter((e): e is NonNullable<typeof e> => e != null);
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
    top: cursorList.find((e) => e.cursorType == i.CursorType.Top),
    bottom: cursorList.find((e) => e.cursorType == i.CursorType.Bottom),
  };
};

export const buildHeader = (headers: Headers): ApiUtilsHeader => {
  return {
    raw: headers,
    connectionHash: headers.get('x-connection-hash'),
    contentTypeOptions: headers.get('x-content-type-options'),
    frameOptions: headers.get('x-frame-options'),
    rateLimitLimit: Number(headers.get('x-rate-limit-limit') ?? 0),
    rateLimitRemaining: Number(headers.get('x-rate-limit-remaining') ?? 0),
    rateLimitReset: Number(headers.get('x-rate-limit-reset') ?? 0),
    responseTime: Number(headers.get('x-response-time')),
    tfePreserveBody: headers.get('x-tfe-preserve-body') == 'true',
    transactionId: headers.get('x-transaction-id'),
    twitterResponseTags: headers.get('x-twitter-response-tags'),
    xssProtection: Number(headers.get('x-xss-protection')),
  };
};
