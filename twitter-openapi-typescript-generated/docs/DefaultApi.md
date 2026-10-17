# DefaultApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAudioSpaceById**](DefaultApi.md#getaudiospacebyid) | **GET** /graphql/{pathQueryId}/AudioSpaceById |  |
| [**getAuthenticatePeriscope**](DefaultApi.md#getauthenticateperiscope) | **GET** /graphql/{pathQueryId}/AuthenticatePeriscope |  |
| [**getBroadcastQuery**](DefaultApi.md#getbroadcastquery) | **GET** /graphql/{pathQueryId}/BroadcastQuery |  |
| [**getCreatorStudioTabBarItemQuery**](DefaultApi.md#getcreatorstudiotabbaritemquery) | **GET** /graphql/{pathQueryId}/CreatorStudioTabBarItemQuery |  |
| [**getDataSaverMode**](DefaultApi.md#getdatasavermode) | **GET** /graphql/{pathQueryId}/DataSaverMode |  |
| [**getGrokAccountJwtQuery**](DefaultApi.md#getgrokaccountjwtquery) | **GET** /graphql/{pathQueryId}/grokAccountJwtQuery |  |
| [**getGrokHome**](DefaultApi.md#getgrokhome) | **GET** /graphql/{pathQueryId}/GrokHome |  |
| [**getPinnedTimelines**](DefaultApi.md#getpinnedtimelines) | **GET** /graphql/{pathQueryId}/PinnedTimelines |  |
| [**getProfileSpotlightsQuery**](DefaultApi.md#getprofilespotlightsquery) | **GET** /graphql/{pathQueryId}/ProfileSpotlightsQuery |  |
| [**getTweetResultByRestId**](DefaultApi.md#gettweetresultbyrestid) | **GET** /graphql/{pathQueryId}/TweetResultByRestId |  |
| [**getUseStoryTopicQuery**](DefaultApi.md#getusestorytopicquery) | **GET** /graphql/{pathQueryId}/useStoryTopicQuery |  |



## getAudioSpaceById

> AudioSpaceResponse getAudioSpaceById(pathQueryId, variables, features)



a Space by id: metadata, participants and the announcing post

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetAudioSpaceByIdRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: sSuYIbdpe1f2v9AtD-sYeQ,
    // string
    variables: {"id": "1qxoNYAlYMXJv", "isMetatagsQuery": true, "withReplays": true, "withListeners": true},
    // string
    features: {"spaces_2022_h2_spaces_communities": true, "spaces_2022_h2_clipping": true, "creator_subscriptions_tweet_preview_api_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "rweb_cashtags_enabled": true, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true},
  } satisfies GetAudioSpaceByIdRequest;

  try {
    const data = await api.getAudioSpaceById(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;sSuYIbdpe1f2v9AtD-sYeQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;id\&quot;: \&quot;1qxoNYAlYMXJv\&quot;, \&quot;isMetatagsQuery\&quot;: true, \&quot;withReplays\&quot;: true, \&quot;withListeners\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;spaces_2022_h2_spaces_communities\&quot;: true, \&quot;spaces_2022_h2_clipping\&quot;: true, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true}&#39;`] |

### Return type

[**AudioSpaceResponse**](AudioSpaceResponse.md)

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


## getAuthenticatePeriscope

> AuthenticatePeriscopeResponse getAuthenticatePeriscope(pathQueryId, variables)



a Periscope (live video) token for the account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetAuthenticatePeriscopeRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: r7VUmxbfqNkx7uwjgONSNw,
    // string
    variables: {},
  } satisfies GetAuthenticatePeriscopeRequest;

  try {
    const data = await api.getAuthenticatePeriscope(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;r7VUmxbfqNkx7uwjgONSNw&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**AuthenticatePeriscopeResponse**](AuthenticatePeriscopeResponse.md)

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


## getBroadcastQuery

> BroadcastResponse getBroadcastQuery(pathQueryId, variables, features)



a live video broadcast by id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBroadcastQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: NtEAlAR40O3S7Lf8s6XUTQ,
    // string
    variables: {"id": "1BRKjmPYymWxw"},
    // string
    features: {"creator_subscriptions_tweet_preview_api_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "rweb_cashtags_enabled": true, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true},
  } satisfies GetBroadcastQueryRequest;

  try {
    const data = await api.getBroadcastQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;NtEAlAR40O3S7Lf8s6XUTQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;id\&quot;: \&quot;1BRKjmPYymWxw\&quot;}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true}&#39;`] |

### Return type

[**BroadcastResponse**](BroadcastResponse.md)

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


## getCreatorStudioTabBarItemQuery

> CreatorStudioTabBarItemQueryResponse getCreatorStudioTabBarItemQuery(pathQueryId, variables)



audience rewards tasks shown in Creator Studio

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetCreatorStudioTabBarItemQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: 1KZj_GRTxmPaSrk8jIb1Yw,
    // string
    variables: {},
  } satisfies GetCreatorStudioTabBarItemQueryRequest;

  try {
    const data = await api.getCreatorStudioTabBarItemQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;1KZj_GRTxmPaSrk8jIb1Yw&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**CreatorStudioTabBarItemQueryResponse**](CreatorStudioTabBarItemQueryResponse.md)

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


## getDataSaverMode

> DataSaverModeResponse getDataSaverMode(pathQueryId, variables)



data saver setting of the account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetDataSaverModeRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: xF6sXnKJfS2AOylzxRjf6A,
    // string
    variables: {"device_id": "Windows/Chrome"},
  } satisfies GetDataSaverModeRequest;

  try {
    const data = await api.getDataSaverMode(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;xF6sXnKJfS2AOylzxRjf6A&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;device_id\&quot;: \&quot;Windows/Chrome\&quot;}&#39;`] |

### Return type

[**DataSaverModeResponse**](DataSaverModeResponse.md)

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


## getGrokAccountJwtQuery

> GrokAccountJwtResponse getGrokAccountJwtQuery(pathQueryId, variables)



whether the account is linked to a Grok account

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetGrokAccountJwtQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: DIW0leeI6-dvMzdOMJki4w,
    // string
    variables: {},
  } satisfies GetGrokAccountJwtQueryRequest;

  try {
    const data = await api.getGrokAccountJwtQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;DIW0leeI6-dvMzdOMJki4w&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**GrokAccountJwtResponse**](GrokAccountJwtResponse.md)

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


## getGrokHome

> GrokHomeResponse getGrokHome(pathQueryId, variables)



Grok home: model options, prompts and eligibility

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetGrokHomeRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: QAPGIKJVaPXYD-gO9kxc9w,
    // string
    variables: {},
  } satisfies GetGrokHomeRequest;

  try {
    const data = await api.getGrokHome(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;QAPGIKJVaPXYD-gO9kxc9w&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**GrokHomeResponse**](GrokHomeResponse.md)

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


## getPinnedTimelines

> PinnedTimelinesResponse getPinnedTimelines(pathQueryId, features, variables)



the account\&#39;s pinned timelines

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetPinnedTimelinesRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: 8J1r9u3VjUveEdTY4WUTwQ,
    // string
    features: {"profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "responsive_web_graphql_timeline_navigation_enabled": true},
    // string
    variables: {},
  } satisfies GetPinnedTimelinesRequest;

  try {
    const data = await api.getPinnedTimelines(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;8J1r9u3VjUveEdTY4WUTwQ&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**PinnedTimelinesResponse**](PinnedTimelinesResponse.md)

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


## getProfileSpotlightsQuery

> ProfileResponse getProfileSpotlightsQuery(pathQueryId, variables, features)



get user by screen name

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetProfileSpotlightsQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: mzoqrVGwk-YTSGME1dRfXQ,
    // string
    variables: {"screen_name": "elonmusk"},
    // string
    features: {},
  } satisfies GetProfileSpotlightsQueryRequest;

  try {
    const data = await api.getProfileSpotlightsQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;mzoqrVGwk-YTSGME1dRfXQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;screen_name\&quot;: \&quot;elonmusk\&quot;}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**ProfileResponse**](ProfileResponse.md)

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


## getTweetResultByRestId

> TweetResultByRestIdResponse getTweetResultByRestId(pathQueryId, variables, features, fieldToggles)



get TweetResultByRestId

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetTweetResultByRestIdRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: xZfFqfOmKQu_OXekGI59mg,
    // string
    variables: {"tweetId": "1349129669258448897", "withCommunity": false, "includePromotedContent": false, "withVoice": false, "withBirdwatchNotes": true},
    // string
    features: {"creator_subscriptions_tweet_preview_api_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "rweb_cashtags_enabled": true, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true},
    // string
    fieldToggles: {"withArticleRichContentState": true, "withArticlePlainText": false, "withArticleSummaryText": true, "withArticleVoiceOver": true, "withPayments": false},
  } satisfies GetTweetResultByRestIdRequest;

  try {
    const data = await api.getTweetResultByRestId(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;xZfFqfOmKQu_OXekGI59mg&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;tweetId\&quot;: \&quot;1349129669258448897\&quot;, \&quot;withCommunity\&quot;: false, \&quot;includePromotedContent\&quot;: false, \&quot;withVoice\&quot;: false, \&quot;withBirdwatchNotes\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true}&#39;`] |
| **fieldToggles** | `string` |  | [Defaults to `&#39;{\&quot;withArticleRichContentState\&quot;: true, \&quot;withArticlePlainText\&quot;: false, \&quot;withArticleSummaryText\&quot;: true, \&quot;withArticleVoiceOver\&quot;: true, \&quot;withPayments\&quot;: false}&#39;`] |

### Return type

[**TweetResultByRestIdResponse**](TweetResultByRestIdResponse.md)

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


## getUseStoryTopicQuery

> StoryTopicResponse getUseStoryTopicQuery(pathQueryId, variables)



AI-written stories of an explore topic (rest_id: For You)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from 'twitter-openapi-typescript-generated';
import type { GetUseStoryTopicQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new DefaultApi(config);

  const body = {
    // string
    pathQueryId: I3V_Tt32aTZdw7cBdKUJbg,
    // string
    variables: {"rest_id": "For You", "limit": 3},
  } satisfies GetUseStoryTopicQueryRequest;

  try {
    const data = await api.getUseStoryTopicQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;I3V_Tt32aTZdw7cBdKUJbg&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;rest_id\&quot;: \&quot;For You\&quot;, \&quot;limit\&quot;: 3}&#39;`] |

### Return type

[**StoryTopicResponse**](StoryTopicResponse.md)

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

