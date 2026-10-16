import type * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, TimelineApiUtilsResponse, TweetApiUtilsData, TwitterApiUtilsResponse } from '@/models';
import { dataRequest, errorCheck, type InitOverridesType, timelineRequest, tweetEntriesConverter } from '@/utils';

type ExtraParam = {
  extraParam?: { [key: string]: any };
};

type GetBirdwatchFetchBirdwatchProfileParam = {
  alias: string;
  extraParam?: { [key: string]: any };
};

type GetBirdwatchFetchGlobalTimelineParam = {
  cursor?: string;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<TweetApiUtilsData>>;

// Community Notes.
export class BirdwatchApiUtils {
  api: i.BirdwatchApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.BirdwatchApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async getBirdwatchFetchAliasSelfSelectStatus(
    param: ExtraParam = {},
  ): Promise<TwitterApiUtilsResponse<i.BirdwatchAliasSelfSelectStatus>> {
    const args = {
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getBirdwatchFetchAliasSelfSelectStatusRaw,
      flag: this.flag.BirdwatchFetchAliasSelfSelectStatus,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.authenticatedUserBirdwatchAliasSelfSelectStatus,
      param: args,
    });
  }

  async getBirdwatchFetchAuthenticatedUserProfile(
    param: ExtraParam = {},
  ): Promise<TwitterApiUtilsResponse<i.BirdwatchProfile>> {
    const args = {
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getBirdwatchFetchAuthenticatedUserProfileRaw,
      flag: this.flag.BirdwatchFetchAuthenticatedUserProfile,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.authenticatedUserBirdwatchProfile,
      param: args,
    });
  }

  async getBirdwatchFetchBirdwatchProfile(
    param: GetBirdwatchFetchBirdwatchProfileParam,
  ): Promise<TwitterApiUtilsResponse<i.BirdwatchProfile>> {
    const args = {
      alias: param.alias,
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getBirdwatchFetchBirdwatchProfileRaw,
      flag: this.flag.BirdwatchFetchBirdwatchProfile,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.birdwatchProfileByAlias,
      param: args,
    });
  }

  // Posts with notes on the Community Notes home page (first tab).
  async getBirdwatchFetchGlobalTimeline(param: GetBirdwatchFetchGlobalTimelineParam = {}): Promise<ResponseType> {
    const args = {
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getBirdwatchFetchGlobalTimelineRaw,
      flag: this.flag.BirdwatchFetchGlobalTimeline,
      initOverrides: this.initOverrides,
      convertFn: (e) =>
        errorCheck(e.data.viewer.birdwatchHomePage.body.initialTimeline.timeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: tweetEntriesConverter,
    });
  }

  // Download urls of the latest public data files.
  async getBirdwatchFetchPublicData(
    param: ExtraParam = {},
  ): Promise<TwitterApiUtilsResponse<i.BirdwatchPublicDataFileBundle>> {
    const args = {
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getBirdwatchFetchPublicDataRaw,
      flag: this.flag.BirdwatchFetchPublicData,
      initOverrides: this.initOverrides,
      convertFn: (e) => e.data.birdwatchLatestPublicDataFileBundle,
      param: args,
    });
  }
}
