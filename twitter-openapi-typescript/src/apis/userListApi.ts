import {
  DefaultFlag,
  RequestParam,
  TimelineApiUtilsResponse,
  TwitterApiUtilsResponse,
  UserApiUtilsData,
  initOverrides,
} from '@/models';
import {
  buildHeader,
  entriesCursor,
  errorCheck,
  getKwargs,
  instructionToEntry,
  userEntriesConverter,
  userResultConverter,
} from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

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

type ResponseType = TwitterApiUtilsResponse<TimelineApiUtilsResponse<UserApiUtilsData>>;

export class UserListApiUtils {
  api: i.UserListApi;
  flag: DefaultFlag;
  initOverrides: initOverrides;

  constructor(api: i.UserListApi, flag: DefaultFlag, initOverrides: initOverrides) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async request<T>(param: RequestParam<i.InstructionUnion[], T>): Promise<ResponseType> {
    const apiFn: typeof param.apiFn = param.apiFn.bind(this.api);
    const args = getKwargs(this.flag[param.key], param.param);
    const response = await apiFn(args, this.initOverrides);
    const checked = errorCheck(await response.value());
    const instruction = param.convertFn(checked);
    const entry = instructionToEntry(instruction);
    const userList = userEntriesConverter(entry);
    const data = userResultConverter(userList);

    return {
      raw: {
        response: response.raw,
      },
      header: buildHeader(response.raw.headers),
      data: {
        raw: {
          instruction: instruction,
          entry: entry,
        },
        data: data,
        cursor: entriesCursor(entry),
      },
    };
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
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
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
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
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
      convertFn: (e) => e.data.user.result.timeline.timeline.instructions,
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
      convertFn: (e) => e.data.favoritersTimeline.timeline.instructions,
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
      convertFn: (e) => e.data.retweetersTimeline.timeline.instructions,
      key: 'Retweeters',
      param: args,
    });
    return response;
  }
}
