import { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, InitOverridesType } from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';

type PostCreateFriendshipsParam = {
  userId: string;
  extraParam?: { [key: string]: any };
};

type PostDestroyFriendshipsParam = {
  userId: string;
  extraParam?: { [key: string]: any };
};

export class V11PostApiUtils {
  api: i.V11PostApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.V11PostApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async postCreateFriendships(param: PostCreateFriendshipsParam): Promise<TwitterApiUtilsResponse<undefined>> {
    const response = await this.api.postCreateFriendshipsRaw({
      includeBlockedBy: 1,
      includeBlocking: 1,
      includeCanDm: 1,
      includeCanMediaTag: 1,
      includeExtHasNftAvatar: 1,
      includeExtIsBlueVerified: 1,
      includeExtProfileImageShape: 1,
      includeExtVerifiedType: 1,
      includeFollowedBy: 1,
      includeMuteEdge: 1,
      includeProfileInterstitialType: 1,
      includeWantRetweets: 1,
      skipStatus: 1,
      userId: param.userId,
      ...param.extraParam,
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: undefined,
    };
  }

  async postDestroyFriendships(param: PostDestroyFriendshipsParam): Promise<TwitterApiUtilsResponse<undefined>> {
    const response = await this.api.postDestroyFriendshipsRaw({
      includeBlockedBy: 0,
      includeBlocking: 0,
      includeCanDm: 0,
      includeCanMediaTag: 0,
      includeExtHasNftAvatar: 0,
      includeExtIsBlueVerified: 0,
      includeExtProfileImageShape: 0,
      includeExtVerifiedType: 0,
      includeFollowedBy: 0,
      includeMuteEdge: 0,
      includeProfileInterstitialType: 0,
      includeWantRetweets: 0,
      skipStatus: 0,
      userId: param.userId,
      ...param.extraParam,
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: undefined,
    };
  }
}
