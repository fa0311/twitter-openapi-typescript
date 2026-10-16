# UserListApi

All URIs are relative to *https://x.com/i/api*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getBlueVerifiedFollowers**](UserListApi.md#getblueverifiedfollowers) | **GET** /graphql/{pathQueryId}/BlueVerifiedFollowers |  |
| [**getCombinedLists**](UserListApi.md#getcombinedlists) | **GET** /graphql/{pathQueryId}/CombinedLists |  |
| [**getFavoriters**](UserListApi.md#getfavoriters) | **GET** /graphql/{pathQueryId}/Favoriters |  |
| [**getFollowers**](UserListApi.md#getfollowers) | **GET** /graphql/{pathQueryId}/Followers |  |
| [**getFollowersYouKnow**](UserListApi.md#getfollowersyouknow) | **GET** /graphql/{pathQueryId}/FollowersYouKnow |  |
| [**getFollowing**](UserListApi.md#getfollowing) | **GET** /graphql/{pathQueryId}/Following |  |
| [**getListByRestId**](UserListApi.md#getlistbyrestid) | **GET** /graphql/{pathQueryId}/ListByRestId |  |
| [**getListCreationRecommendedUsers**](UserListApi.md#getlistcreationrecommendedusers) | **GET** /graphql/{pathQueryId}/ListCreationRecommendedUsers |  |
| [**getListEditRecommendedUsers**](UserListApi.md#getlisteditrecommendedusers) | **GET** /graphql/{pathQueryId}/ListEditRecommendedUsers |  |
| [**getListMembers**](UserListApi.md#getlistmembers) | **GET** /graphql/{pathQueryId}/ListMembers |  |
| [**getListOwnerships**](UserListApi.md#getlistownerships) | **GET** /graphql/{pathQueryId}/ListOwnerships |  |
| [**getListSearchTimeline**](UserListApi.md#getlistsearchtimeline) | **GET** /graphql/{pathQueryId}/ListSearchTimeline |  |
| [**getListSubscribers**](UserListApi.md#getlistsubscribers) | **GET** /graphql/{pathQueryId}/ListSubscribers |  |
| [**getListsManagementPageTimeline**](UserListApi.md#getlistsmanagementpagetimeline) | **GET** /graphql/{pathQueryId}/ListsManagementPageTimeline |  |
| [**getRetweeters**](UserListApi.md#getretweeters) | **GET** /graphql/{pathQueryId}/Retweeters |  |



## getBlueVerifiedFollowers

> FollowResponse getBlueVerifiedFollowers(pathQueryId, variables, features)



get blue verified followers

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetBlueVerifiedFollowersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: 1fjk4lmK45a-giaZTubqbg,
    // string
    variables: {"userId": "44196397", "count": 20, "includePromotedContent": false, "withGrokTranslatedBio": true},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetBlueVerifiedFollowersRequest;

  try {
    const data = await api.getBlueVerifiedFollowers(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;1fjk4lmK45a-giaZTubqbg&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: false, \&quot;withGrokTranslatedBio\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**FollowResponse**](FollowResponse.md)

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


## getCombinedLists

> UserTweetsResponse getCombinedLists(pathQueryId, features, variables)



lists a user owns or follows

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetCombinedListsRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: HoclSXITeTmRfg1TF3G-RQ,
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    variables: {"userId": "44196397", "count": 100},
  } satisfies GetCombinedListsRequest;

  try {
    const data = await api.getCombinedLists(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;HoclSXITeTmRfg1TF3G-RQ&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 100}&#39;`] |

### Return type

[**UserTweetsResponse**](UserTweetsResponse.md)

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


## getFavoriters

> TweetFavoritersResponse getFavoriters(pathQueryId, variables, features)



get tweet favoriters

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetFavoritersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: q9xVNj4CiI9oHN3cUmFrgA,
    // string
    variables: {"tweetId": "1349129669258448897", "count": 20, "includePromotedContent": true, "enableRanking": true},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetFavoritersRequest;

  try {
    const data = await api.getFavoriters(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;q9xVNj4CiI9oHN3cUmFrgA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;tweetId\&quot;: \&quot;1349129669258448897\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: true, \&quot;enableRanking\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**TweetFavoritersResponse**](TweetFavoritersResponse.md)

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


## getFollowers

> FollowResponse getFollowers(pathQueryId, variables, features)



get user list of followers

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetFollowersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: stpzFPAIZ2qv8s2lRzPOnQ,
    // string
    variables: {"userId": "44196397", "count": 20, "includePromotedContent": false, "withGrokTranslatedBio": true},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetFollowersRequest;

  try {
    const data = await api.getFollowers(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;stpzFPAIZ2qv8s2lRzPOnQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: false, \&quot;withGrokTranslatedBio\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**FollowResponse**](FollowResponse.md)

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


## getFollowersYouKnow

> FollowResponse getFollowersYouKnow(pathQueryId, variables, features)



get followers you know

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetFollowersYouKnowRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: 479-dF4nq3sH1uu0n4Wdxg,
    // string
    variables: {"userId": "44196397", "count": 20, "includePromotedContent": false, "withGrokTranslatedBio": true},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetFollowersYouKnowRequest;

  try {
    const data = await api.getFollowersYouKnow(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;479-dF4nq3sH1uu0n4Wdxg&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: false, \&quot;withGrokTranslatedBio\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**FollowResponse**](FollowResponse.md)

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


## getFollowing

> FollowResponse getFollowing(pathQueryId, variables, features)



get user list of following

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetFollowingRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: ath0FIohYC_c3Hj3SsxoCg,
    // string
    variables: {"userId": "44196397", "count": 20, "includePromotedContent": false, "withGrokTranslatedBio": true},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetFollowingRequest;

  try {
    const data = await api.getFollowing(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;ath0FIohYC_c3Hj3SsxoCg&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: false, \&quot;withGrokTranslatedBio\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**FollowResponse**](FollowResponse.md)

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


## getListByRestId

> ListResponse getListByRestId(pathQueryId, variables, features)



get list

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListByRestIdRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: T-YE5ZY0cd0UVtWu8AP04Q,
    // string
    variables: {"listId": "1141162794290520064"},
    // string
    features: {"profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "responsive_web_graphql_timeline_navigation_enabled": true},
  } satisfies GetListByRestIdRequest;

  try {
    const data = await api.getListByRestId(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;T-YE5ZY0cd0UVtWu8AP04Q&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;listId\&quot;: \&quot;1141162794290520064\&quot;}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true}&#39;`] |

### Return type

[**ListResponse**](ListResponse.md)

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


## getListCreationRecommendedUsers

> ListRecommendedUsersResponse getListCreationRecommendedUsers(pathQueryId, variables, features)



get recommended members while creating a list

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListCreationRecommendedUsersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: NCdb-TPGFi_6Tpvs3WmAFg,
    // string
    variables: {"listId": "1141162794290520064", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetListCreationRecommendedUsersRequest;

  try {
    const data = await api.getListCreationRecommendedUsers(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;NCdb-TPGFi_6Tpvs3WmAFg&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;listId\&quot;: \&quot;1141162794290520064\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**ListRecommendedUsersResponse**](ListRecommendedUsersResponse.md)

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


## getListEditRecommendedUsers

> ListRecommendedUsersResponse getListEditRecommendedUsers(pathQueryId, variables, features)



get recommended members while editing a list

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListEditRecommendedUsersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: 8VcpjisNYiVaGOemxfDJ3A,
    // string
    variables: {"listId": "1141162794290520064", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetListEditRecommendedUsersRequest;

  try {
    const data = await api.getListEditRecommendedUsers(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;8VcpjisNYiVaGOemxfDJ3A&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;listId\&quot;: \&quot;1141162794290520064\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**ListRecommendedUsersResponse**](ListRecommendedUsersResponse.md)

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


## getListMembers

> ListMembersResponse getListMembers(pathQueryId, variables, features)



get list members

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListMembersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: yQ_0-CTekcCY2oFRTskpSw,
    // string
    variables: {"listId": "1141162794290520064", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetListMembersRequest;

  try {
    const data = await api.getListMembers(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;yQ_0-CTekcCY2oFRTskpSw&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;listId\&quot;: \&quot;1141162794290520064\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**ListMembersResponse**](ListMembersResponse.md)

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


## getListOwnerships

> UserTweetsResponse getListOwnerships(pathQueryId, variables, features)



get the lists a user owns (add/remove from Lists dialog)

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListOwnershipsRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: f1u5dCI80zd4-YFYSkVCVQ,
    // string
    variables: {"userId": "1787148517779406848", "isListMemberTargetUserId": "44196397", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetListOwnershipsRequest;

  try {
    const data = await api.getListOwnerships(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;f1u5dCI80zd4-YFYSkVCVQ&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;userId\&quot;: \&quot;1787148517779406848\&quot;, \&quot;isListMemberTargetUserId\&quot;: \&quot;44196397\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**UserTweetsResponse**](UserTweetsResponse.md)

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


## getListSearchTimeline

> ListSearchTimelineResponse getListSearchTimeline(pathQueryId, features, variables)



search lists

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListSearchTimelineRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: 9kXBVnbdRxymiEvafaXCQA,
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    variables: {"rawQuery": "test", "count": 20},
  } satisfies GetListSearchTimelineRequest;

  try {
    const data = await api.getListSearchTimeline(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;9kXBVnbdRxymiEvafaXCQA&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;rawQuery\&quot;: \&quot;test\&quot;, \&quot;count\&quot;: 20}&#39;`] |

### Return type

[**ListSearchTimelineResponse**](ListSearchTimelineResponse.md)

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


## getListSubscribers

> ListSubscribersResponse getListSubscribers(pathQueryId, variables, features)



get list subscribers (followers)

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListSubscribersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: n52ZU-g4FEWzgdPkv1UC2g,
    // string
    variables: {"listId": "1141162794290520064", "count": 20},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetListSubscribersRequest;

  try {
    const data = await api.getListSubscribers(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;n52ZU-g4FEWzgdPkv1UC2g&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;listId\&quot;: \&quot;1141162794290520064\&quot;, \&quot;count\&quot;: 20}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**ListSubscribersResponse**](ListSubscribersResponse.md)

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


## getListsManagementPageTimeline

> ListsManagementPageTimelineResponse getListsManagementPageTimeline(pathQueryId, features, variables)



the account\&#39;s lists management page

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetListsManagementPageTimelineRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: FMDRDwDKo_nl4kT_AKWOCg,
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
    // string
    variables: {"count": 100},
  } satisfies GetListsManagementPageTimelineRequest;

  try {
    const data = await api.getListsManagementPageTimeline(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;FMDRDwDKo_nl4kT_AKWOCg&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;count\&quot;: 100}&#39;`] |

### Return type

[**ListsManagementPageTimelineResponse**](ListsManagementPageTimelineResponse.md)

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


## getRetweeters

> TweetRetweetersResponse getRetweeters(pathQueryId, variables, features)



get tweet retweeters

### Example

```ts
import {
  Configuration,
  UserListApi,
} from 'twitter-openapi-typescript-generated';
import type { GetRetweetersRequest } from 'twitter-openapi-typescript-generated';

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
  const api = new UserListApi(config);

  const body = {
    // string
    pathQueryId: 9gzvtg9l4CmhrfO6KMgKCA,
    // string
    variables: {"tweetId": "1349129669258448897", "count": 20, "includePromotedContent": true, "enableRanking": true},
    // string
    features: {"rweb_video_screen_enabled": false, "rweb_cashtags_enabled": true, "profile_label_improvements_pcf_label_in_post_enabled": true, "responsive_web_profile_redirect_enabled": true, "rweb_tipjar_consumption_enabled": false, "verified_phone_label_enabled": false, "creator_subscriptions_tweet_preview_api_enabled": true, "responsive_web_graphql_timeline_navigation_enabled": true, "premium_content_api_read_enabled": false, "communities_web_enable_tweet_community_results_fetch": true, "c9s_tweet_anatomy_moderator_badge_enabled": true, "responsive_web_grok_analyze_button_fetch_trends_enabled": false, "responsive_web_grok_analyze_post_followups_enabled": true, "rweb_cashtags_composer_attachment_enabled": true, "responsive_web_jetfuel_frame": true, "rweb_sports_post_context_enabled": true, "responsive_web_grok_share_attachment_enabled": true, "responsive_web_grok_annotations_enabled": true, "articles_preview_enabled": true, "responsive_web_edit_tweet_api_enabled": true, "rweb_conversational_replies_downvote_enabled": false, "graphql_is_translatable_rweb_tweet_is_translatable_enabled": true, "view_counts_everywhere_api_enabled": true, "longform_notetweets_consumption_enabled": true, "responsive_web_twitter_article_tweet_consumption_enabled": true, "content_disclosure_indicator_enabled": true, "content_disclosure_ai_generated_indicator_enabled": true, "responsive_web_grok_show_grok_translated_post": true, "responsive_web_grok_analysis_button_from_backend": true, "post_ctas_fetch_enabled": false, "freedom_of_speech_not_reach_fetch_enabled": true, "standardized_nudges_misinfo": true, "tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled": true, "longform_notetweets_rich_text_read_enabled": true, "longform_notetweets_inline_media_enabled": false, "responsive_web_nested_quote_preview_enabled": true, "responsive_web_grok_image_annotation_enabled": true, "responsive_web_grok_imagine_annotation_enabled": true, "responsive_web_grok_community_note_auto_translation_is_enabled": true, "responsive_web_enhance_cards_enabled": false},
  } satisfies GetRetweetersRequest;

  try {
    const data = await api.getRetweeters(body);
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
| **pathQueryId** | `string` |  | [Defaults to `&#39;9gzvtg9l4CmhrfO6KMgKCA&#39;`] |
| **variables** | `string` |  | [Defaults to `&#39;{\&quot;tweetId\&quot;: \&quot;1349129669258448897\&quot;, \&quot;count\&quot;: 20, \&quot;includePromotedContent\&quot;: true, \&quot;enableRanking\&quot;: true}&#39;`] |
| **features** | `string` |  | [Defaults to `&#39;{\&quot;rweb_video_screen_enabled\&quot;: false, \&quot;rweb_cashtags_enabled\&quot;: true, \&quot;profile_label_improvements_pcf_label_in_post_enabled\&quot;: true, \&quot;responsive_web_profile_redirect_enabled\&quot;: true, \&quot;rweb_tipjar_consumption_enabled\&quot;: false, \&quot;verified_phone_label_enabled\&quot;: false, \&quot;creator_subscriptions_tweet_preview_api_enabled\&quot;: true, \&quot;responsive_web_graphql_timeline_navigation_enabled\&quot;: true, \&quot;premium_content_api_read_enabled\&quot;: false, \&quot;communities_web_enable_tweet_community_results_fetch\&quot;: true, \&quot;c9s_tweet_anatomy_moderator_badge_enabled\&quot;: true, \&quot;responsive_web_grok_analyze_button_fetch_trends_enabled\&quot;: false, \&quot;responsive_web_grok_analyze_post_followups_enabled\&quot;: true, \&quot;rweb_cashtags_composer_attachment_enabled\&quot;: true, \&quot;responsive_web_jetfuel_frame\&quot;: true, \&quot;rweb_sports_post_context_enabled\&quot;: true, \&quot;responsive_web_grok_share_attachment_enabled\&quot;: true, \&quot;responsive_web_grok_annotations_enabled\&quot;: true, \&quot;articles_preview_enabled\&quot;: true, \&quot;responsive_web_edit_tweet_api_enabled\&quot;: true, \&quot;rweb_conversational_replies_downvote_enabled\&quot;: false, \&quot;graphql_is_translatable_rweb_tweet_is_translatable_enabled\&quot;: true, \&quot;view_counts_everywhere_api_enabled\&quot;: true, \&quot;longform_notetweets_consumption_enabled\&quot;: true, \&quot;responsive_web_twitter_article_tweet_consumption_enabled\&quot;: true, \&quot;content_disclosure_indicator_enabled\&quot;: true, \&quot;content_disclosure_ai_generated_indicator_enabled\&quot;: true, \&quot;responsive_web_grok_show_grok_translated_post\&quot;: true, \&quot;responsive_web_grok_analysis_button_from_backend\&quot;: true, \&quot;post_ctas_fetch_enabled\&quot;: false, \&quot;freedom_of_speech_not_reach_fetch_enabled\&quot;: true, \&quot;standardized_nudges_misinfo\&quot;: true, \&quot;tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled\&quot;: true, \&quot;longform_notetweets_rich_text_read_enabled\&quot;: true, \&quot;longform_notetweets_inline_media_enabled\&quot;: false, \&quot;responsive_web_nested_quote_preview_enabled\&quot;: true, \&quot;responsive_web_grok_image_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_imagine_annotation_enabled\&quot;: true, \&quot;responsive_web_grok_community_note_auto_translation_is_enabled\&quot;: true, \&quot;responsive_web_enhance_cards_enabled\&quot;: false}&#39;`] |

### Return type

[**TweetRetweetersResponse**](TweetRetweetersResponse.md)

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

