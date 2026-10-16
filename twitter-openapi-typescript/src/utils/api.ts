import * as i from 'twitter-openapi-typescript-generated';
import type {
  ApiFunction,
  ApiUtilsHeader,
  CommunityApiUtilsData,
  CursorApiUtilsResponse,
  TimelineApiUtilsResponse,
  TweetApiUtilsData,
  TwitterApiUtilsResponse,
  UserApiUtilsData,
} from '@/models';

export type InitOverridesType = (flag: { [key: string]: any }) => i.InitOverrideFunction;

type TimelineRequestParam<T1, T2> = {
  api: object;
  apiFn: ApiFunction<T2>;
  flag: { [key: string]: any };
  initOverrides: InitOverridesType;
  convertFn: (arg0: T2) => i.InstructionUnion[];
  param: { [key: string]: any };
  itemsFn: (entry: i.TimelineAddEntry[], instruction: i.InstructionUnion[]) => T1[];
};

export const timelineRequest = async <T1, T2>(
  args: TimelineRequestParam<T1, T2>,
): Promise<TwitterApiUtilsResponse<TimelineApiUtilsResponse<T1>>> => {
  const apiFn: typeof args.apiFn = args.apiFn.bind(args.api);
  const response = await apiFn(getKwargs(args.flag, args.param), args.initOverrides(args.flag));
  const instruction = args.convertFn(await response.value());
  const entry = instructionToEntry(instruction);
  return {
    raw: { response: response.raw },
    header: buildHeader(response.raw.headers),
    data: {
      raw: { instruction, entry },
      cursor: entriesCursor(entry),
      data: args.itemsFn(entry, instruction),
    },
  };
};

type DataRequestParam<T1, T2> = {
  api: object;
  apiFn: ApiFunction<T2>;
  flag: { [key: string]: any };
  initOverrides: InitOverridesType;
  convertFn: (arg0: T2) => T1;
  param: { [key: string]: any };
};

export const dataRequest = async <T1, T2>(args: DataRequestParam<T1, T2>): Promise<TwitterApiUtilsResponse<T1>> => {
  const apiFn: typeof args.apiFn = args.apiFn.bind(args.api);
  const response = await apiFn(getKwargs(args.flag, args.param), args.initOverrides(args.flag));
  return {
    raw: { response: response.raw },
    header: buildHeader(response.raw.headers),
    data: args.convertFn(await response.value()),
  };
};

export const getKwargs = (flag: { [key: string]: any }, additional: { [key: string]: any }): any => {
  const kwargs: { [key: string]: any } = { pathQueryId: flag.queryId };
  if (flag.variables != undefined) {
    kwargs.variables = JSON.stringify({ ...flag.variables, ...additional });
  }
  if (flag.features != undefined) {
    kwargs.features = JSON.stringify(flag.features);
  }
  if (flag.fieldToggles != undefined) {
    kwargs.fieldToggles = JSON.stringify(flag.fieldToggles);
  }
  return kwargs;
};

export const errorCheck = <T>(data: T | undefined, error: i.ErrorResponse[] | undefined): T => {
  if (data == undefined) {
    throw Error(error?.map((e) => e.message).join(', ') ?? 'No data');
  }
  return data;
};

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => {
    if (e.type == i.InstructionType.TimelineAddEntries) {
      return (e as i.TimelineAddEntries).entries;
    } else if (e.type == i.InstructionType.TimelineAddToModule) {
      return [];
    } else if (e.type == i.InstructionType.TimelineReplaceEntry) {
      return [(e as i.TimelineReplaceEntry).entry];
    }
    return [];
  });
};

export const instructionConverter = (item: i.InstructionUnion[]): TweetApiUtilsData[] => {
  return item
    .flatMap((e) => {
      if (e.type == i.InstructionType.TimelineAddEntries) {
        return [];
      } else if (e.type == i.InstructionType.TimelineAddToModule) {
        const item = (e as i.TimelineAddToModule).moduleItems ?? [];
        return moduleConverter(item);
      } else if (e.type == i.InstructionType.TimelineReplaceEntry) {
        return [];
      }
      return [];
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined)
    .flat();
};

export const tweetEntriesConverter = (item: i.TimelineAddEntry[]): TweetApiUtilsData[] => {
  return item
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        const timeline = item.itemType == i.ContentItemType.TimelineTweet ? (item as i.TimelineTweet) : undefined;
        if (timeline == undefined) return undefined;
        return [
          buildTweetApiUtils({
            result: timeline.tweetResults,
            promotedMetadata: timeline.promotedMetadata,
          }),
        ];
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineModule) {
        const item = (e.content as i.TimelineTimelineModule).items ?? [];
        return moduleConverter(item);
      }
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined)
    .flatMap((e) => e.filter((e): e is NonNullable<typeof e> => e != undefined));
};

export const moduleConverter = (item: i.ModuleItem[]): TweetApiUtilsData[] => {
  const timelineList = item
    .filter((e) => e.item.itemContent.itemType == i.ContentItemType.TimelineTweet)
    .map((e) => e.item.itemContent as i.TimelineTweet);
  if (timelineList.length == 0) return [];

  if (timelineList[0].tweetDisplayType == i.TimelineTweetTweetDisplayTypeEnum.MediaGrid) {
    return timelineList
      .map((e) =>
        buildTweetApiUtils({
          result: e.tweetResults,
          promotedMetadata: e.promotedMetadata,
        }),
      )
      .filter((e): e is NonNullable<typeof e> => e != undefined);
  } else {
    const timeline = timelineList[0];
    return [
      buildTweetApiUtils({
        result: timeline.tweetResults,
        promotedMetadata: timeline.promotedMetadata,
        reply: timelineList.slice(1),
      }),
    ].filter((e): e is NonNullable<typeof e> => e != undefined);
  }
};

type buildTweetApiUtilsArgs = {
  result: i.ItemResult;
  promotedMetadata?: i.PromotedMetadata;
  reply?: i.TimelineTweet[];
};
export const buildTweetApiUtils = (args: buildTweetApiUtilsArgs): TweetApiUtilsData | undefined => {
  const tweet = tweetResultsConverter(args.result);
  if (tweet == undefined) return undefined;
  const result = tweet.core?.userResults.result;
  const user = result && userOrNullConverter(result);
  if (user == undefined) return undefined;
  const quoted = tweet.quotedStatusResult;
  const retweeted = tweet.legacy?.retweetedStatusResult;

  const reply =
    args.reply
      ?.map((e) => buildTweetApiUtils({ result: e.tweetResults, promotedMetadata: e.promotedMetadata }))
      .filter((e): e is NonNullable<typeof e> => e != undefined) ?? [];
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
  if (tweetResults.result == undefined) return undefined;
  switch (tweetResults.result.typename) {
    case i.TypeName.Tweet:
      return tweetResults.result as i.Tweet;
    case i.TypeName.TweetWithVisibilityResults:
      return (tweetResults.result as i.TweetWithVisibilityResults).tweet;
    case i.TypeName.TweetTombstone:
      return undefined;
  }
};

export const userOrNullConverter = (userResults: i.UserUnion): i.User | undefined => {
  if (userResults.typename == i.TypeName.User) {
    return userResults as i.User;
  } else if (userResults.typename == undefined) {
    return userResults as i.User; // error
  }
};

// Every item of the entries, module items included (TimelineTweet, TimelineUser, TimelineTrend, ...).
export const itemContents = (item: i.TimelineAddEntry[]): i.ItemContentUnion[] => {
  return item.flatMap((e) => {
    if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
      return [(e.content as i.TimelineTimelineItem).itemContent];
    } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineModule) {
      return ((e.content as i.TimelineTimelineModule).items ?? []).map((e) => e.item.itemContent);
    }
    return [];
  });
};

export const userEntriesConverter = (item: i.TimelineAddEntry[]): i.UserResults[] => {
  return itemContents(item)
    .filter((e) => e.itemType == i.ContentItemType.TimelineUser)
    .map((e) => (e as i.TimelineUser).userResults);
};

export const trendEntriesConverter = (item: i.TimelineAddEntry[]): i.TimelineTrend[] => {
  return itemContents(item)
    .filter((e) => e.itemType == i.ContentItemType.TimelineTrend)
    .map((e) => e as i.TimelineTrend);
};

export const notificationEntriesConverter = (item: i.TimelineAddEntry[]): i.TimelineNotification[] => {
  return itemContents(item)
    .filter((e) => e.itemType == i.ContentItemType.TimelineNotification)
    .map((e) => e as i.TimelineNotification);
};

export const listEntriesConverter = (item: i.TimelineAddEntry[]): i.TwitterList[] => {
  return itemContents(item)
    .filter((e) => e.itemType == i.ContentItemType.TimelineTwitterList)
    .map((e) => (e as i.TimelineTwitterList).list);
};

export const communityEntriesConverter = (item: i.TimelineAddEntry[]): CommunityApiUtilsData[] => {
  return itemContents(item)
    .filter((e) => e.itemType == i.ContentItemType.TimelineCommunity)
    .map((e) => e as i.TimelineCommunity)
    .map((e) => {
      const community = e.communityResults.result;
      if (community.typename != i.TypeName.Community) return undefined;
      return { raw: e, community: community as i.Community };
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined);
};

const a = (a: string) => {
  return a;
};

export const userResultConverter = (user: i.UserResults[]): UserApiUtilsData[] => {
  return user
    .map((e) => {
      const user = e.result && userOrNullConverter(e.result);
      if (user == undefined) return undefined;
      return {
        raw: e,
        user: user,
      };
    })
    .filter((e): e is NonNullable<typeof e> => e != undefined);
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
    .filter((e): e is NonNullable<typeof e> => e != undefined);
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
    connectionHash: headers.get('x-connection-hash')!,
    contentTypeOptions: headers.get('x-content-type-options')!,
    frameOptions: headers.get('x-frame-options')!,
    rateLimitLimit: Number(headers.get('x-rate-limit-limit') ?? 0),
    rateLimitRemaining: Number(headers.get('x-rate-limit-remaining') ?? 0),
    rateLimitReset: Number(headers.get('x-rate-limit-reset') ?? 0),
    responseTime: Number(headers.get('x-response-time')),
    tfePreserveBody: headers.get('x-tfe-preserve-body') == 'true',
    transactionId: headers.get('x-transaction-id')!,
    twitterResponseTags: headers.get('x-twitter-response-tags')!,
    xssProtection: Number(headers.get('x-xss-protection')),
  };
};
