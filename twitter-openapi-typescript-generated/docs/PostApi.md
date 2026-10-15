# PostApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**postCreateBookmark**](PostApi.md#postcreatebookmarkoperation) | **POST** /graphql/{pathQueryId}/CreateBookmark |  |
| [**postCreateRetweet**](PostApi.md#postcreateretweetoperation) | **POST** /graphql/{pathQueryId}/CreateRetweet |  |
| [**postCreateTweet**](PostApi.md#postcreatetweetoperation) | **POST** /graphql/{pathQueryId}/CreateTweet |  |
| [**postDeleteBookmark**](PostApi.md#postdeletebookmarkoperation) | **POST** /graphql/{pathQueryId}/DeleteBookmark |  |
| [**postDeleteRetweet**](PostApi.md#postdeleteretweetoperation) | **POST** /graphql/{pathQueryId}/DeleteRetweet |  |
| [**postDeleteTweet**](PostApi.md#postdeletetweetoperation) | **POST** /graphql/{pathQueryId}/DeleteTweet |  |
| [**postFavoriteTweet**](PostApi.md#postfavoritetweetoperation) | **POST** /graphql/{pathQueryId}/FavoriteTweet |  |
| [**postUnfavoriteTweet**](PostApi.md#postunfavoritetweetoperation) | **POST** /graphql/{pathQueryId}/UnfavoriteTweet |  |



## postCreateBookmark

> CreateBookmarkResponse postCreateBookmark(pathQueryId, postCreateBookmarkRequest)



create Bookmark

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostCreateBookmarkOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: aoDbu3RHznuiSkQ9aNM67Q,
    // PostCreateBookmarkRequest | body
    postCreateBookmarkRequest: ...,
  } satisfies PostCreateBookmarkOperationRequest;

  try {
    const data = await api.postCreateBookmark(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;aoDbu3RHznuiSkQ9aNM67Q&#39;`] |
| **postCreateBookmarkRequest** | [PostCreateBookmarkRequest](PostCreateBookmarkRequest.md) | body | |

### Return type

[**CreateBookmarkResponse**](CreateBookmarkResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postCreateRetweet

> CreateRetweetResponse postCreateRetweet(pathQueryId, postCreateRetweetRequest)



create Retweet

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostCreateRetweetOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: mbRO74GrOvSfRcJnlMapnQ,
    // PostCreateRetweetRequest | body
    postCreateRetweetRequest: ...,
  } satisfies PostCreateRetweetOperationRequest;

  try {
    const data = await api.postCreateRetweet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;mbRO74GrOvSfRcJnlMapnQ&#39;`] |
| **postCreateRetweetRequest** | [PostCreateRetweetRequest](PostCreateRetweetRequest.md) | body | |

### Return type

[**CreateRetweetResponse**](CreateRetweetResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postCreateTweet

> CreateTweetResponse postCreateTweet(pathQueryId, postCreateTweetRequest)



create Tweet

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostCreateTweetOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: wR5Z_lEibLvkew3tF9w-Sg,
    // PostCreateTweetRequest | body
    postCreateTweetRequest: ...,
  } satisfies PostCreateTweetOperationRequest;

  try {
    const data = await api.postCreateTweet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;wR5Z_lEibLvkew3tF9w-Sg&#39;`] |
| **postCreateTweetRequest** | [PostCreateTweetRequest](PostCreateTweetRequest.md) | body | |

### Return type

[**CreateTweetResponse**](CreateTweetResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postDeleteBookmark

> DeleteBookmarkResponse postDeleteBookmark(pathQueryId, postDeleteBookmarkRequest)



delete Bookmark

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostDeleteBookmarkOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: Wlmlj2-xzyS1GN3a6cj-mQ,
    // PostDeleteBookmarkRequest | body
    postDeleteBookmarkRequest: ...,
  } satisfies PostDeleteBookmarkOperationRequest;

  try {
    const data = await api.postDeleteBookmark(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;Wlmlj2-xzyS1GN3a6cj-mQ&#39;`] |
| **postDeleteBookmarkRequest** | [PostDeleteBookmarkRequest](PostDeleteBookmarkRequest.md) | body | |

### Return type

[**DeleteBookmarkResponse**](DeleteBookmarkResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postDeleteRetweet

> DeleteRetweetResponse postDeleteRetweet(pathQueryId, postDeleteRetweetRequest)



delete Retweet

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostDeleteRetweetOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: ZyZigVsNiFO6v1dEks1eWg,
    // PostDeleteRetweetRequest | body
    postDeleteRetweetRequest: ...,
  } satisfies PostDeleteRetweetOperationRequest;

  try {
    const data = await api.postDeleteRetweet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;ZyZigVsNiFO6v1dEks1eWg&#39;`] |
| **postDeleteRetweetRequest** | [PostDeleteRetweetRequest](PostDeleteRetweetRequest.md) | body | |

### Return type

[**DeleteRetweetResponse**](DeleteRetweetResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postDeleteTweet

> DeleteTweetResponse postDeleteTweet(pathQueryId, postDeleteTweetRequest)



delete Retweet

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostDeleteTweetOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: nxpZCY2K-I6QoFHAHeojFQ,
    // PostDeleteTweetRequest | body
    postDeleteTweetRequest: ...,
  } satisfies PostDeleteTweetOperationRequest;

  try {
    const data = await api.postDeleteTweet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;nxpZCY2K-I6QoFHAHeojFQ&#39;`] |
| **postDeleteTweetRequest** | [PostDeleteTweetRequest](PostDeleteTweetRequest.md) | body | |

### Return type

[**DeleteTweetResponse**](DeleteTweetResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postFavoriteTweet

> FavoriteTweetResponse postFavoriteTweet(pathQueryId, postFavoriteTweetRequest)



favorite Tweet

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostFavoriteTweetOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: lI07N6Otwv1PhnEgXILM7A,
    // PostFavoriteTweetRequest | body
    postFavoriteTweetRequest: ...,
  } satisfies PostFavoriteTweetOperationRequest;

  try {
    const data = await api.postFavoriteTweet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;lI07N6Otwv1PhnEgXILM7A&#39;`] |
| **postFavoriteTweetRequest** | [PostFavoriteTweetRequest](PostFavoriteTweetRequest.md) | body | |

### Return type

[**FavoriteTweetResponse**](FavoriteTweetResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## postUnfavoriteTweet

> UnfavoriteTweetResponse postUnfavoriteTweet(pathQueryId, postUnfavoriteTweetRequest)



unfavorite Tweet

### Example

```ts
import {
  Configuration,
  PostApi,
} from 'twitter-openapi-typescript-generated';
import type { PostUnfavoriteTweetOperationRequest } from 'twitter-openapi-typescript-generated';

async function example() {
  console.log("🚀 Testing twitter-openapi-typescript-generated SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: Accept
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Priority
    apiKey: "YOUR API KEY",
    // To configure API key authorization: Referer
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchDest
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaPlatform
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchMode
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CsrfToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientUuid
    apiKey: "YOUR API KEY",
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
    // To configure API key authorization: GuestToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUa
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieGt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ClientTransactionId
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ActiveUser
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieCt0
    apiKey: "YOUR API KEY",
    // To configure API key authorization: UserAgent
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptLanguage
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecFetchSite
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AuthType
    apiKey: "YOUR API KEY",
    // To configure API key authorization: CookieAuthToken
    apiKey: "YOUR API KEY",
    // To configure API key authorization: SecChUaMobile
    apiKey: "YOUR API KEY",
    // To configure API key authorization: AcceptEncoding
    apiKey: "YOUR API KEY",
  });
  const api = new PostApi(config);

  const body = {
    // string
    pathQueryId: ZYKSe-w7KEslx3JhSIk5LA,
    // PostUnfavoriteTweetRequest | body
    postUnfavoriteTweetRequest: ...,
  } satisfies PostUnfavoriteTweetOperationRequest;

  try {
    const data = await api.postUnfavoriteTweet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **pathQueryId** | `string` |  | [Defaults to `&#39;ZYKSe-w7KEslx3JhSIk5LA&#39;`] |
| **postUnfavoriteTweetRequest** | [PostUnfavoriteTweetRequest](PostUnfavoriteTweetRequest.md) | body | |

### Return type

[**UnfavoriteTweetResponse**](UnfavoriteTweetResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

