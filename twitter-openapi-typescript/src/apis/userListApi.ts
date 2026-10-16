import type * as i from 'twitter-openapi-typescript-generated';
import type {
  DefaultFlag,
  RequestParam,
  TimelineApiUtilsResponse,
  TwitterApiUtilsResponse,
  UserApiUtilsData,
} from '@/models';
import {
  dataRequest,
  errorCheck,
  type InitOverridesType,
  listEntriesConverter,
  timelineRequest,
  userEntriesConverter,
  userResultConverter,
} from '@/utils';

type GetFollowersParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetFollowingParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetFollowersYouKnowParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetFavoritersParam = {
  tweetId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetRetweetersParam = {
  tweetId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetBlueVerifiedFollowersParam = {
  userId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetListMembersParam = {
  listId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetListSubscribersParam = {
  listId: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetListRecommendedUsersParam = {
  listId: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetListOwnershipsParam = {
  userId: string;
  isListMemberTargetUserId?: string;
  cursor?: string;
  count?: number;
  extraParam?: { [key: string]: any };
};

type GetListByRestIdParam = {
  listId: string;
  extraParam?: { [key: string]: any };
};

type ResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<UserApiUtilsData>>;
type ListResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<i.TwitterList>>;

export class UserListApiUtils {
  api: i.UserListApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.UserListApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
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
      itemsFn: (entry) => userResultConverter(userEntriesConverter(entry)),
    });
  }

  async getFollowers(param: GetFollowersParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFollowersRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors).result.timeline.timeline.instructions,
      key: 'Followers',
      param: args,
    });
    return response;
  }
  async getFollowing(param: GetFollowingParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFollowingRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors).result.timeline.timeline.instructions,
      key: 'Following',
      param: args,
    });
    return response;
  }

  async getFollowersYouKnow(param: GetFollowersYouKnowParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFollowersYouKnowRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors).result.timeline.timeline.instructions,
      key: 'FollowersYouKnow',
      param: args,
    });
    return response;
  }

  async getFavoriters(param: GetFavoritersParam): Promise<ResponseType> {
    const args = {
      tweetId: param.tweetId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFavoritersRaw,
      convertFn: (e) => errorCheck(e.data.favoritersTimeline?.timeline, e.errors).instructions,
      key: 'Favoriters',
      param: args,
    });
    return response;
  }

  async getRetweeters(param: GetRetweetersParam): Promise<ResponseType> {
    const args = {
      tweetId: param.tweetId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getRetweetersRaw,
      convertFn: (e) => errorCheck(e.data.retweetersTimeline?.timeline, e.errors).instructions,
      key: 'Retweeters',
      param: args,
    });
    return response;
  }

  async getBlueVerifiedFollowers(param: GetBlueVerifiedFollowersParam): Promise<ResponseType> {
    const args = {
      userId: param.userId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getBlueVerifiedFollowersRaw,
      convertFn: (e) => errorCheck(e.data.user, e.errors).result.timeline.timeline.instructions,
      key: 'BlueVerifiedFollowers',
      param: args,
    });
    return response;
  }

  async getListMembers(param: GetListMembersParam): Promise<ResponseType> {
    const args = {
      listId: param.listId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getListMembersRaw,
      convertFn: (e) => errorCheck(e.data.list.membersTimeline.timeline, e.errors).instructions,
      key: 'ListMembers',
      param: args,
    });
    return response;
  }

  async getListSubscribers(param: GetListSubscribersParam): Promise<ResponseType> {
    const args = {
      listId: param.listId,
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getListSubscribersRaw,
      convertFn: (e) => errorCheck(e.data.list.subscribersTimeline.timeline, e.errors).instructions,
      key: 'ListSubscribers',
      param: args,
    });
    return response;
  }

  // Empty unless listId is one of the authenticated account's lists.
  async getListCreationRecommendedUsers(param: GetListRecommendedUsersParam): Promise<ResponseType> {
    const args = {
      listId: param.listId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getListCreationRecommendedUsersRaw,
      convertFn: (e) => e.data.list.recommendedUsers.timeline?.instructions ?? [],
      key: 'ListCreationRecommendedUsers',
      param: args,
    });
    return response;
  }

  // Empty unless listId is one of the authenticated account's lists.
  async getListEditRecommendedUsers(param: GetListRecommendedUsersParam): Promise<ResponseType> {
    const args = {
      listId: param.listId,
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getListEditRecommendedUsersRaw,
      convertFn: (e) => e.data.list.recommendedUsers.timeline?.instructions ?? [],
      key: 'ListEditRecommendedUsers',
      param: args,
    });
    return response;
  }

  // Lists owned by userId; isListMemberTargetUserId marks the lists that user is a member of.
  async getListOwnerships(param: GetListOwnershipsParam): Promise<ListResponseType> {
    const args = {
      userId: param.userId,
      ...(param.isListMemberTargetUserId == undefined
        ? {}
        : { isListMemberTargetUserId: param.isListMemberTargetUserId }),
      ...(param.cursor == undefined ? {} : { cursor: param.cursor }),
      ...(param.count == undefined ? {} : { count: param.count }),
      ...param.extraParam,
    };
    return timelineRequest({
      api: this.api,
      apiFn: this.api.getListOwnershipsRaw,
      flag: this.flag.ListOwnerships,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data.user?.result.timeline.timeline, e.errors).instructions,
      param: args,
      itemsFn: listEntriesConverter,
    });
  }

  async getListByRestId(param: GetListByRestIdParam): Promise<TwitterApiUtilsResponse<i.TwitterList>> {
    const args = {
      listId: param.listId,
      ...param.extraParam,
    };
    return dataRequest({
      api: this.api,
      apiFn: this.api.getListByRestIdRaw,
      flag: this.flag.ListByRestId,
      initOverrides: this.initOverrides,
      convertFn: (e) => errorCheck(e.data, e.errors).list,
      param: args,
    });
  }
}
