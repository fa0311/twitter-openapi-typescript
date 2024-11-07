import { DefaultFlag, TwitterApiUtilsResponse, initOverrides } from '@/models';
import { buildHeader, errorCheck } from '@/utils';
import * as i from 'twitter-openapi-typescript-generated';
import { PostCreateTweetRequestVariablesToJSON } from 'twitter-openapi-typescript-generated';

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

export class PostApiUtils {
  api: i.PostApi;
  flag: DefaultFlag;
  initOverrides: initOverrides;

  constructor(api: i.PostApi, flag: DefaultFlag, initOverrides: initOverrides) {
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
    const features = i.PostCreateTweetRequestFeaturesFromJSON(this.flag[queryId]['features']);
    const variables = i.PostCreateTweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
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

    const response = await this.api.postCreateTweetRaw({
      pathQueryId: this.flag[queryId]['queryId'],
      postCreateTweetRequest: {
        queryId: this.flag[queryId]['queryId'],
        features: features,
        variables: { ...variables, ...args },
      },
    });
    const a = PostCreateTweetRequestVariablesToJSON(variables);

    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: errorCheck(await response.value()),
    };
  }

  async postDeleteTweet(param: PostDeleteTweetParam): Promise<TwitterApiUtilsResponse<i.DeleteTweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'DeleteTweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postDeleteTweetRaw({
      pathQueryId: this.flag[queryId]['queryId'],
      postDeleteTweetRequest: {
        queryId: this.flag[queryId]['queryId'],
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: errorCheck(await response.value()),
    };
  }

  async postCreateRetweet(param: PostCreateRetweetParam): Promise<TwitterApiUtilsResponse<i.CreateRetweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'CreateRetweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postCreateRetweetRaw({
      pathQueryId: this.flag[queryId]['queryId'],
      postCreateRetweetRequest: {
        queryId: this.flag[queryId]['queryId'],
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: errorCheck(await response.value()),
    };
  }
  async postDeleteRetweet(param: PostDeleteRetweetParam): Promise<TwitterApiUtilsResponse<i.DeleteRetweetResponse>> {
    const args = {
      sourceTweetId: param.sourceTweetId,
      ...param.extraParam,
    };
    const queryId = 'DeleteRetweet';
    const variables = i.PostDeleteRetweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postDeleteRetweetRaw({
      pathQueryId: this.flag[queryId]['queryId'],
      postDeleteRetweetRequest: {
        queryId: this.flag[queryId]['queryId'],
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: errorCheck(await response.value()),
    };
  }

  async postFavoriteTweet(
    param: PostFavoriteTweetParam,
  ): Promise<TwitterApiUtilsResponse<i.FavoriteTweetResponse>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'FavoriteTweet';
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postFavoriteTweetRaw({
      pathQueryId: this.flag[queryId]['queryId'],
      postFavoriteTweetRequest: {
        queryId: this.flag[queryId]['queryId'],
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: errorCheck(await response.value()),
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
    const variables = i.PostCreateRetweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postUnfavoriteTweetRaw({
      pathQueryId: this.flag[queryId]['queryId'],
      postUnfavoriteTweetRequest: {
        queryId: this.flag[queryId]['queryId'],
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: errorCheck(await response.value()),
    };
  }
}
