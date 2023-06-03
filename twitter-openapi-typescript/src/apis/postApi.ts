import * as i from 'twitter-openapi-typescript-generated';
import { DefaultFlag } from '@/types';
import { buildHeader, entriesCursor } from '@/models/api';
import { TwitterApiUtilsResponse } from '@/types/response';

type Response<T> = Promise<TwitterApiUtilsResponse<T>>;

type PostCreateTweetParam = {
  tweetText: string;
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

  constructor(api: i.PostApi, flag: DefaultFlag) {
    this.api = api;
    this.flag = flag;
  }

  async postCreateTweet(param: PostCreateTweetParam): Promise<TwitterApiUtilsResponse<i.CreateTweetResponse>> {
    const args = {
      tweetText: param.tweetText,
      ...param.extraParam,
    };
    const queryId = 'CreateTweet';
    const features = i.PostCreateTweetRequestFeaturesFromJSON(this.flag[queryId]['features']);
    const variables = i.PostCreateTweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postCreateTweetRaw({
      postCreateTweetRequest: {
        queryId: queryId,
        features: features,
        variables: { ...variables, ...args },
      },
    });
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
    const variables = i.PostDeleteTweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postDeleteTweetRaw({
      postDeleteTweetRequest: {
        queryId: queryId,
        variables: { ...variables, ...args },
      },
    });
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
    const variables = i.PostCreateTweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postCreateRetweetRaw({
      postCreateRetweetRequest: {
        queryId: queryId,
        variables: { ...variables, ...args },
      },
    });
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
    const variables = i.PostDeleteRetweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postDeleteRetweetRaw({
      postDeleteRetweetRequest: {
        queryId: queryId,
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postFavoriteTweet(
    param: PostFavoriteTweetParam,
  ): Promise<TwitterApiUtilsResponse<i.FavoriteTweetResponseData>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'FavoriteTweet';
    const variables = i.PostDeleteTweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postFavoriteTweetRaw({
      postFavoriteTweetRequest: {
        queryId: queryId,
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }

  async postUnfavoriteTweet(
    param: PostUnfavoriteTweetParam,
  ): Promise<TwitterApiUtilsResponse<i.UnfavoriteTweetResponseData>> {
    const args = {
      tweetId: param.tweetId,
      ...param.extraParam,
    };
    const queryId = 'UnfavoriteTweet';
    const variables = i.PostDeleteTweetRequestVariablesFromJSON(this.flag[queryId]['variables']);
    const response = await this.api.postUnfavoriteTweetRaw({
      postUnfavoriteTweetRequest: {
        queryId: queryId,
        variables: { ...variables, ...args },
      },
    });
    return {
      raw: { response: response.raw },
      header: buildHeader(response.raw.headers),
      data: await response.value(),
    };
  }
}
