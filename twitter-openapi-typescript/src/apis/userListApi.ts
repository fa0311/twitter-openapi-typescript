import * as i from 'twitter-openapi-typescript-generated';
import { RequestParam, DefaultFlag, ApiUtilsRaw, UserListApiUtilsResponse } from '@/models';
import { buildHeader, buildUserResponse, entriesCursor, instructionToEntry, userEntriesConverter } from '@/utils';

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

export class UserListApiUtils {
  api: i.UserListApi;
  flag: DefaultFlag;

  constructor(api: i.UserListApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async request<T>(param: RequestParam<i.InstructionUnion[], T>): Promise<UserListApiUtilsResponse> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const fieldTogglesFn = () => {
      if (this.flag[param.key]['fieldToggles'] == null) return { fieldToggles: '' };
      return { fieldToggles: JSON.stringify(this.flag[param.key]['fieldToggles']) };
    };
    const response = await apiFn({
      pathQueryId: this.flag[param.key]['queryId'],
      queryId: this.flag[param.key]['queryId'],
      variables: JSON.stringify({ ...this.flag[param.key]['variables'], ...param.param }),
      features: JSON.stringify(this.flag[param.key]['features']),
      ...fieldTogglesFn(),
    });
    const instruction = param.convertFn(await response.value());
    const entry = instructionToEntry(instruction);
    const userList = userEntriesConverter(entry);
    const data = userList.map((user) => buildUserResponse(user));

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

  async getFollowers(param: GetFollowersParam): Promise<UserListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...(param.count == null ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFollowersRaw,
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
      key: 'Followers',
      param: args,
    });
    return response;
  }
  async getFollowing(param: GetFollowingParam): Promise<UserListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...(param.count == null ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFollowingRaw,
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
      key: 'Following',
      param: args,
    });
    return response;
  }

  async getFollowersYouKnow(param: GetFollowersYouKnowParam): Promise<UserListApiUtilsResponse> {
    const args = {
      userId: param.userId,
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...(param.count == null ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getFollowersYouKnowRaw,
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
      key: 'FollowersYouKnow',
      param: args,
    });
    return response;
  }

  async getFavoriters(param: GetFavoritersParam): Promise<UserListApiUtilsResponse> {
    const args = {
      tweetId: param.tweetId,
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...(param.count == null ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getTweetFavoritersRaw,
      convertFn: (e) => e.data.favoritersTimeline.timeline.instructions,
      key: 'Favoriters',
      param: args,
    });
    return response;
  }

  async getRetweeters(param: GetRetweetersParam): Promise<UserListApiUtilsResponse> {
    const args = {
      tweetId: param.tweetId,
      ...(param.cursor == null ? {} : { cursor: param.cursor }),
      ...(param.count == null ? {} : { count: param.count }),
      ...param.extraParam,
    };
    const response = await this.request({
      apiFn: this.api.getTweetRetweetersRaw,
      convertFn: (e) => e.data.retweetersTimeline.timeline.instructions,
      key: 'Retweeters',
      param: args,
    });
    return response;
  }
}
