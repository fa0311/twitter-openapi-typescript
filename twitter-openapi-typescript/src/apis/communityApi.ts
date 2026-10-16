import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, TimelineApiUtilsResponse, TweetApiUtilsData, TwitterApiUtilsResponse } from '@/models';
import { dataRequest, errorCheck, type InitOverridesType, timelineRequest, tweetEntriesConverter } from '@/utils';

type GetCommunitiesFetchOneQueryParam = {
  communityId: string;
  extraParam?: { [key: string]: any };
};

type GetCommunityQueryParam = {
  communityId: string;
  extraParam?: { [key: string]: any };
};

type GetCommunitiesSearchQueryParam = {
  query: string;
  cursor?: string;
  extraParam?: { [key: string]: any };
};

type GetTopicCarouselQueryParam = {
  extraParam?: { [key: string]: any };
};

type GetGlobalCommunitiesPostSearchTimelineParam = {
  rawQuery: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<TweetApiUtilsData>>;

export class CommunityApiUtils {
  api: i.CommunityApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.CommunityApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  // The community page (full members and moderators).
  async getCommunitiesFetchOneQuery(
    param: GetCommunitiesFetchOneQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.CommunityPageCommunity>> {
    const args = {
      communityId: param.communityId,
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getCommunitiesFetchOneQueryRaw,
      flag: this.flag.CommunitiesFetchOneQuery,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.communityResults.result,
      param: args,
    });
  }

  // The community settings / moderation pages (partial users, trending hashtags).
  async getCommunityQuery(
    param: GetCommunityQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.CommunitySettingsCommunity>> {
    const args = {
      communityId: param.communityId,
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getCommunityQueryRaw,
      flag: this.flag.CommunityQuery,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.communityResults.result,
      param: args,
    });
  }

  // Community cards for a query; the next page is sliceInfo.nextCursor.
  async getCommunitiesSearchQuery(
    param: GetCommunitiesSearchQueryParam,
  ): Promise<TwitterApiUtilsResponse<i.CommunitiesSearchSlice>> {
    const args = {
      query: param.query,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getCommunitiesSearchQueryRaw,
      flag: this.flag.CommunitiesSearchQuery,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.communitiesSearchSlice,
      param: args,
    });
  }

  async getTopicCarouselQuery(
    param: GetTopicCarouselQueryParam = {},
  ): Promise<TwitterApiUtilsResponse<i.CommunityTopic[]>> {
    const args = {
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getTopicCarouselQueryRaw,
      flag: this.flag.TopicCarouselQuery,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.communityTopicResults.communityTopics,
      param: args,
    });
  }

  // Posts across communities (Top).
  async getGlobalCommunitiesPostSearchTimeline(
    param: GetGlobalCommunitiesPostSearchTimelineParam,
  ): Promise<ResponseType> {
    const args = {
      rawQuery: param.rawQuery,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getGlobalCommunitiesPostSearchTimelineRaw,
      flag: this.flag.GlobalCommunitiesPostSearchTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.searchByRawQuery.communitiesPostsSearchPage.timeline, e.errors).instructions,
      param: args,
      itemsFn: tweetEntriesConverter,
    });
  }

  // Posts across communities (Latest).
  async getGlobalCommunitiesLatestPostSearchTimeline(
    param: GetGlobalCommunitiesPostSearchTimelineParam,
  ): Promise<ResponseType> {
    const args = {
      rawQuery: param.rawQuery,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getGlobalCommunitiesLatestPostSearchTimelineRaw,
      flag: this.flag.GlobalCommunitiesLatestPostSearchTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) =>
        errorCheck(e.data.searchByRawQuery.communitiesLatestPostsSearchPage.timeline, e.errors).instructions,
      param: args,
      itemsFn: tweetEntriesConverter,
    });
  }
}
