/* tslint:disable */
/* eslint-disable */
/**
 * Twitter OpenAPI
 * Twitter OpenAPI(Swagger) specification
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: yuki@yuki0311.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PostCreateRetweet200Response,
  PostCreateRetweetRequest,
  PostCreateTweet200Response,
  PostCreateTweetRequest,
  PostDeleteRetweet200Response,
  PostDeleteRetweetRequest,
  PostDeleteTweet200Response,
  PostDeleteTweetRequest,
  PostFavoriteTweet200Response,
  PostFavoriteTweetRequest,
  PostUnfavoriteTweet200Response,
  PostUnfavoriteTweetRequest,
} from '../models/index';
import {
    PostCreateRetweet200ResponseFromJSON,
    PostCreateRetweet200ResponseToJSON,
    PostCreateRetweetRequestFromJSON,
    PostCreateRetweetRequestToJSON,
    PostCreateTweet200ResponseFromJSON,
    PostCreateTweet200ResponseToJSON,
    PostCreateTweetRequestFromJSON,
    PostCreateTweetRequestToJSON,
    PostDeleteRetweet200ResponseFromJSON,
    PostDeleteRetweet200ResponseToJSON,
    PostDeleteRetweetRequestFromJSON,
    PostDeleteRetweetRequestToJSON,
    PostDeleteTweet200ResponseFromJSON,
    PostDeleteTweet200ResponseToJSON,
    PostDeleteTweetRequestFromJSON,
    PostDeleteTweetRequestToJSON,
    PostFavoriteTweet200ResponseFromJSON,
    PostFavoriteTweet200ResponseToJSON,
    PostFavoriteTweetRequestFromJSON,
    PostFavoriteTweetRequestToJSON,
    PostUnfavoriteTweet200ResponseFromJSON,
    PostUnfavoriteTweet200ResponseToJSON,
    PostUnfavoriteTweetRequestFromJSON,
    PostUnfavoriteTweetRequestToJSON,
} from '../models/index';

export interface PostCreateRetweetOperationRequest {
    pathQueryId: string;
    postCreateRetweetRequest: PostCreateRetweetRequest;
}

export interface PostCreateTweetOperationRequest {
    pathQueryId: string;
    postCreateTweetRequest: PostCreateTweetRequest;
}

export interface PostDeleteRetweetOperationRequest {
    pathQueryId: string;
    postDeleteRetweetRequest: PostDeleteRetweetRequest;
}

export interface PostDeleteTweetOperationRequest {
    pathQueryId: string;
    postDeleteTweetRequest: PostDeleteTweetRequest;
}

export interface PostFavoriteTweetOperationRequest {
    pathQueryId: string;
    postFavoriteTweetRequest: PostFavoriteTweetRequest;
}

export interface PostUnfavoriteTweetOperationRequest {
    pathQueryId: string;
    postUnfavoriteTweetRequest: PostUnfavoriteTweetRequest;
}

/**
 * 
 */
export class PostApi extends runtime.BaseAPI {

    /**
     * create Retweet
     */
    async postCreateRetweetRaw(requestParameters: PostCreateRetweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostCreateRetweet200Response>> {
        if (requestParameters.pathQueryId === null || requestParameters.pathQueryId === undefined) {
            throw new runtime.RequiredError('pathQueryId','Required parameter requestParameters.pathQueryId was null or undefined when calling postCreateRetweet.');
        }

        if (requestParameters.postCreateRetweetRequest === null || requestParameters.postCreateRetweetRequest === undefined) {
            throw new runtime.RequiredError('postCreateRetweetRequest','Required parameter requestParameters.postCreateRetweetRequest was null or undefined when calling postCreateRetweet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = await this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = await this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/CreateRetweet`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters.pathQueryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCreateRetweetRequestToJSON(requestParameters.postCreateRetweetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostCreateRetweet200ResponseFromJSON(jsonValue));
    }

    /**
     * create Retweet
     */
    async postCreateRetweet(requestParameters: PostCreateRetweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostCreateRetweet200Response> {
        const response = await this.postCreateRetweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * create Tweet
     */
    async postCreateTweetRaw(requestParameters: PostCreateTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostCreateTweet200Response>> {
        if (requestParameters.pathQueryId === null || requestParameters.pathQueryId === undefined) {
            throw new runtime.RequiredError('pathQueryId','Required parameter requestParameters.pathQueryId was null or undefined when calling postCreateTweet.');
        }

        if (requestParameters.postCreateTweetRequest === null || requestParameters.postCreateTweetRequest === undefined) {
            throw new runtime.RequiredError('postCreateTweetRequest','Required parameter requestParameters.postCreateTweetRequest was null or undefined when calling postCreateTweet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = await this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = await this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/CreateTweet`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters.pathQueryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCreateTweetRequestToJSON(requestParameters.postCreateTweetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostCreateTweet200ResponseFromJSON(jsonValue));
    }

    /**
     * create Tweet
     */
    async postCreateTweet(requestParameters: PostCreateTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostCreateTweet200Response> {
        const response = await this.postCreateTweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete Retweet
     */
    async postDeleteRetweetRaw(requestParameters: PostDeleteRetweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostDeleteRetweet200Response>> {
        if (requestParameters.pathQueryId === null || requestParameters.pathQueryId === undefined) {
            throw new runtime.RequiredError('pathQueryId','Required parameter requestParameters.pathQueryId was null or undefined when calling postDeleteRetweet.');
        }

        if (requestParameters.postDeleteRetweetRequest === null || requestParameters.postDeleteRetweetRequest === undefined) {
            throw new runtime.RequiredError('postDeleteRetweetRequest','Required parameter requestParameters.postDeleteRetweetRequest was null or undefined when calling postDeleteRetweet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = await this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = await this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/DeleteRetweet`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters.pathQueryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostDeleteRetweetRequestToJSON(requestParameters.postDeleteRetweetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostDeleteRetweet200ResponseFromJSON(jsonValue));
    }

    /**
     * delete Retweet
     */
    async postDeleteRetweet(requestParameters: PostDeleteRetweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostDeleteRetweet200Response> {
        const response = await this.postDeleteRetweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete Retweet
     */
    async postDeleteTweetRaw(requestParameters: PostDeleteTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostDeleteTweet200Response>> {
        if (requestParameters.pathQueryId === null || requestParameters.pathQueryId === undefined) {
            throw new runtime.RequiredError('pathQueryId','Required parameter requestParameters.pathQueryId was null or undefined when calling postDeleteTweet.');
        }

        if (requestParameters.postDeleteTweetRequest === null || requestParameters.postDeleteTweetRequest === undefined) {
            throw new runtime.RequiredError('postDeleteTweetRequest','Required parameter requestParameters.postDeleteTweetRequest was null or undefined when calling postDeleteTweet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = await this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = await this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/DeleteTweet`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters.pathQueryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostDeleteTweetRequestToJSON(requestParameters.postDeleteTweetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostDeleteTweet200ResponseFromJSON(jsonValue));
    }

    /**
     * delete Retweet
     */
    async postDeleteTweet(requestParameters: PostDeleteTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostDeleteTweet200Response> {
        const response = await this.postDeleteTweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * favorite Tweet
     */
    async postFavoriteTweetRaw(requestParameters: PostFavoriteTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostFavoriteTweet200Response>> {
        if (requestParameters.pathQueryId === null || requestParameters.pathQueryId === undefined) {
            throw new runtime.RequiredError('pathQueryId','Required parameter requestParameters.pathQueryId was null or undefined when calling postFavoriteTweet.');
        }

        if (requestParameters.postFavoriteTweetRequest === null || requestParameters.postFavoriteTweetRequest === undefined) {
            throw new runtime.RequiredError('postFavoriteTweetRequest','Required parameter requestParameters.postFavoriteTweetRequest was null or undefined when calling postFavoriteTweet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = await this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = await this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/FavoriteTweet`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters.pathQueryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostFavoriteTweetRequestToJSON(requestParameters.postFavoriteTweetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostFavoriteTweet200ResponseFromJSON(jsonValue));
    }

    /**
     * favorite Tweet
     */
    async postFavoriteTweet(requestParameters: PostFavoriteTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostFavoriteTweet200Response> {
        const response = await this.postFavoriteTweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * unfavorite Tweet
     */
    async postUnfavoriteTweetRaw(requestParameters: PostUnfavoriteTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostUnfavoriteTweet200Response>> {
        if (requestParameters.pathQueryId === null || requestParameters.pathQueryId === undefined) {
            throw new runtime.RequiredError('pathQueryId','Required parameter requestParameters.pathQueryId was null or undefined when calling postUnfavoriteTweet.');
        }

        if (requestParameters.postUnfavoriteTweetRequest === null || requestParameters.postUnfavoriteTweetRequest === undefined) {
            throw new runtime.RequiredError('postUnfavoriteTweetRequest','Required parameter requestParameters.postUnfavoriteTweetRequest was null or undefined when calling postUnfavoriteTweet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-client-language"] = await this.configuration.apiKey("x-twitter-client-language"); // ClientLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept"] = await this.configuration.apiKey("Accept"); // Accept authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Dest"] = await this.configuration.apiKey("Sec-Fetch-Dest"); // SecFetchDest authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Pragma"] = await this.configuration.apiKey("Pragma"); // Pragma authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Platform"] = await this.configuration.apiKey("Sec-Ch-Ua-Platform"); // SecChUaPlatform authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Mode"] = await this.configuration.apiKey("Sec-Fetch-Mode"); // SecFetchMode authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-csrf-token"] = await this.configuration.apiKey("x-csrf-token"); // CsrfToken authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-guest-token"] = await this.configuration.apiKey("x-guest-token"); // GuestToken authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua"] = await this.configuration.apiKey("Sec-Ch-Ua"); // SecChUa authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-active-user"] = await this.configuration.apiKey("x-twitter-active-user"); // ActiveUser authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["user-agent"] = await this.configuration.apiKey("user-agent"); // UserAgent authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Language"] = await this.configuration.apiKey("Accept-Language"); // AcceptLanguage authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Fetch-Site"] = await this.configuration.apiKey("Sec-Fetch-Site"); // SecFetchSite authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["x-twitter-auth-type"] = await this.configuration.apiKey("x-twitter-auth-type"); // AuthType authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Cache-Control"] = await this.configuration.apiKey("Cache-Control"); // CacheControl authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Sec-Ch-Ua-Mobile"] = await this.configuration.apiKey("Sec-Ch-Ua-Mobile"); // SecChUaMobile authentication
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Accept-Encoding"] = await this.configuration.apiKey("Accept-Encoding"); // AcceptEncoding authentication
        }

        const response = await this.request({
            path: `/graphql/{pathQueryId}/UnfavoriteTweet`.replace(`{${"pathQueryId"}}`, encodeURIComponent(String(requestParameters.pathQueryId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostUnfavoriteTweetRequestToJSON(requestParameters.postUnfavoriteTweetRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostUnfavoriteTweet200ResponseFromJSON(jsonValue));
    }

    /**
     * unfavorite Tweet
     */
    async postUnfavoriteTweet(requestParameters: PostUnfavoriteTweetOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostUnfavoriteTweet200Response> {
        const response = await this.postUnfavoriteTweetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
