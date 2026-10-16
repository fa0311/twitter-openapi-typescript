import * as i from 'twitter-openapi-typescript-generated';
import type { DefaultFlag, TwitterApiUtilsResponse } from '@/models';
import { buildHeader, type InitOverridesType } from '@/utils';

type PostCreateTweetParam = {
  tweetText: string;
  mediaIds?: string[];
  taggedUsers?: string[][];
  inReplyToTweetId?: string;
  attachmentUrl?: string;
  conversationControl?: 'Community' | 'Verified' | 'ByInvitation' | (string & {});
  extraParam?: { [key: string]: any };
};

type PostDeleteTweetParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

type PostCreateRetweetParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

type PostDeleteRetweetParam = {
  sourceTweetId: string;
  extraParam?: { [key: string]: any };
};

type PostFavoriteTweetParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

type PostUnfavoriteTweetParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

type PostCreateBookmarkParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

type PostDeleteBookmarkParam = {
  tweetId: string;
  extraParam?: { [key: string]: any };
};

type PostCreateListParam = {
  name: string;
  description?: string;
  isPrivate?: boolean;
  extraParam?: { [key: string]: any };
};

type PostDeleteListParam = {
  listId: string;
  extraParam?: { [key: string]: any };
};

type PostListMemberParam = {
  listId: string;
  userId: string;
  extraParam?: { [key: string]: any };
};

type PostCreateDraftTweetParam = {
  status: string;
  extraParam?: { [key: string]: any };
};

type PostDeleteDraftTweetsParam = {
  draftTweetIds: string[];
  extraParam?: { [key: string]: any };
};

export class PostApiUtils {
  api: i.PostApi;
  flag: DefaultFlag;
  initOverrides: InitOverridesType;

  constructor(api: i.PostApi, flag: DefaultFlag, initOverrides: InitOverridesType) {
    this.api = api;
    this.flag = flag;
    this.initOverrides = initOverrides;
  }

  async postCreateTweet(param: PostCreateTweetParam): Promise<TwitterApiUtilsResponse<i.CreateTweetResponse>> {
    const args = {
      tweetText: param.tweetText,
      ...param.extraParam,
    };

    const queryId = 'CreateTweet';
    const features = i.PostCreateTweetRequestFeaturesFromJSON(this.flag[queryId].features);
    const variables = i.PostCreateTweetRequestVariablesFromJSON(this.flag[queryId].variables);
    if (param.mediaIds) {
      variables.media.mediaEntities = param.mediaIds!.map((mediaId, index) => ({
        mediaId: mediaId,
        taggedUsers: param.taggedUsers?.[index] || [],
      }));
    }

    variables.attachmentUrl = param.attachmentUrl;
    if (param.conversationControl) {
      variables.conversationControl = {
        mode: param.conversationControl,
      };
    }

    if (param.inReplyToTweetId) {
      variables.reply = {
        excludeReplyUserIds: [],
        inReplyToTweetId: param.inReplyToTweetId,
      };
    }

    variables.disallowedReplyOptions = null as any;

    const response = await this.api.postCreateTweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postCreateTweetRequest: {
          queryId: this.flag[queryId].queryId,
          features: features,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );

    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postDeleteTweet(param: PostDeleteTweetParam): Promise<TwitterApiUtilsResponse<i.DeleteTweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'DeleteTweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postDeleteTweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postDeleteTweetRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postCreateRetweet(param: PostCreateRetweetParam): Promise<TwitterApiUtilsResponse<i.CreateRetweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'CreateRetweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postCreateRetweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postCreateRetweetRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }
  async postDeleteRetweet(param: PostDeleteRetweetParam): Promise<TwitterApiUtilsResponse<i.DeleteRetweetResponse>> {
    const args = {
      sourceTweetId: param.sourceTweetId,
      ...param.extraParam,
    };
    const queryId = 'DeleteRetweet';
    const variables = i.PostDeleteRetweetRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postDeleteRetweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postDeleteRetweetRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postFavoriteTweet(param: PostFavoriteTweetParam): Promise<TwitterApiUtilsResponse<i.FavoriteTweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'FavoriteTweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postFavoriteTweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postFavoriteTweetRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postUnfavoriteTweet(
    param: PostUnfavoriteTweetParam,
  ): Promise<TwitterApiUtilsResponse<i.UnfavoriteTweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'UnfavoriteTweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postUnfavoriteTweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postUnfavoriteTweetRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postCreateBookmark(param: PostCreateBookmarkParam): Promise<TwitterApiUtilsResponse<i.CreateBookmarkResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'CreateBookmark';
    const variables = i.PostCreateBookmarkRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postCreateBookmarkRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postCreateBookmarkRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postDeleteBookmark(param: PostDeleteBookmarkParam): Promise<TwitterApiUtilsResponse<i.DeleteBookmarkResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'DeleteBookmark';
    const variables = i.PostCreateBookmarkRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postDeleteBookmarkRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postDeleteBookmarkRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postCreateList(param: PostCreateListParam): Promise<TwitterApiUtilsResponse<i.ListResponse>> {
    const args = {
      name: param.name,
      description: param.description ?? '',
      isPrivate: param.isPrivate ?? false,
      ...param.extraParam,
    };
    const queryId = 'CreateList';
    const features = i.PostCreateListRequestFeaturesFromJSON(this.flag[queryId].features);
    const variables = i.PostCreateListRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postCreateListRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postCreateListRequest: {
          queryId: this.flag[queryId].queryId,
          features: features,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postDeleteList(param: PostDeleteListParam): Promise<TwitterApiUtilsResponse<i.DeleteListResponse>> {
    const args = {
      listId: param.listId,
      ...param.extraParam,
    };
    const queryId = 'DeleteList';
    const variables = i.PostDeleteListRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postDeleteListRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postDeleteListRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postListAddMember(param: PostListMemberParam): Promise<TwitterApiUtilsResponse<i.ListResponse>> {
    const args = {
      listId: param.listId,
      userId: param.userId,
      ...param.extraParam,
    };
    const queryId = 'ListAddMember';
    const features = i.PostCreateListRequestFeaturesFromJSON(this.flag[queryId].features);
    const variables = i.PostListAddMemberRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postListAddMemberRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postListAddMemberRequest: {
          queryId: this.flag[queryId].queryId,
          features: features,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postListRemoveMember(param: PostListMemberParam): Promise<TwitterApiUtilsResponse<i.ListResponse>> {
    const args = {
      listId: param.listId,
      userId: param.userId,
      ...param.extraParam,
    };
    const queryId = 'ListRemoveMember';
    const features = i.PostCreateListRequestFeaturesFromJSON(this.flag[queryId].features);
    const variables = i.PostListAddMemberRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postListRemoveMemberRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postListRemoveMemberRequest: {
          queryId: this.flag[queryId].queryId,
          features: features,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postCreateDraftTweet(
    param: PostCreateDraftTweetParam,
  ): Promise<TwitterApiUtilsResponse<i.CreateDraftTweetResponse>> {
    const queryId = 'CreateDraftTweet';
    const variables = i.PostCreateDraftTweetRequestVariablesFromJSON(this.flag[queryId].variables);
    variables.postTweetRequest = { ...variables.postTweetRequest, status: param.status, ...param.extraParam };
    const response = await this.api.postCreateDraftTweetRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postCreateDraftTweetRequest: {
          queryId: this.flag[queryId].queryId,
          variables: variables,
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postDeleteDraftTweets(
    param: PostDeleteDraftTweetsParam,
  ): Promise<TwitterApiUtilsResponse<i.DeleteDraftTweetsResponse>> {
    const args = {
      draftTweetIds: param.draftTweetIds,
      ...param.extraParam,
    };
    const queryId = 'DeleteDraftTweets';
    const variables = i.PostDeleteDraftTweetsRequestVariablesFromJSON(this.flag[queryId].variables);
    const response = await this.api.postDeleteDraftTweetsRaw(
      {
        pathQueryId: this.flag[queryId].queryId,
        postDeleteDraftTweetsRequest: {
          queryId: this.flag[queryId].queryId,
          variables: { ...variables, ...args },
        },
      },
      this.initOverrides(this.flag[queryId]),
    );
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }
}
