import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types/flag';
import { ApiFunction, RequestParam } from '@/models/type';
import { TweetListApiUtilsResponse } from '@/types/tweet';
import { ApiUtilsRaw } from '@/types/timeline';
import { buildHeader, entriesCursor, instructionToEntry, tweetEntriesConverter } from '@/models/api';

type GetTweetDetailParam = {
  focalTweetId: string;
  cursor?: string;
  controllerData?: string;
  extraParam?: { [key: string]: any };
};

type GetHomeTimelineParam = {
  couser?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetHomeLatestTimelineParam = {
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetListLatestTweetsTimelineParam = {
  listId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetUserTweetsParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetUserTweetsAndRepliesParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetUserMediaParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetLikesParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetBookmarksParam = {
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

export class TweetApiUtils {
  api: i.TweetApi;
  flag: DefaultFlag;

  constructor(api: i.TweetApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: RequestParam<i.InstructionUnion[], T>): Promise<TweetListApiUtilsResponse> {
    const response = await param.apiFn.bind(this.api)({
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param }),
      features: JSON.stringify(this.flag[param.key]['features']),
    });
    const instruction = param.convertFn((await response.value()) as T);
    const entry = instructionToEntry(instruction);
    const data = tweetEntriesConverter(entry);
    const raw: ApiUtilsRaw = {
      response: response.raw,
      instruction: instruction,
      entry: entry,
    };
    return {
      raw: raw,
      header: buildHeader(response.raw.headers),
      cursor: entriesCursor(entry),
      data: data,
    };
  }

  async getTweetDetail(param: GetTweetDetailParam): Promise<TweetListApiUtilsResponse> {
    const args = {
      focalTweetId: param.focalTweetId,
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...(param.controllerData == null ? {} : { controller_data: param.controllerData }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getTweetDetailRaw,
      convertFn: (e) => e.data.threadedConversationWithInjectionsV2.instructions,
      key: 'TweetDetail',
      param: args,
    });
    return response;
  }

  async getHomeTimeline(param: GetHomeTimelineParam = {}): Promise<TweetListApiUtilsResponse> {
    const args = {
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.couser == null ? {} : { couser: param.couser }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getHomeTimelineRaw,
      convertFn: (e) => e.data.home.homeTimelineUrt.instructions,
      key: 'HomeTimeline',
      param: args,
    });
    return response;
  }

  async getHomeLatestTimeline(param: GetHomeLatestTimelineParam = {}): Promise<TweetListApiUtilsResponse> {
    const args = {
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getHomeLatestTimelineRaw,
      convertFn: (e) => e.data.home.homeTimelineUrt.instructions,
      key: 'HomeLatestTimeline',
      param: args,
    });
    return response;
  }

  async getListLatestTweetsTimeline(param: GetListLatestTweetsTimelineParam): Promise<TweetListApiUtilsResponse> {
    const args = {
      listId: param.listId,
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getListLatestTweetsTimelineRaw,
      convertFn: (e) => e.data.list.tweetsTimeline.timeline.instructions,
      key: 'ListLatestTweetsTimeline',
      param: args,
    });
    return response;
  }

  async getUserTweets(param: GetUserTweetsParam): Promise<TweetListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserTweetsRaw,
      convertFn: (e) => e.data.user.result.timelineV2.timeline.instructions,
      key: 'UserTweets',
      param: args,
    });
    return response;
  }

  async getUserTweetsAndReplies(param: GetUserTweetsAndRepliesParam): Promise<TweetListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserTweetsAndRepliesRaw,
      convertFn: (e) => e.data.user.result.timelineV2.timeline.instructions,
      key: 'UserTweetsAndReplies',
      param: args,
    });
    return response;
  }

  async getUserMedia(param: GetUserMediaParam): Promise<TweetListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserMediaRaw,
      convertFn: (e) => e.data.user.result.timelineV2.timeline.instructions,
      key: 'UserMedia',
      param: args,
    });
    return response;
  }
  async getLikes(param: GetLikesParam): Promise<TweetListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getLikesRaw,
      convertFn: (e) => e.data.user.result.timelineV2.timeline.instructions,
      key: 'Likes',
      param: args,
    });
    return response;
  }
  async getBookmarks(param: GetBookmarksParam = {}): Promise<TweetListApiUtilsResponse> {
    const args = {
      ...(param.count == null ? {} : { count: param.count }),
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getBookmarksRaw,
      convertFn: (e) => e.data.bookmarkTimelineV2.timeline.instructions,
      key: 'Bookmarks',
      param: args,
    });
    return response;
  }
}
