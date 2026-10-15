# twitter-openapi-typescript-generated@0.0.41

A TypeScript SDK client for the x.com API.

## Usage

First, install the SDK from npm.

```bash
npm install twitter-openapi-typescript-generated --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *https://x.com/i/api*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*DefaultApi* | [**getProfileSpotlightsQuery**](docs/DefaultApi.md#getprofilespotlightsquery) | **GET** /graphql/{pathQueryId}/ProfileSpotlightsQuery | 
*DefaultApi* | [**getTweetResultByRestId**](docs/DefaultApi.md#gettweetresultbyrestid) | **GET** /graphql/{pathQueryId}/TweetResultByRestId | 
*OtherApi* | [**other**](docs/OtherApi.md#other) | **GET** /other | 
*PostApi* | [**postCreateBookmark**](docs/PostApi.md#postcreatebookmarkoperation) | **POST** /graphql/{pathQueryId}/CreateBookmark | 
*PostApi* | [**postCreateRetweet**](docs/PostApi.md#postcreateretweetoperation) | **POST** /graphql/{pathQueryId}/CreateRetweet | 
*PostApi* | [**postCreateTweet**](docs/PostApi.md#postcreatetweetoperation) | **POST** /graphql/{pathQueryId}/CreateTweet | 
*PostApi* | [**postDeleteBookmark**](docs/PostApi.md#postdeletebookmarkoperation) | **POST** /graphql/{pathQueryId}/DeleteBookmark | 
*PostApi* | [**postDeleteRetweet**](docs/PostApi.md#postdeleteretweetoperation) | **POST** /graphql/{pathQueryId}/DeleteRetweet | 
*PostApi* | [**postDeleteTweet**](docs/PostApi.md#postdeletetweetoperation) | **POST** /graphql/{pathQueryId}/DeleteTweet | 
*PostApi* | [**postFavoriteTweet**](docs/PostApi.md#postfavoritetweetoperation) | **POST** /graphql/{pathQueryId}/FavoriteTweet | 
*PostApi* | [**postUnfavoriteTweet**](docs/PostApi.md#postunfavoritetweetoperation) | **POST** /graphql/{pathQueryId}/UnfavoriteTweet | 
*TweetApi* | [**getBookmarks**](docs/TweetApi.md#getbookmarks) | **GET** /graphql/{pathQueryId}/Bookmarks | 
*TweetApi* | [**getCommunityAboutTimeline**](docs/TweetApi.md#getcommunityabouttimeline) | **GET** /graphql/{pathQueryId}/CommunityAboutTimeline | 
*TweetApi* | [**getCommunityMediaTimeline**](docs/TweetApi.md#getcommunitymediatimeline) | **GET** /graphql/{pathQueryId}/CommunityMediaTimeline | 
*TweetApi* | [**getCommunityTweetsTimeline**](docs/TweetApi.md#getcommunitytweetstimeline) | **GET** /graphql/{pathQueryId}/CommunityTweetsTimeline | 
*TweetApi* | [**getHomeLatestTimeline**](docs/TweetApi.md#gethomelatesttimeline) | **GET** /graphql/{pathQueryId}/HomeLatestTimeline | 
*TweetApi* | [**getHomeTimeline**](docs/TweetApi.md#gethometimeline) | **GET** /graphql/{pathQueryId}/HomeTimeline | 
*TweetApi* | [**getLikes**](docs/TweetApi.md#getlikes) | **GET** /graphql/{pathQueryId}/Likes | 
*TweetApi* | [**getListLatestTweetsTimeline**](docs/TweetApi.md#getlistlatesttweetstimeline) | **GET** /graphql/{pathQueryId}/ListLatestTweetsTimeline | 
*TweetApi* | [**getNotificationsTimeline**](docs/TweetApi.md#getnotificationstimeline) | **GET** /graphql/{pathQueryId}/NotificationsTimeline | 
*TweetApi* | [**getSearchTimeline**](docs/TweetApi.md#getsearchtimeline) | **GET** /graphql/{pathQueryId}/SearchTimeline | 
*TweetApi* | [**getTweetDetail**](docs/TweetApi.md#gettweetdetail) | **GET** /graphql/{pathQueryId}/TweetDetail | 
*TweetApi* | [**getUserHighlightsTweets**](docs/TweetApi.md#getuserhighlightstweets) | **GET** /graphql/{pathQueryId}/UserHighlightsTweets | 
*TweetApi* | [**getUserMedia**](docs/TweetApi.md#getusermedia) | **GET** /graphql/{pathQueryId}/UserMedia | 
*TweetApi* | [**getUserOriginalsTimeline**](docs/TweetApi.md#getuseroriginalstimeline) | **GET** /graphql/{pathQueryId}/UserOriginalsTimeline | 
*TweetApi* | [**getUserRepliesTimeline**](docs/TweetApi.md#getuserrepliestimeline) | **GET** /graphql/{pathQueryId}/UserRepliesTimeline | 
*TweetApi* | [**getUserTweets**](docs/TweetApi.md#getusertweets) | **GET** /graphql/{pathQueryId}/UserTweets | 
*TweetApi* | [**getUserTweetsAndReplies**](docs/TweetApi.md#getusertweetsandreplies) | **GET** /graphql/{pathQueryId}/UserTweetsAndReplies | 
*TweetApi* | [**getUserVideoTimeline**](docs/TweetApi.md#getuservideotimeline) | **GET** /graphql/{pathQueryId}/UserVideoTimeline | 
*UserApi* | [**getUserByRestId**](docs/UserApi.md#getuserbyrestid) | **GET** /graphql/{pathQueryId}/UserByRestId | 
*UserApi* | [**getUserByScreenName**](docs/UserApi.md#getuserbyscreenname) | **GET** /graphql/{pathQueryId}/UserByScreenName | 
*UserListApi* | [**getBlueVerifiedFollowers**](docs/UserListApi.md#getblueverifiedfollowers) | **GET** /graphql/{pathQueryId}/BlueVerifiedFollowers | 
*UserListApi* | [**getFavoriters**](docs/UserListApi.md#getfavoriters) | **GET** /graphql/{pathQueryId}/Favoriters | 
*UserListApi* | [**getFollowers**](docs/UserListApi.md#getfollowers) | **GET** /graphql/{pathQueryId}/Followers | 
*UserListApi* | [**getFollowersYouKnow**](docs/UserListApi.md#getfollowersyouknow) | **GET** /graphql/{pathQueryId}/FollowersYouKnow | 
*UserListApi* | [**getFollowing**](docs/UserListApi.md#getfollowing) | **GET** /graphql/{pathQueryId}/Following | 
*UserListApi* | [**getRetweeters**](docs/UserListApi.md#getretweeters) | **GET** /graphql/{pathQueryId}/Retweeters | 
*UsersApi* | [**getUsersByRestIds**](docs/UsersApi.md#getusersbyrestids) | **GET** /graphql/{pathQueryId}/UsersByRestIds | 
*V11GetApi* | [**getFriendsFollowingList**](docs/V11GetApi.md#getfriendsfollowinglist) | **GET** /1.1/friends/following/list.json | 
*V11GetApi* | [**getSearchTypeahead**](docs/V11GetApi.md#getsearchtypeahead) | **GET** /1.1/search/typeahead.json | 
*V11PostApi* | [**postCreateFriendships**](docs/V11PostApi.md#postcreatefriendships) | **POST** /1.1/friendships/create.json | 
*V11PostApi* | [**postDestroyFriendships**](docs/V11PostApi.md#postdestroyfriendships) | **POST** /1.1/friendships/destroy.json | 
*V20GetApi* | [**getSearchAdaptive**](docs/V20GetApi.md#getsearchadaptive) | **GET** /2/search/adaptive.json | 


### Models

- [AboutCommunityResult](docs/AboutCommunityResult.md)
- [AboutCommunityResults](docs/AboutCommunityResults.md)
- [AboutCommunityTweetData](docs/AboutCommunityTweetData.md)
- [AdditionalMediaInfo](docs/AdditionalMediaInfo.md)
- [AdditionalMediaInfoCallToActions](docs/AdditionalMediaInfoCallToActions.md)
- [AdditionalMediaInfoCallToActionsUrl](docs/AdditionalMediaInfoCallToActionsUrl.md)
- [AllowDownloadStatus](docs/AllowDownloadStatus.md)
- [AnalysisResults](docs/AnalysisResults.md)
- [Article](docs/Article.md)
- [ArticleCoverMedia](docs/ArticleCoverMedia.md)
- [ArticleCoverMediaColorInfo](docs/ArticleCoverMediaColorInfo.md)
- [ArticleCoverMediaColorInfoPalette](docs/ArticleCoverMediaColorInfoPalette.md)
- [ArticleCoverMediaColorInfoPaletteRGB](docs/ArticleCoverMediaColorInfoPaletteRGB.md)
- [ArticleCoverMediaInfo](docs/ArticleCoverMediaInfo.md)
- [ArticleLifecycleState](docs/ArticleLifecycleState.md)
- [ArticleMetadata](docs/ArticleMetadata.md)
- [ArticlePreview](docs/ArticlePreview.md)
- [ArticleResult](docs/ArticleResult.md)
- [ArticleResults](docs/ArticleResults.md)
- [AuthorCommunityRelationship](docs/AuthorCommunityRelationship.md)
- [BirdwatchEntity](docs/BirdwatchEntity.md)
- [BirdwatchEntityRef](docs/BirdwatchEntityRef.md)
- [BirdwatchPivot](docs/BirdwatchPivot.md)
- [BirdwatchPivotCallToAction](docs/BirdwatchPivotCallToAction.md)
- [BirdwatchPivotFooter](docs/BirdwatchPivotFooter.md)
- [BirdwatchPivotNote](docs/BirdwatchPivotNote.md)
- [BirdwatchPivotSubtitle](docs/BirdwatchPivotSubtitle.md)
- [BookmarksResponse](docs/BookmarksResponse.md)
- [BookmarksResponseData](docs/BookmarksResponseData.md)
- [BookmarksTimeline](docs/BookmarksTimeline.md)
- [Callback](docs/Callback.md)
- [CashtagAttachment](docs/CashtagAttachment.md)
- [ClientEventInfo](docs/ClientEventInfo.md)
- [CommunitiesActions](docs/CommunitiesActions.md)
- [Community](docs/Community.md)
- [CommunityAboutTimelineResponse](docs/CommunityAboutTimelineResponse.md)
- [CommunityActions](docs/CommunityActions.md)
- [CommunityDeleteActionResult](docs/CommunityDeleteActionResult.md)
- [CommunityInvitesResult](docs/CommunityInvitesResult.md)
- [CommunityJoinAction](docs/CommunityJoinAction.md)
- [CommunityJoinActionResultUnion](docs/CommunityJoinActionResultUnion.md)
- [CommunityJoinActionUnavailable](docs/CommunityJoinActionUnavailable.md)
- [CommunityJoinRequestsResult](docs/CommunityJoinRequestsResult.md)
- [CommunityLeaveActionResult](docs/CommunityLeaveActionResult.md)
- [CommunityMediaTimelineResponse](docs/CommunityMediaTimelineResponse.md)
- [CommunityPinActionResult](docs/CommunityPinActionResult.md)
- [CommunityRelationship](docs/CommunityRelationship.md)
- [CommunityResult](docs/CommunityResult.md)
- [CommunityRule](docs/CommunityRule.md)
- [CommunityTweetsTimelineResponse](docs/CommunityTweetsTimelineResponse.md)
- [CommunityUnavailable](docs/CommunityUnavailable.md)
- [CommunityUnion](docs/CommunityUnion.md)
- [CommunityUnpinActionResult](docs/CommunityUnpinActionResult.md)
- [CommunityUrls](docs/CommunityUrls.md)
- [CommunityUrlsPermalink](docs/CommunityUrlsPermalink.md)
- [ContentDisclosure](docs/ContentDisclosure.md)
- [ContentDisclosureAdvertisingDisclosure](docs/ContentDisclosureAdvertisingDisclosure.md)
- [ContentDisclosureAiGeneratedDisclosure](docs/ContentDisclosureAiGeneratedDisclosure.md)
- [ContentEntryType](docs/ContentEntryType.md)
- [ContentItemType](docs/ContentItemType.md)
- [ContentUnion](docs/ContentUnion.md)
- [ConversationControl](docs/ConversationControl.md)
- [CoverCta](docs/CoverCta.md)
- [CreateBookmarkResponse](docs/CreateBookmarkResponse.md)
- [CreateBookmarkResponseData](docs/CreateBookmarkResponseData.md)
- [CreateRetweet](docs/CreateRetweet.md)
- [CreateRetweetResponse](docs/CreateRetweetResponse.md)
- [CreateRetweetResponseData](docs/CreateRetweetResponseData.md)
- [CreateRetweetResponseResult](docs/CreateRetweetResponseResult.md)
- [CreateTweet](docs/CreateTweet.md)
- [CreateTweetResponse](docs/CreateTweetResponse.md)
- [CreateTweetResponseData](docs/CreateTweetResponseData.md)
- [CreateTweetResponseResult](docs/CreateTweetResponseResult.md)
- [CtaClientEventInfo](docs/CtaClientEventInfo.md)
- [CursorType](docs/CursorType.md)
- [DeleteBookmarkResponse](docs/DeleteBookmarkResponse.md)
- [DeleteBookmarkResponseData](docs/DeleteBookmarkResponseData.md)
- [DeleteRetweet](docs/DeleteRetweet.md)
- [DeleteRetweetResponse](docs/DeleteRetweetResponse.md)
- [DeleteRetweetResponseData](docs/DeleteRetweetResponseData.md)
- [DeleteRetweetResponseResult](docs/DeleteRetweetResponseResult.md)
- [DeleteTweetResponse](docs/DeleteTweetResponse.md)
- [DeleteTweetResponseData](docs/DeleteTweetResponseData.md)
- [DeleteTweetResponseResult](docs/DeleteTweetResponseResult.md)
- [DisplayTreatment](docs/DisplayTreatment.md)
- [DisplayType](docs/DisplayType.md)
- [Entities](docs/Entities.md)
- [ErrorExtensions](docs/ErrorExtensions.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [ErrorResponsePathInner](docs/ErrorResponsePathInner.md)
- [ExtMediaAvailability](docs/ExtMediaAvailability.md)
- [ExtendedEntities](docs/ExtendedEntities.md)
- [FavoriteTweet](docs/FavoriteTweet.md)
- [FavoriteTweetResponse](docs/FavoriteTweetResponse.md)
- [FeedbackInfo](docs/FeedbackInfo.md)
- [FollowResponse](docs/FollowResponse.md)
- [FollowResponseData](docs/FollowResponseData.md)
- [FollowResponseResult](docs/FollowResponseResult.md)
- [FollowResponseUser](docs/FollowResponseUser.md)
- [FollowTimeline](docs/FollowTimeline.md)
- [GrokAnnotation](docs/GrokAnnotation.md)
- [GrokEntity](docs/GrokEntity.md)
- [GrokEntityRef](docs/GrokEntityRef.md)
- [GrokImageAnnotation](docs/GrokImageAnnotation.md)
- [GrokShareAttachment](docs/GrokShareAttachment.md)
- [GrokShareAttachmentItem](docs/GrokShareAttachmentItem.md)
- [GrokTranslatedCommunityNote](docs/GrokTranslatedCommunityNote.md)
- [GrokTranslatedCommunityNoteWithAvailability](docs/GrokTranslatedCommunityNoteWithAvailability.md)
- [GrokTranslatedPost](docs/GrokTranslatedPost.md)
- [GrokTranslatedPostWithAvailability](docs/GrokTranslatedPostWithAvailability.md)
- [Highlight](docs/Highlight.md)
- [HomeTimelineHome](docs/HomeTimelineHome.md)
- [HomeTimelineResponseData](docs/HomeTimelineResponseData.md)
- [InstructionType](docs/InstructionType.md)
- [InstructionUnion](docs/InstructionUnion.md)
- [ItemContentUnion](docs/ItemContentUnion.md)
- [ItemResult](docs/ItemResult.md)
- [LimitedActionResultsData](docs/LimitedActionResultsData.md)
- [ListLatestTweetsTimelineResponse](docs/ListLatestTweetsTimelineResponse.md)
- [ListTweetsTimelineData](docs/ListTweetsTimelineData.md)
- [ListTweetsTimelineList](docs/ListTweetsTimelineList.md)
- [Location](docs/Location.md)
- [Media](docs/Media.md)
- [MediaCommunityResult](docs/MediaCommunityResult.md)
- [MediaCommunityResults](docs/MediaCommunityResults.md)
- [MediaCommunityTweetData](docs/MediaCommunityTweetData.md)
- [MediaExtended](docs/MediaExtended.md)
- [MediaOriginalInfo](docs/MediaOriginalInfo.md)
- [MediaOriginalInfoFocusRect](docs/MediaOriginalInfoFocusRect.md)
- [MediaResult](docs/MediaResult.md)
- [MediaResults](docs/MediaResults.md)
- [MediaSize](docs/MediaSize.md)
- [MediaSizes](docs/MediaSizes.md)
- [MediaStats](docs/MediaStats.md)
- [MediaVideoInfo](docs/MediaVideoInfo.md)
- [MediaVideoInfoVariant](docs/MediaVideoInfoVariant.md)
- [MediaVisibilityResults](docs/MediaVisibilityResults.md)
- [MediaVisibilityResultsBlurredImageInterstitial](docs/MediaVisibilityResultsBlurredImageInterstitial.md)
- [ModuleEntry](docs/ModuleEntry.md)
- [ModuleItem](docs/ModuleItem.md)
- [NoteTweet](docs/NoteTweet.md)
- [NoteTweetResult](docs/NoteTweetResult.md)
- [NoteTweetResultData](docs/NoteTweetResultData.md)
- [NoteTweetResultMedia](docs/NoteTweetResultMedia.md)
- [NoteTweetResultMediaInlineMedia](docs/NoteTweetResultMediaInlineMedia.md)
- [NoteTweetResultRichText](docs/NoteTweetResultRichText.md)
- [NoteTweetResultRichTextTag](docs/NoteTweetResultRichTextTag.md)
- [NotificationTemplate](docs/NotificationTemplate.md)
- [NotificationsResult](docs/NotificationsResult.md)
- [NotificationsTimelineData](docs/NotificationsTimelineData.md)
- [NotificationsTimelineResponse](docs/NotificationsTimelineResponse.md)
- [NotificationsUserResults](docs/NotificationsUserResults.md)
- [NotificationsViewerV2](docs/NotificationsViewerV2.md)
- [OneFactorLoginEligibility](docs/OneFactorLoginEligibility.md)
- [OtherObjectAll](docs/OtherObjectAll.md)
- [PostCreateBookmarkRequest](docs/PostCreateBookmarkRequest.md)
- [PostCreateBookmarkRequestVariables](docs/PostCreateBookmarkRequestVariables.md)
- [PostCreateRetweetRequest](docs/PostCreateRetweetRequest.md)
- [PostCreateRetweetRequestVariables](docs/PostCreateRetweetRequestVariables.md)
- [PostCreateTweetRequest](docs/PostCreateTweetRequest.md)
- [PostCreateTweetRequestFeatures](docs/PostCreateTweetRequestFeatures.md)
- [PostCreateTweetRequestVariables](docs/PostCreateTweetRequestVariables.md)
- [PostCreateTweetRequestVariablesConversationControl](docs/PostCreateTweetRequestVariablesConversationControl.md)
- [PostCreateTweetRequestVariablesMedia](docs/PostCreateTweetRequestVariablesMedia.md)
- [PostCreateTweetRequestVariablesMediaMediaEntitiesInner](docs/PostCreateTweetRequestVariablesMediaMediaEntitiesInner.md)
- [PostCreateTweetRequestVariablesReply](docs/PostCreateTweetRequestVariablesReply.md)
- [PostCta](docs/PostCta.md)
- [PostCtaTitleText](docs/PostCtaTitleText.md)
- [PostCtaTitleTextEntity](docs/PostCtaTitleTextEntity.md)
- [PostCtaTitleTextEntityRef](docs/PostCtaTitleTextEntityRef.md)
- [PostCtaUserResults](docs/PostCtaUserResults.md)
- [PostCtaUserResultsAvatar](docs/PostCtaUserResultsAvatar.md)
- [PostCtaUserResultsResult](docs/PostCtaUserResultsResult.md)
- [PostDeleteBookmarkRequest](docs/PostDeleteBookmarkRequest.md)
- [PostDeleteRetweetRequest](docs/PostDeleteRetweetRequest.md)
- [PostDeleteRetweetRequestVariables](docs/PostDeleteRetweetRequestVariables.md)
- [PostDeleteTweetRequest](docs/PostDeleteTweetRequest.md)
- [PostFavoriteTweetRequest](docs/PostFavoriteTweetRequest.md)
- [PostUnfavoriteTweetRequest](docs/PostUnfavoriteTweetRequest.md)
- [PrimaryCommunityTopic](docs/PrimaryCommunityTopic.md)
- [ProfileBio](docs/ProfileBio.md)
- [ProfileBioEntities](docs/ProfileBioEntities.md)
- [ProfileBioEntitiesUrls](docs/ProfileBioEntitiesUrls.md)
- [ProfileResponse](docs/ProfileResponse.md)
- [ProfileResponseData](docs/ProfileResponseData.md)
- [QuotedRefResult](docs/QuotedRefResult.md)
- [QuotedStatusPermalink](docs/QuotedStatusPermalink.md)
- [RankedCommunityResult](docs/RankedCommunityResult.md)
- [RankedCommunityResults](docs/RankedCommunityResults.md)
- [RankedCommunityTweetData](docs/RankedCommunityTweetData.md)
- [Retweet](docs/Retweet.md)
- [RetweetLegacy](docs/RetweetLegacy.md)
- [RichMessage](docs/RichMessage.md)
- [SearchByRawQuery](docs/SearchByRawQuery.md)
- [SearchTimeline](docs/SearchTimeline.md)
- [SearchTimelineData](docs/SearchTimelineData.md)
- [SearchTimelineResponse](docs/SearchTimelineResponse.md)
- [SelfThread](docs/SelfThread.md)
- [SensitiveMediaWarning](docs/SensitiveMediaWarning.md)
- [Session](docs/Session.md)
- [Smarttag](docs/Smarttag.md)
- [SmarttagTag](docs/SmarttagTag.md)
- [SocialContextLandingUrl](docs/SocialContextLandingUrl.md)
- [SocialContextUnion](docs/SocialContextUnion.md)
- [SocialContextUnionType](docs/SocialContextUnionType.md)
- [SuperFollowUserProfile](docs/SuperFollowUserProfile.md)
- [SuperFollowsReplyUserResult](docs/SuperFollowsReplyUserResult.md)
- [SuperFollowsReplyUserResultCore](docs/SuperFollowsReplyUserResultCore.md)
- [SuperFollowsReplyUserResultData](docs/SuperFollowsReplyUserResultData.md)
- [SuperFollowsReplyUserResultLegacy](docs/SuperFollowsReplyUserResultLegacy.md)
- [Text](docs/Text.md)
- [TextEntity](docs/TextEntity.md)
- [TextEntityRef](docs/TextEntityRef.md)
- [TextHighlight](docs/TextHighlight.md)
- [ThumbnailImage](docs/ThumbnailImage.md)
- [Timeline](docs/Timeline.md)
- [TimelineAddEntries](docs/TimelineAddEntries.md)
- [TimelineAddEntry](docs/TimelineAddEntry.md)
- [TimelineAddToModule](docs/TimelineAddToModule.md)
- [TimelineClearCache](docs/TimelineClearCache.md)
- [TimelineClearEntriesUnreadState](docs/TimelineClearEntriesUnreadState.md)
- [TimelineCommunity](docs/TimelineCommunity.md)
- [TimelineCoverBehavior](docs/TimelineCoverBehavior.md)
- [TimelineCoverBehaviorUrl](docs/TimelineCoverBehaviorUrl.md)
- [TimelineGeneralContext](docs/TimelineGeneralContext.md)
- [TimelineHalfCover](docs/TimelineHalfCover.md)
- [TimelineMarkEntriesUnreadGreaterThanSortIndex](docs/TimelineMarkEntriesUnreadGreaterThanSortIndex.md)
- [TimelineMessagePrompt](docs/TimelineMessagePrompt.md)
- [TimelineNotification](docs/TimelineNotification.md)
- [TimelinePinEntry](docs/TimelinePinEntry.md)
- [TimelinePrompt](docs/TimelinePrompt.md)
- [TimelineReplaceEntry](docs/TimelineReplaceEntry.md)
- [TimelineResponse](docs/TimelineResponse.md)
- [TimelineResult](docs/TimelineResult.md)
- [TimelineShowAlert](docs/TimelineShowAlert.md)
- [TimelineShowAlertRichText](docs/TimelineShowAlertRichText.md)
- [TimelineShowCover](docs/TimelineShowCover.md)
- [TimelineTerminateTimeline](docs/TimelineTerminateTimeline.md)
- [TimelineTimelineCursor](docs/TimelineTimelineCursor.md)
- [TimelineTimelineItem](docs/TimelineTimelineItem.md)
- [TimelineTimelineModule](docs/TimelineTimelineModule.md)
- [TimelineTombstone](docs/TimelineTombstone.md)
- [TimelineTopicContext](docs/TimelineTopicContext.md)
- [TimelineTrend](docs/TimelineTrend.md)
- [TimelineTweet](docs/TimelineTweet.md)
- [TimelineUser](docs/TimelineUser.md)
- [Timestamp](docs/Timestamp.md)
- [TombstoneEntity](docs/TombstoneEntity.md)
- [TombstoneInfo](docs/TombstoneInfo.md)
- [TombstoneRef](docs/TombstoneRef.md)
- [TombstoneRichText](docs/TombstoneRichText.md)
- [TopicContext](docs/TopicContext.md)
- [Tracing](docs/Tracing.md)
- [TrendImage](docs/TrendImage.md)
- [TrendMetadata](docs/TrendMetadata.md)
- [TrendResults](docs/TrendResults.md)
- [Tweet](docs/Tweet.md)
- [TweetCard](docs/TweetCard.md)
- [TweetCardLegacy](docs/TweetCardLegacy.md)
- [TweetCardLegacyBindingValue](docs/TweetCardLegacyBindingValue.md)
- [TweetCardLegacyBindingValueData](docs/TweetCardLegacyBindingValueData.md)
- [TweetCardLegacyBindingValueDataImage](docs/TweetCardLegacyBindingValueDataImage.md)
- [TweetCardPlatform](docs/TweetCardPlatform.md)
- [TweetCardPlatformAudience](docs/TweetCardPlatformAudience.md)
- [TweetCardPlatformData](docs/TweetCardPlatformData.md)
- [TweetCardPlatformDevice](docs/TweetCardPlatformDevice.md)
- [TweetDetailResponse](docs/TweetDetailResponse.md)
- [TweetDetailResponseData](docs/TweetDetailResponseData.md)
- [TweetEditControl](docs/TweetEditControl.md)
- [TweetEditControlInitial](docs/TweetEditControlInitial.md)
- [TweetEditPrespective](docs/TweetEditPrespective.md)
- [TweetFavoritersResponse](docs/TweetFavoritersResponse.md)
- [TweetFavoritersResponseData](docs/TweetFavoritersResponseData.md)
- [TweetInterstitial](docs/TweetInterstitial.md)
- [TweetInterstitialRevealText](docs/TweetInterstitialRevealText.md)
- [TweetInterstitialText](docs/TweetInterstitialText.md)
- [TweetInterstitialTextEntity](docs/TweetInterstitialTextEntity.md)
- [TweetInterstitialTextEntityRef](docs/TweetInterstitialTextEntityRef.md)
- [TweetLegacy](docs/TweetLegacy.md)
- [TweetLegacyScopes](docs/TweetLegacyScopes.md)
- [TweetLimitedActionResults](docs/TweetLimitedActionResults.md)
- [TweetPostCta](docs/TweetPostCta.md)
- [TweetPreviewDisplay](docs/TweetPreviewDisplay.md)
- [TweetPreviewDisplayCta](docs/TweetPreviewDisplayCta.md)
- [TweetPreviewDisplayCtaUrl](docs/TweetPreviewDisplayCtaUrl.md)
- [TweetPreviewDisplayTweet](docs/TweetPreviewDisplayTweet.md)
- [TweetPreviewDisplayTweetViewCount](docs/TweetPreviewDisplayTweetViewCount.md)
- [TweetPreviousCounts](docs/TweetPreviousCounts.md)
- [TweetResultByRestIdData](docs/TweetResultByRestIdData.md)
- [TweetResultByRestIdResponse](docs/TweetResultByRestIdResponse.md)
- [TweetRetweetersResponse](docs/TweetRetweetersResponse.md)
- [TweetRetweetersResponseData](docs/TweetRetweetersResponseData.md)
- [TweetTombstone](docs/TweetTombstone.md)
- [TweetUnavailable](docs/TweetUnavailable.md)
- [TweetUnion](docs/TweetUnion.md)
- [TweetView](docs/TweetView.md)
- [TweetWithVisibilityResults](docs/TweetWithVisibilityResults.md)
- [TypeName](docs/TypeName.md)
- [UnfavoriteTweet](docs/UnfavoriteTweet.md)
- [UnfavoriteTweetResponse](docs/UnfavoriteTweetResponse.md)
- [UnifiedCard](docs/UnifiedCard.md)
- [Url](docs/Url.md)
- [UrtEndpointOptions](docs/UrtEndpointOptions.md)
- [UrtEndpointRequestParams](docs/UrtEndpointRequestParams.md)
- [User](docs/User.md)
- [UserActionCounts](docs/UserActionCounts.md)
- [UserAvatar](docs/UserAvatar.md)
- [UserBanner](docs/UserBanner.md)
- [UserCore](docs/UserCore.md)
- [UserDmPermissions](docs/UserDmPermissions.md)
- [UserFeatures](docs/UserFeatures.md)
- [UserHighlightsInfo](docs/UserHighlightsInfo.md)
- [UserHighlightsTweetsData](docs/UserHighlightsTweetsData.md)
- [UserHighlightsTweetsResponse](docs/UserHighlightsTweetsResponse.md)
- [UserHighlightsTweetsResult](docs/UserHighlightsTweetsResult.md)
- [UserHighlightsTweetsTimeline](docs/UserHighlightsTweetsTimeline.md)
- [UserHighlightsTweetsUser](docs/UserHighlightsTweetsUser.md)
- [UserLegacy](docs/UserLegacy.md)
- [UserLegacyExtendedProfile](docs/UserLegacyExtendedProfile.md)
- [UserLegacyExtendedProfileBirthdate](docs/UserLegacyExtendedProfileBirthdate.md)
- [UserLocation](docs/UserLocation.md)
- [UserMediaPermissions](docs/UserMediaPermissions.md)
- [UserNotificationsSettings](docs/UserNotificationsSettings.md)
- [UserPinnedItems](docs/UserPinnedItems.md)
- [UserPrivacy](docs/UserPrivacy.md)
- [UserProfessional](docs/UserProfessional.md)
- [UserProfessionalCategory](docs/UserProfessionalCategory.md)
- [UserProfile](docs/UserProfile.md)
- [UserProfileMetadata](docs/UserProfileMetadata.md)
- [UserProfileTranslation](docs/UserProfileTranslation.md)
- [UserRelationshipCounts](docs/UserRelationshipCounts.md)
- [UserRelationshipPerspectives](docs/UserRelationshipPerspectives.md)
- [UserResponse](docs/UserResponse.md)
- [UserResponseData](docs/UserResponseData.md)
- [UserResultByScreenName](docs/UserResultByScreenName.md)
- [UserResultByScreenNameCore](docs/UserResultByScreenNameCore.md)
- [UserResultByScreenNameLegacy](docs/UserResultByScreenNameLegacy.md)
- [UserResultByScreenNameResult](docs/UserResultByScreenNameResult.md)
- [UserResultCore](docs/UserResultCore.md)
- [UserResultPrivacy](docs/UserResultPrivacy.md)
- [UserResultRelationshipPerspectives](docs/UserResultRelationshipPerspectives.md)
- [UserResults](docs/UserResults.md)
- [UserTipJarSettings](docs/UserTipJarSettings.md)
- [UserTweetCounts](docs/UserTweetCounts.md)
- [UserTweetsData](docs/UserTweetsData.md)
- [UserTweetsResponse](docs/UserTweetsResponse.md)
- [UserTweetsResultV1](docs/UserTweetsResultV1.md)
- [UserTweetsResultV2](docs/UserTweetsResultV2.md)
- [UserTweetsUser](docs/UserTweetsUser.md)
- [UserUnavailable](docs/UserUnavailable.md)
- [UserUnion](docs/UserUnion.md)
- [UserValue](docs/UserValue.md)
- [UserVerification](docs/UserVerification.md)
- [UserVerificationInfo](docs/UserVerificationInfo.md)
- [UserVerificationInfoReason](docs/UserVerificationInfoReason.md)
- [UserVerificationInfoReasonDescription](docs/UserVerificationInfoReasonDescription.md)
- [UserVerificationInfoReasonDescriptionEntities](docs/UserVerificationInfoReasonDescriptionEntities.md)
- [UserVerificationInfoReasonDescriptionEntitiesRef](docs/UserVerificationInfoReasonDescriptionEntitiesRef.md)
- [UserWebsite](docs/UserWebsite.md)
- [UsersResponse](docs/UsersResponse.md)
- [UsersResponseData](docs/UsersResponseData.md)

### Authorization


Authentication schemes defined for the API:
<a id="Accept"></a>
#### Accept


- **Type**: API key
- **API key parameter name**: `Accept`
- **Location**: HTTP header
<a id="AcceptEncoding"></a>
#### AcceptEncoding


- **Type**: API key
- **API key parameter name**: `Accept-Encoding`
- **Location**: HTTP header
<a id="AcceptLanguage"></a>
#### AcceptLanguage


- **Type**: API key
- **API key parameter name**: `Accept-Language`
- **Location**: HTTP header
<a id="ActiveUser"></a>
#### ActiveUser


- **Type**: API key
- **API key parameter name**: `x-twitter-active-user`
- **Location**: HTTP header
<a id="AuthType"></a>
#### AuthType


- **Type**: API key
- **API key parameter name**: `x-twitter-auth-type`
- **Location**: HTTP header
<a id="BearerAuth"></a>
#### BearerAuth


- **Type**: HTTP Bearer Token authentication
<a id="ClientLanguage"></a>
#### ClientLanguage


- **Type**: API key
- **API key parameter name**: `x-twitter-client-language`
- **Location**: HTTP header
<a id="ClientTransactionId"></a>
#### ClientTransactionId


- **Type**: API key
- **API key parameter name**: `x-client-transaction-id`
- **Location**: HTTP header
<a id="ClientUuid"></a>
#### ClientUuid


- **Type**: API key
- **API key parameter name**: `x-client-uuid`
- **Location**: HTTP header
<a id="CookieAuthToken"></a>
#### CookieAuthToken


- **Type**: API key
- **API key parameter name**: `auth_token`
- **Location**: 
<a id="CookieCt0"></a>
#### CookieCt0


- **Type**: API key
- **API key parameter name**: `ct0`
- **Location**: 
<a id="CookieGt0"></a>
#### CookieGt0


- **Type**: API key
- **API key parameter name**: `gt0`
- **Location**: 
<a id="CsrfToken"></a>
#### CsrfToken


- **Type**: API key
- **API key parameter name**: `x-csrf-token`
- **Location**: HTTP header
<a id="GuestToken"></a>
#### GuestToken


- **Type**: API key
- **API key parameter name**: `x-guest-token`
- **Location**: HTTP header
<a id="Priority"></a>
#### Priority


- **Type**: API key
- **API key parameter name**: `Priority`
- **Location**: HTTP header
<a id="Referer"></a>
#### Referer


- **Type**: API key
- **API key parameter name**: `Referer`
- **Location**: HTTP header
<a id="SecChUa"></a>
#### SecChUa


- **Type**: API key
- **API key parameter name**: `Sec-Ch-Ua`
- **Location**: HTTP header
<a id="SecChUaMobile"></a>
#### SecChUaMobile


- **Type**: API key
- **API key parameter name**: `Sec-Ch-Ua-Mobile`
- **Location**: HTTP header
<a id="SecChUaPlatform"></a>
#### SecChUaPlatform


- **Type**: API key
- **API key parameter name**: `Sec-Ch-Ua-Platform`
- **Location**: HTTP header
<a id="SecFetchDest"></a>
#### SecFetchDest


- **Type**: API key
- **API key parameter name**: `Sec-Fetch-Dest`
- **Location**: HTTP header
<a id="SecFetchMode"></a>
#### SecFetchMode


- **Type**: API key
- **API key parameter name**: `Sec-Fetch-Mode`
- **Location**: HTTP header
<a id="SecFetchSite"></a>
#### SecFetchSite


- **Type**: API key
- **API key parameter name**: `Sec-Fetch-Site`
- **Location**: HTTP header
<a id="UserAgent"></a>
#### UserAgent


- **Type**: API key
- **API key parameter name**: `user-agent`
- **Location**: HTTP header

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.0.1`
- Package version: `0.0.41`
- Generator version: `7.26.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[LicenseRef-Custom OR AGPL-3.0-or-later](https://github.com/fa0311/twitter-openapi#license)
