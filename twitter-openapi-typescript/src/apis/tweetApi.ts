import type * as i from 'twitter-openapi-typescript-generated';
import type {
  CommunityApiUtilsData,
  DefaultFlag,
  RequestParam,
  TimelineApiUtilsResponse,
  TweetApiUtilsData,
  TwitterApiUtilsResponse,
  UserApiUtilsData,
} from '@/models';
import {
  communityEntriesConverter,
  errorCheck,
  type InitOverridesType,
  instructionConverter,
  notificationEntriesConverter,
  timelineRequest,
  trendEntriesConverter,
  tweetEntriesConverter,
  userEntriesConverter,
  userResultConverter,
} from '@/utils';

type GetTweetDetailParam = {
  focalTweetId: string;
  cursor?: string;
  controllerData?: string;
  extraParam?: { [key: string]: any };
};

type GetSearchTimelineParam = {
  rawQuery: string;
  product?: 'Top' | 'Latest' | 'People' | 'Photos' | 'Videos' | (string & {});
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

type GetCommunityTweetsTimelineParam = {
  communityId: string;
  cursor?: string;
  count?: number;
  rankingMode?: 'Recency' | 'Relevance' | (string & {});
  extraParam?: { [key: string]: any };
};

type GetCommunityMediaTimelineParam = {
  communityId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetUserHighlightsTweetsParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetUserRepostsTimelineParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetUserSuperFollowTweetsParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetExplorePageParam = {
  cursor?: string;
  extraParam?: { [key: string]: any };
};

type GetGenericTimelineByIdParam = {
  timelineId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetNotificationsTimelineParam = {
  timelineType?: 'All' | 'Verified' | 'Mentions' | (string & {});
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetCommunityDiscoveryTimelineParam = {
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetCommunityAboutTimelineParam = {
  communityId: string;
  extraParam?: { [key: string]: any };
};

type GetConnectTabTimelineParam = {
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetBookmarkSearchTimelineParam = {
  rawQuery: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetExploreSidebarParam = {
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<TweetApiUtilsData>>;
type UserResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<UserApiUtilsData>>;
type TrendResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<i.TimelineTrend>>;
type NotificationResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<i.TimelineNotification>>;
type CommunityResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<CommunityApiUtilsData>>;

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
    return timelineRequest({
      api: this.api,
      apiFn: param.apiFn,
      flag: this.flag[param.key],
      initOverrides: this.initOverrides,
      convertFn: param.convertFn,
      param: param.param,
      itemsFn: (entry, instruction) => [...tweetEntriesConverter(entry), ...instructionConverter(instruction)],
    });
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
      convertFn: (e) =>
        errorCheck(errorCheck(e.data.searchByRawQuery, e.errors).searchTimeline.timeline, e.errors).instructions,
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
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
      key: 'UserTweets',
      param: args,
    });
    return response;
  }

  async getUserOriginalsTimeline(param: GetUserTweetsParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserOriginalsTimelineRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
      key: 'UserOriginalsTimeline',
      param: args,
    });
    return response;
  }

  async getUserRepliesTimeline(param: GetUserTweetsParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserRepliesTimelineRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
      key: 'UserRepliesTimeline',
      param: args,
    });
    return response;
  }

  async getUserVideoTimeline(param: GetUserTweetsParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getUserVideoTimelineRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
      key: 'UserVideoTimeline',
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
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
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
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
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
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
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

  async getCommunityTweetsTimeline(param: GetCommunityTweetsTimelineParam): Promise<ResponseType> {
    const args = {
      communityId: param.communityId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.rankingMode == undefined ? {} : { rankingMode: param.rankingMode }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getCommunityTweetsTimelineRaw,
      convertFn: (e) =>
        errorCheck(e.data?.communityResults.result.rankedCommunityTimeline.timeline, e.errors).instructions,
      key: 'CommunityTweetsTimeline',
      param: args,
    });
    return response;
  }

  async getCommunityMediaTimeline(param: GetCommunityMediaTimelineParam): Promise<ResponseType> {
    const args = {
      communityId: param.communityId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };

    const response = await this.request({
      apiFn: this.api.getCommunityMediaTimelineRaw,
      convertFn: (e) =>
        errorCheck(e.data?.communityResults.result.communityMediaTimeline.timeline, e.errors).instructions,
      key: 'CommunityMediaTimeline',
      param: args,
    });
    return response;
  }

  async getUserHighlightsTweets(param: GetUserHighlightsTweetsParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getUserHighlightsTweetsRaw,
      convertFn: (e) => errorCheck(errorCheck(e.data.user, e.errors).result.timeline, e.errors).timeline.instructions,
      key: 'UserHighlightsTweets',
      param: args,
    });
    return response;
  }

  async getUserRepostsTimeline(param: GetUserRepostsTimelineParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getUserRepostsTimelineRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
      key: 'UserRepostsTimeline',
      param: args,
    });
    return response;
  }

  // Subscriber-only posts; without a subscription the timeline only carries a TimelineMessagePrompt.
  async getUserSuperFollowTweets(param: GetUserSuperFollowTweetsParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getUserSuperFollowTweetsRaw,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline?.timeline, e.errors).instructions,
      key: 'UserSuperFollowTweets',
      param: args,
    });
    return response;
  }

  // Trends of the first explore tab; the other tabs are GenericTimelineById timelines.
  async getExplorePage(param: GetExplorePageParam = {}): Promise<TrendResponseType> {
    const args = {
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getExplorePageRaw,
      flag: this.flag.ExplorePage,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.explorePage.body.initialTimeline.timeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: trendEntriesConverter,
    });
  }

  // Explore tab timelines (trending, news, sports, ...).
  async getGenericTimelineById(param: GetGenericTimelineByIdParam): Promise<TrendResponseType> {
    const args = {
      timelineId: param.timelineId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getGenericTimelineByIdRaw,
      flag: this.flag.GenericTimelineById,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.timeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: trendEntriesConverter,
    });
  }

  // Notification items only; the tweets of the Mentions tab are in data.raw.entry (tweetEntriesConverter).
  async getNotificationsTimeline(param: GetNotificationsTimelineParam = {}): Promise<NotificationResponseType> {
    const args = {
      ...(param.timelineType == undefined ? {} : { timeline_type: param.timelineType }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getNotificationsTimelineRaw,
      flag: this.flag.NotificationsTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) =>
        errorCheck(e.data.viewerV2.userResults.result.notificationTimeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: notificationEntriesConverter,
    });
  }

  async getCommunityDiscoveryTimeline(param: GetCommunityDiscoveryTimelineParam = {}): Promise<CommunityResponseType> {
    const args = {
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getCommunityDiscoveryTimelineRaw,
      flag: this.flag.CommunityDiscoveryTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.viewer.communityDiscoveryTimeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: communityEntriesConverter,
    });
  }

  // Moderators and members of a community.
  async getCommunityAboutTimeline(param: GetCommunityAboutTimelineParam): Promise<UserResponseType> {
    const args = {
      communityId: param.communityId,
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getCommunityAboutTimelineRaw,
      flag: this.flag.CommunityAboutTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.communityResults.result.aboutTimeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: (entry) => userResultConverter(userEntriesConverter(entry)),
    });
  }

  // Who to follow.
  async getConnectTabTimeline(param: GetConnectTabTimelineParam = {}): Promise<UserResponseType> {
    const args = {
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getConnectTabTimelineRaw,
      flag: this.flag.ConnectTabTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.connectTabTimeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: (entry) => userResultConverter(userEntriesConverter(entry)),
    });
  }

  // Search the account's bookmarks.
  async getBookmarkSearchTimeline(param: GetBookmarkSearchTimelineParam): Promise<ResponseType> {
    const args = {
      rawQuery: param.rawQuery,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getBookmarkSearchTimelineRaw,
      convertFn: (e) => errorCheck(e.data.searchByRawQuery.bookmarksSearchTimeline.timeline, e.errors).instructions,
      key: 'BookmarkSearchTimeline',
      param: args,
    });
    return response;
  }

  // Trends of the explore sidebar.
  async getExploreSidebar(param: GetExploreSidebarParam = {}): Promise<TrendResponseType> {
    const args = {
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getExploreSidebarRaw,
      flag: this.flag.ExploreSidebar,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.exploreSidebar.timeline, e.errors).instructions,
      param: args,
      itemsFn: trendEntriesConverter,
    });
  }
}
