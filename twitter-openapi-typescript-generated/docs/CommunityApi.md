# CommunityApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCommunitiesFetchOneQuery**](CommunityApi.md#getcommunitiesfetchonequery) | **GET** /graphql/{pathQueryId}/CommunitiesFetchOneQuery |  |
| [**getCommunitiesSearchQuery**](CommunityApi.md#getcommunitiessearchquery) | **GET** /graphql/{pathQueryId}/CommunitiesSearchQuery |  |
| [**getCommunityQuery**](CommunityApi.md#getcommunityquery) | **GET** /graphql/{pathQueryId}/CommunityQuery |  |
| [**getGlobalCommunitiesLatestPostSearchTimeline**](CommunityApi.md#getglobalcommunitieslatestpostsearchtimeline) | **GET** /graphql/{pathQueryId}/GlobalCommunitiesLatestPostSearchTimeline |  |
| [**getGlobalCommunitiesPostSearchTimeline**](CommunityApi.md#getglobalcommunitiespostsearchtimeline) | **GET** /graphql/{pathQueryId}/GlobalCommunitiesPostSearchTimeline |  |
| [**getTopicCarouselQuery**](CommunityApi.md#gettopiccarouselquery) | **GET** /graphql/{pathQueryId}/TopicCarouselQuery |  |



## getCommunitiesFetchOneQuery

> CommunitiesFetchOneQueryResponse getCommunitiesFetchOneQuery(pathQueryId, features, variables)



a community by id (community page)

### Example

```ts
import {
  Configuration,
  CommunityApi,
} from 'twitter-openapi-typescript-generated';
import type { GetCommunitiesFetchOneQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new CommunityApi(config);

  const body = {
    // string
    pathQueryId: WP5rIK_ORn3JzCDlDzC1Cg,
    // string
    features: {"profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false},
    // string
    variables: {"communityId": "1738874426798870555", "withDmMuting": false, "withGrokTranslatedBio": false, "includeProfessionalCategory": true},
  } satisfies GetCommunitiesFetchOneQueryRequest;

  try {
    const data = await api.getCommunitiesFetchOneQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;WP5rIK_ORn3JzCDlDzC1Cg&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;communityId\&quot;: \&quot;1738874426798870555\&quot;, \&quot;withDmMuting\&quot;: false, \&quot;withGrokTranslatedBio\&quot;: false, \&quot;includeProfessionalCategory\&quot;: true}&#39;`] |

### Return type

[**CommunitiesFetchOneQueryResponse**](CommunitiesFetchOneQueryResponse.md)

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


## getCommunitiesSearchQuery

> CommunitiesSearchQueryResponse getCommunitiesSearchQuery(pathQueryId, variables)



search communities. cursor:[slice_info.next_cursor]

### Example

```ts
import {
  Configuration,
  CommunityApi,
} from 'twitter-openapi-typescript-generated';
import type { GetCommunitiesSearchQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new CommunityApi(config);

  const body = {
    // string
    pathQueryId: HKgnJbw10TZW41Na4ToaSw,
    // string
    variables: {"query": "test", "cursor": null},
  } satisfies GetCommunitiesSearchQueryRequest;

  try {
    const data = await api.getCommunitiesSearchQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;HKgnJbw10TZW41Na4ToaSw&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;query\&quot;: \&quot;test\&quot;, \&quot;cursor\&quot;: null}&#39;`] |

### Return type

[**CommunitiesSearchQueryResponse**](CommunitiesSearchQueryResponse.md)

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


## getCommunityQuery

> CommunityQueryResponse getCommunityQuery(pathQueryId, features, variables)



a community by id (community settings and moderation pages)

### Example

```ts
import {
  Configuration,
  CommunityApi,
} from 'twitter-openapi-typescript-generated';
import type { GetCommunityQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new CommunityApi(config);

  const body = {
    // string
    pathQueryId: -ElI1vg3dYbttVMhBhGdLw,
    // string
    features: {"c9s_list_members_action_api_enabled": false, "c9s_superc9s_indication_enabled": false},
    // string
    variables: {"communityId": "1493446837214187523"},
  } satisfies GetCommunityQueryRequest;

  try {
    const data = await api.getCommunityQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;-ElI1vg3dYbttVMhBhGdLw&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;c9s_list_members_action_api_enabled\&quot;: false, \&quot;c9s_superc9s_indication_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;communityId\&quot;: \&quot;1493446837214187523\&quot;}&#39;`] |

### Return type

[**CommunityQueryResponse**](CommunityQueryResponse.md)

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


## getGlobalCommunitiesLatestPostSearchTimeline

> GlobalCommunitiesLatestPostSearchTimelineResponse getGlobalCommunitiesLatestPostSearchTimeline(pathQueryId, features, variables)



search posts across communities (Latest)

### Example

```ts
import {
  Configuration,
  CommunityApi,
} from 'twitter-openapi-typescript-generated';
import type { GetGlobalCommunitiesLatestPostSearchTimelineRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new CommunityApi(config);

  const body = {
    // string
    pathQueryId: XtgLdT7L-zyrDDKH2dO0lw,
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    variables: {"rawQuery": "test", "count": 20},
  } satisfies GetGlobalCommunitiesLatestPostSearchTimelineRequest;

  try {
    const data = await api.getGlobalCommunitiesLatestPostSearchTimeline(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;XtgLdT7L-zyrDDKH2dO0lw&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;rawQuery\&quot;: \&quot;test\&quot;, \&quot;count\&quot;: 20}&#39;`] |

### Return type

[**GlobalCommunitiesLatestPostSearchTimelineResponse**](GlobalCommunitiesLatestPostSearchTimelineResponse.md)

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


## getGlobalCommunitiesPostSearchTimeline

> GlobalCommunitiesPostSearchTimelineResponse getGlobalCommunitiesPostSearchTimeline(pathQueryId, features, variables)



search posts across communities (Top)

### Example

```ts
import {
  Configuration,
  CommunityApi,
} from 'twitter-openapi-typescript-generated';
import type { GetGlobalCommunitiesPostSearchTimelineRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new CommunityApi(config);

  const body = {
    // string
    pathQueryId: z3OlkLD0_MFgCvUXcN1XeA,
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    variables: {"rawQuery": "test", "count": 20},
  } satisfies GetGlobalCommunitiesPostSearchTimelineRequest;

  try {
    const data = await api.getGlobalCommunitiesPostSearchTimeline(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;z3OlkLD0_MFgCvUXcN1XeA&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;rawQuery\&quot;: \&quot;test\&quot;, \&quot;count\&quot;: 20}&#39;`] |

### Return type

[**GlobalCommunitiesPostSearchTimelineResponse**](GlobalCommunitiesPostSearchTimelineResponse.md)

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


## getTopicCarouselQuery

> TopicCarouselQueryResponse getTopicCarouselQuery(pathQueryId, variables)



community topics and subtopics

### Example

```ts
import {
  Configuration,
  CommunityApi,
} from 'twitter-openapi-typescript-generated';
import type { GetTopicCarouselQueryRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new CommunityApi(config);

  const body = {
    // string
    pathQueryId: byVjaS0CUtBqAao_lhZFgA,
    // string
    variables: {},
  } satisfies GetTopicCarouselQueryRequest;

  try {
    const data = await api.getTopicCarouselQuery(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;byVjaS0CUtBqAao_lhZFgA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{}&#39;`] |

### Return type

[**TopicCarouselQueryResponse**](TopicCarouselQueryResponse.md)

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

