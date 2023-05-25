import * as i from 'twitter-openapi-typescript-generated/src';
import { TweetApiUtils } from './types/tweet';
import { UserApiUtils } from './types/user_list';
import { CursorApiUtilsResponse } from './types/timeline';

/*

import 'package:built_collection/built_collection.dart';
import 'package:built_value/json_object.dart';
import 'package:collection/collection.dart';
import 'package:twitter_openapi_dart/twitter_openapi_dart.dart';
import 'package:twitter_openapi_dart_generated/twitter_openapi_dart_generated.dart';
import 'package:dio/dio.dart';

import 'model/header.dart';

BuiltList<TimelineAddEntry> instructionToEntry(BuiltList<InstructionUnion> item) {
  return item.expand((e) => e.oneOf.isType(TimelineAddEntries) ? [e.oneOf.value as TimelineAddEntries] : <TimelineAddEntries>[]).first.entries;
}

List<TweetApiUtils> tweetEntriesConverter(BuiltList<TimelineAddEntry> item) {
  return item
      .map((e) {
        if (e.content.oneOf.isType(TimelineTimelineItem)) {
          final item = (e.content.oneOf.value as TimelineTimelineItem).itemContent;
          final timeline = item.oneOf.isType(TimelineTweet) ? item.oneOf.value as TimelineTweet : null;
          if (timeline == null) return null;
          return buildTweetApiUtils(timeline.tweetResults, promotedMetadata: timeline.promotedMetadata);
        } else if (e.content.oneOf.isType(TimelineTimelineModule)) {
          final item = (e.content.oneOf.value as TimelineTimelineModule).items;
          final timelineList =
              item.where((e) => e.item.itemContent.oneOf.isType(TimelineTweet)).map((e) => e.item.itemContent.oneOf.value as TimelineTweet).toList();
          if (timelineList.isEmpty) return null;
          final timeline = timelineList.first;
          return buildTweetApiUtils(timeline.tweetResults, promotedMetadata: timeline.promotedMetadata, reply: timelineList..removeAt(0));
        }
      })
      .whereNotNull()
      .toList();
}

TweetApiUtils? buildTweetApiUtils(ItemResult result, {JsonObject? promotedMetadata, List<TimelineTweet>? reply}) {
  final tweet = tweetResultsConverter(result);
  if (tweet == null) return null;
  final quoted = tweet.quotedStatusResult;
  final retweeted = tweet.legacy.retweetedStatusResult;

  return TweetApiUtils(
    (e) => e
      ..raw = result.toBuilder()
      ..promotedMetadata = promotedMetadata
      ..tweet = tweet.toBuilder()
      ..user = tweet.core.userResults.result.toBuilder()
      ..reply = reply?.map((e) => buildTweetApiUtils(e.tweetResults, promotedMetadata: e.promotedMetadata)).whereNotNull().toList()
      ..quoted = quoted == null ? null : buildTweetApiUtils(quoted)?.toBuilder()
      ..retweeted = retweeted == null ? null : buildTweetApiUtils(retweeted)?.toBuilder(),
  );
}

Tweet? tweetResultsConverter(ItemResult tweetResults) {
  if (tweetResults.result.oneOf.isType(Tweet)) {
    return tweetResults.result.oneOf.value as Tweet;
  } else if (tweetResults.result.oneOf.isType(TweetWithVisibilityResults)) {
    return (tweetResults.result.oneOf.value as TweetWithVisibilityResults).tweet;
  } else if (tweetResults.result.oneOf.isType(TweetTombstone)) {
    return null;
  }
  throw Exception();
}

List<TimelineUser> userEntriesConverter(BuiltList<TimelineAddEntry> item) {
  return item
      .map((e) {
        if (e.content.oneOf.isType(TimelineTimelineItem)) {
          final item = (e.content.oneOf.value as TimelineTimelineItem).itemContent;
          return item.oneOf.isType(TimelineUser) ? item.oneOf.value as TimelineUser : null;
        }
      })
      .whereNotNull()
      .toList();
}

UserApiUtils buildUserResponse(TimelineUser user) {
  return UserApiUtils(
    (e) => e
      ..raw = user.toBuilder()
      ..user = user.userResults.result.toBuilder(),
  );
}

CursorApiUtilsResponse entriesCursor(BuiltList<TimelineAddEntry> item) {
  final cursorList = item
      .map((e) {
        if (e.content.oneOf.isType(TimelineTimelineCursor)) {
          return e.content.oneOf.value as TimelineTimelineCursor;
        } else if (e.content.oneOf.isType(TimelineTimelineItem)) {
          final item = (e.content.oneOf.value as TimelineTimelineItem);
          if (item.itemContent.oneOf.isType(TimelineTimelineCursor)) {
            return item.itemContent.oneOf.value as TimelineTimelineCursor;
          }
        }
      })
      .whereNotNull()
      .toList();
  return buildCursor(cursorList);
}

CursorApiUtilsResponse buildCursor(List<TimelineTimelineCursor> cursorList) {
  return CursorApiUtilsResponse(
    (e) => e
      ..top = cursorList.firstWhereOrNull((e) => e.cursorType == TimelineTimelineCursorCursorTypeEnum.top)?.toBuilder()
      ..bottom = cursorList.firstWhereOrNull((e) => e.cursorType == TimelineTimelineCursorCursorTypeEnum.bottom)?.toBuilder(),
  );
}

ApiUtilsHeader buildHeader(Headers headers) {
  return ApiUtilsHeader(
    (e) => e
      ..raw = headers
      ..connectionHash = headers.value("x-connection-hash")
      ..contentTypeOptions = headers.value("x-content-type-options")
      ..frameOptions = headers.value("x-frame-options")
      ..rateLimitLimit = int.tryParse(headers.value("x-rate-limit-limit") ?? "") ?? 0
      ..rateLimitRemaining = int.tryParse(headers.value("x-rate-limit-remaining") ?? "") ?? 0
      ..rateLimitReset = int.tryParse(headers.value("x-rate-limit-reset") ?? "") ?? 0
      ..responseTime = int.tryParse(headers.value("x-response-time") ?? "") ?? 0
      ..tfePreserveBody = headers.value("x-tfe-preserve-body") == "true"
      ..transactionId = headers.value("x-transaction-id")
      ..twitterResponseTags = headers.value("x-twitter-response-tags")
      ..xssProtection = int.tryParse(headers.value("x-xss-protection") ?? "") ?? 0,
  );
}



*/

export const instructionToEntry = (item: i.InstructionUnion[]): i.TimelineAddEntry[] => {
  return item.flatMap((e) => (e.type == i.InstructionType.TimelineAddEntries ? [e as i.TimelineAddEntries] : []))[0]
    .entries;
};

export const tweetEntriesConverter = (item: i.TimelineAddEntry[]): i.ItemResult[] => {
  return item
    .map((e) => {
      if (e.content.entryType == i.ContentEntryType.TimelineTimelineItem) {
        const item = (e.content as i.TimelineTimelineItem).itemContent;
        const timeline = item.itemType == i.ContentItemType.TimelineTweet ? (item as i.TimelineTweet) : null;
        if (timeline == null) return null;
        return timeline.tweetResults;
      } else if (e.content.entryType == i.ContentEntryType.TimelineTimelineModule) {
        const item = (e.content as i.TimelineTimelineModule).items ?? [];
        const timelineList = item
          .filter((e) => e.item.itemContent.itemType == i.ContentItemType.TimelineTweet)
          .map((e) => e.item.itemContent as i.TimelineTweet);
        if (timelineList.length == 0) return null;
        const timeline = timelineList[0];
        return timeline.tweetResults;
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
  if (tweetResults.typename == i.TypeName.Tweet) {
    return tweetResults.result as i.Tweet;
  } else if (tweetResults.typename == i.TypeName.TweetWithVisibilityResults) {
    return (tweetResults.result as i.TweetWithVisibilityResults).tweet;
  } else if (tweetResults.typename == i.TypeName.TweetTombstone) {
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
