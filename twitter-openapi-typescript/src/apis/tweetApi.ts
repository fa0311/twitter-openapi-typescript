import {
  DefaultFlag,
  RequestParam,
  TimelineApiUtilsResponse,
  TweetApiUtilsData,
  TwitterApiUtilsResponse,
} from '@/models';
import {
  buildHeader,
  entriesCursor,
  errorCheck,
  getKwargs,
  InitOverridesType,
  instructionConverter,
  instructionToEntry,
  tweetEntriesConverter,
} from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

type GetTweetDetailParam = {
  focalTweetId: string;
  cursor?: string;
  controllerData?: string;
  extraParam?: { [key: string]: any };
};

type GetSearchTimelineParam = {
  rawQuery: string;
  product?: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};
type GetHomeTimelineParam = {
  cursor?: string;
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

type ResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<TweetApiUtilsData>>;

export class TweetApiUtils {
  api: i.TweetApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.TweetApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async request<T>(param: RequestParam<i.InstructionUnion[], T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args, this.initOverrides(this.flag[param.key]));
    const instruction = param.convertFn(await response.value());
    const entry = instructionToEntry(instruction);
    const data = [...tweetEntriesConverter(entry), ...instructionConverter(instruction)];
    return {
      raw: {
        response: response.raw,
      },
      header: buildHeader(response.raw.headers),
      data: {
        raw: {
          instruction,
          entry,
        },
        cursor: entriesCursor(entry),
        data: data,
      },
    };
  }

  async getTweetDetail(param: GetTweetDetailParam): Promise<ResponseType> {
    const args = {
      focalTweetId: param.focalTweetId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.controllerData == undefined ? {} : { controller_data: param.controllerData }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getTweetDetailRaw,
      convertFn: (e) => errorCheck(e.data.threadedConversationWithInjectionsV2, e.errors).instructions,
      key: 'TweetDetail',
      param: args,
    });
    return response;
  }
  async getSearchTimeline(param: GetSearchTimelineParam): Promise<ResponseType> {
    const args = {
      rawQuery: param.rawQuery,
      ...(param.product == undefined ? {} : { product: param.product }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getSearchTimelineRaw,
      convertFn: (e) => errorCheck(e.data.searchByRawQuery, e.errors).searchTimeline.timeline.instructions,
      key: 'SearchTimeline',
      param: args,
    });
    return response;
  }

  async getHomeTimeline(param: GetHomeTimelineParam = {}): Promise<ResponseType> {
    const args = {
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getHomeTimelineRaw,
      convertFn: (e) => errorCheck(e.data.home, e.errors).homeTimelineUrt.instructions,
      key: 'HomeTimeline',
      param: args,
    });
    return response;
  }

  async getHomeLatestTimeline(param: GetHomeLatestTimelineParam = {}): Promise<ResponseType> {
    const args = {
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getHomeLatestTimelineRaw,
      convertFn: (e) => errorCheck(e.data.home, e.errors).homeTimelineUrt.instructions,
      key: 'HomeLatestTimeline',
      param: args,
    });
    return response;
  }

  async getListLatestTweetsTimeline(param: GetListLatestTweetsTimelineParam): Promise<ResponseType> {
    const args = {
      listId: param.listId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getListLatestTweetsTimelineRaw,
      convertFn: (e) => errorCheck(e.data.list?.tweetsTimeline.timeline, e.errors).instructions,
      key: 'ListLatestTweetsTimeline',
      param: args,
    });
    return response;
  }

  async getUserTweets(param: GetUserTweetsParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserTweetsRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline.timeline, e.errors).instructions,
      key: 'UserTweets',
      param: args,
    });
    return response;
  }

  async getUserTweetsAndReplies(param: GetUserTweetsAndRepliesParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserTweetsAndRepliesRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline.timeline, e.errors).instructions,
      key: 'UserTweetsAndReplies',
      param: args,
    });
    return response;
  }

  async getUserMedia(param: GetUserMediaParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserMediaRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline.timeline, e.errors).instructions,
      key: 'UserMedia',
      param: args,
    });
    return response;
  }
  async getLikes(param: GetLikesParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getLikesRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline.timeline, e.errors).instructions,
      key: 'Likes',
      param: args,
    });
    return response;
  }
  async getBookmarks(param: GetBookmarksParam = {}): Promise<ResponseType> {
    const args = {
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getBookmarksRaw,
      convertFn: (e) => errorCheck(e.data?.bookmarkTimelineV2.timeline, e.errors).instructions,
      key: 'Bookmarks',
      param: args,
    });
    return response;
  }
}
