# BirdwatchApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBirdwatchFetchAliasSelfSelectStatus**](BirdwatchApi.md#getbirdwatchfetchaliasselfselectstatus) | **GET** /graphql/{pathQueryId}/BirdwatchFetchAliasSelfSelectStatus |  |
| [**getBirdwatchFetchAuthenticatedUserProfile**](BirdwatchApi.md#getbirdwatchfetchauthenticateduserprofile) | **GET** /graphql/{pathQueryId}/BirdwatchFetchAuthenticatedUserProfile |  |
| [**getBirdwatchFetchBirdwatchProfile**](BirdwatchApi.md#getbirdwatchfetchbirdwatchprofile) | **GET** /graphql/{pathQueryId}/BirdwatchFetchBirdwatchProfile |  |
| [**getBirdwatchFetchGlobalTimeline**](BirdwatchApi.md#getbirdwatchfetchglobaltimeline) | **GET** /graphql/{pathQueryId}/BirdwatchFetchGlobalTimeline |  |
| [**getBirdwatchFetchPublicData**](BirdwatchApi.md#getbirdwatchfetchpublicdata) | **GET** /graphql/{pathQueryId}/BirdwatchFetchPublicData |  |



## getBirdwatchFetchAliasSelfSelectStatus

> BirdwatchFetchAliasSelfSelectStatusResponse getBirdwatchFetchAliasSelfSelectStatus(pathQueryId, variables)



whether the account can pick / has picked a Community Notes alias

### Example

```ts
import {
  Configuration,
  BirdwatchApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBirdwatchFetchAliasSelfSelectStatusRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new BirdwatchApi(config);

  const body = {
    // string
    pathQueryId: LUEdtkcpBlGktUtms4BvwA,
    // string
    variables: {},
  } satisfies GetBirdwatchFetchAliasSelfSelectStatusRequest;

  try {
    const data = await api.getBirdwatchFetchAliasSelfSelectStatus(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;LUEdtkcpBlGktUtms4BvwA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**BirdwatchFetchAliasSelfSelectStatusResponse**](BirdwatchFetchAliasSelfSelectStatusResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBirdwatchFetchAuthenticatedUserProfile

> BirdwatchFetchAuthenticatedUserProfileResponse getBirdwatchFetchAuthenticatedUserProfile(pathQueryId, features, variables)



the account\&#39;s Community Notes profile

### Example

```ts
import {
  Configuration,
  BirdwatchApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBirdwatchFetchAuthenticatedUserProfileRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new BirdwatchApi(config);

  const body = {
    // string
    pathQueryId: kD74-qBfrdRT5rO9YOl57g,
    // string
    features: {"responsive_web_birdwatch_top_contributor_enabled": true, "responsive_web_birdwatch_mobile_nav_setting_enabled": false, "responsive_web_birdwatch_note_limit_enabled": true},
    // string
    variables: {},
  } satisfies GetBirdwatchFetchAuthenticatedUserProfileRequest;

  try {
    const data = await api.getBirdwatchFetchAuthenticatedUserProfile(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;kD74-qBfrdRT5rO9YOl57g&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;responsive_web_birdwatch_top_contributor_enabled\&quot;: true, \&quot;responsive_web_birdwatch_mobile_nav_setting_enabled\&quot;: false, \&quot;responsive_web_birdwatch_note_limit_enabled\&quot;: true}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**BirdwatchFetchAuthenticatedUserProfileResponse**](BirdwatchFetchAuthenticatedUserProfileResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBirdwatchFetchBirdwatchProfile

> BirdwatchFetchBirdwatchProfileResponse getBirdwatchFetchBirdwatchProfile(pathQueryId, features, variables)



a Community Notes profile by alias

### Example

```ts
import {
  Configuration,
  BirdwatchApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBirdwatchFetchBirdwatchProfileRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new BirdwatchApi(config);

  const body = {
    // string
    pathQueryId: id9iGfEQF47W1kvRBHUmRQ,
    // string
    features: {"responsive_web_birdwatch_top_contributor_enabled": true},
    // string
    variables: {"alias": "me"},
  } satisfies GetBirdwatchFetchBirdwatchProfileRequest;

  try {
    const data = await api.getBirdwatchFetchBirdwatchProfile(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;id9iGfEQF47W1kvRBHUmRQ&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;responsive_web_birdwatch_top_contributor_enabled\&quot;: true}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;alias\&quot;: \&quot;me\&quot;}&#39;`] |

### Return type

[**BirdwatchFetchBirdwatchProfileResponse**](BirdwatchFetchBirdwatchProfileResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBirdwatchFetchGlobalTimeline

> BirdwatchFetchGlobalTimelineResponse getBirdwatchFetchGlobalTimeline(pathQueryId, features, variables)



the Community Notes home page (segmented timelines)

### Example

```ts
import {
  Configuration,
  BirdwatchApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBirdwatchFetchGlobalTimelineRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new BirdwatchApi(config);

  const body = {
    // string
    pathQueryId: FAmIZKHUZkuRclhoxxRAuw,
    // string
    features: {"rweb_video_screen_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "responsive_web_graphql_timeline_navigation_enabled": true, "rweb_cashtags_enabled": true, "creator_subscriptions_tweet_preview_api_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    variables: {},
  } satisfies GetBirdwatchFetchGlobalTimelineRequest;

  try {
    const data = await api.getBirdwatchFetchGlobalTimeline(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;FAmIZKHUZkuRclhoxxRAuw&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**BirdwatchFetchGlobalTimelineResponse**](BirdwatchFetchGlobalTimelineResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getBirdwatchFetchPublicData

> BirdwatchFetchPublicDataResponse getBirdwatchFetchPublicData(pathQueryId, features, variables)



download urls of the latest Community Notes public data files

### Example

```ts
import {
  Configuration,
  BirdwatchApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBirdwatchFetchPublicDataRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new BirdwatchApi(config);

  const body = {
    // string
    pathQueryId: T4Qdev0aBeS9tK9v4TkgQg,
    // string
    features: {"responsive_web_birdwatch_note_request_download_enabled": true},
    // string
    variables: {},
  } satisfies GetBirdwatchFetchPublicDataRequest;

  try {
    const data = await api.getBirdwatchFetchPublicData(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;T4Qdev0aBeS9tK9v4TkgQg&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;responsive_web_birdwatch_note_request_download_enabled\&quot;: true}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**BirdwatchFetchPublicDataResponse**](BirdwatchFetchPublicDataResponse.md)

### Authorization

[Accept](../README.md#Accept), [ClientLanguage](../README.md#ClientLanguage), [Priority](../README.md#Priority), [Referer](../README.md#Referer), [SecFetchDest](../README.md#SecFetchDest), [SecChUaPlatform](../README.md#SecChUaPlatform), [SecFetchMode](../README.md#SecFetchMode), [CsrfToken](../README.md#CsrfToken), [ClientUuid](../README.md#ClientUuid), [BearerAuth](../README.md#BearerAuth), [GuestToken](../README.md#GuestToken), [SecChUa](../README.md#SecChUa), [CookieGt0](../README.md#CookieGt0), [ClientTransactionId](../README.md#ClientTransactionId), [ActiveUser](../README.md#ActiveUser), [CookieCt0](../README.md#CookieCt0), [UserAgent](../README.md#UserAgent), [AcceptLanguage](../README.md#AcceptLanguage), [SecFetchSite](../README.md#SecFetchSite), [AuthType](../README.md#AuthType), [CookieAuthToken](../README.md#CookieAuthToken), [SecChUaMobile](../README.md#SecChUaMobile), [AcceptEncoding](../README.md#AcceptEncoding)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful operation |  * x-connection-hash -  <br>  * x-rate-limit-limit -  <br>  * x-rate-limit-remaining -  <br>  * x-rate-limit-reset -  <br>  * x-response-time -  <br>  * x-tfe-preserve-body -  <br>  * x-transaction-id -  <br>  * x-twitter-response-tags -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

