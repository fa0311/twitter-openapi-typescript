# twitter-openapi-typescript-generated@0.1.3

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


## Documentation

### API Endpoints

All URIs are relative to *https://x.com/i/api*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*BirdwatchApi* | [**getBirdwatchFetchAliasSelfSelectStatus**](docs/BirdwatchApi.md#getbirdwatchfetchaliasselfselectstatus) | **GET** /graphql/{pathQueryId}/BirdwatchFetchAliasSelfSelectStatus | 
*BirdwatchApi* | [**getBirdwatchFetchAuthenticatedUserProfile**](docs/BirdwatchApi.md#getbirdwatchfetchauthenticateduserprofile) | **GET** /graphql/{pathQueryId}/BirdwatchFetchAuthenticatedUserProfile | 
*BirdwatchApi* | [**getBirdwatchFetchBirdwatchProfile**](docs/BirdwatchApi.md#getbirdwatchfetchbirdwatchprofile) | **GET** /graphql/{pathQueryId}/BirdwatchFetchBirdwatchProfile | 
*BirdwatchApi* | [**getBirdwatchFetchGlobalTimeline**](docs/BirdwatchApi.md#getbirdwatchfetchglobaltimeline) | **GET** /graphql/{pathQueryId}/BirdwatchFetchGlobalTimeline | 
*BirdwatchApi* | [**getBirdwatchFetchPublicData**](docs/BirdwatchApi.md#getbirdwatchfetchpublicdata) | **GET** /graphql/{pathQueryId}/BirdwatchFetchPublicData | 
*CommunityApi* | [**getCommunitiesFetchOneQuery**](docs/CommunityApi.md#getcommunitiesfetchonequery) | **GET** /graphql/{pathQueryId}/CommunitiesFetchOneQuery | 
*CommunityApi* | [**getCommunitiesSearchQuery**](docs/CommunityApi.md#getcommunitiessearchquery) | **GET** /graphql/{pathQueryId}/CommunitiesSearchQuery | 
*CommunityApi* | [**getCommunityQuery**](docs/CommunityApi.md#getcommunityquery) | **GET** /graphql/{pathQueryId}/CommunityQuery | 
*CommunityApi* | [**getGlobalCommunitiesLatestPostSearchTimeline**](docs/CommunityApi.md#getglobalcommunitieslatestpostsearchtimeline) | **GET** /graphql/{pathQueryId}/GlobalCommunitiesLatestPostSearchTimeline | 
*CommunityApi* | [**getGlobalCommunitiesPostSearchTimeline**](docs/CommunityApi.md#getglobalcommunitiespostsearchtimeline) | **GET** /graphql/{pathQueryId}/GlobalCommunitiesPostSearchTimeline | 
*CommunityApi* | [**getTopicCarouselQuery**](docs/CommunityApi.md#gettopiccarouselquery) | **GET** /graphql/{pathQueryId}/TopicCarouselQuery | 
*DefaultApi* | [**getAudioSpaceById**](docs/DefaultApi.md#getaudiospacebyid) | **GET** /graphql/{pathQueryId}/AudioSpaceById | 
*DefaultApi* | [**getAuthenticatePeriscope**](docs/DefaultApi.md#getauthenticateperiscope) | **GET** /graphql/{pathQueryId}/AuthenticatePeriscope | 
*DefaultApi* | [**getBroadcastQuery**](docs/DefaultApi.md#getbroadcastquery) | **GET** /graphql/{pathQueryId}/BroadcastQuery | 
*DefaultApi* | [**getCreatorStudioTabBarItemQuery**](docs/DefaultApi.md#getcreatorstudiotabbaritemquery) | **GET** /graphql/{pathQueryId}/CreatorStudioTabBarItemQuery | 
*DefaultApi* | [**getDataSaverMode**](docs/DefaultApi.md#getdatasavermode) | **GET** /graphql/{pathQueryId}/DataSaverMode | 
*DefaultApi* | [**getGrokAccountJwtQuery**](docs/DefaultApi.md#getgrokaccountjwtquery) | **GET** /graphql/{pathQueryId}/grokAccountJwtQuery | 
*DefaultApi* | [**getGrokHome**](docs/DefaultApi.md#getgrokhome) | **GET** /graphql/{pathQueryId}/GrokHome | 
*DefaultApi* | [**getPinnedTimelines**](docs/DefaultApi.md#getpinnedtimelines) | **GET** /graphql/{pathQueryId}/PinnedTimelines | 
*DefaultApi* | [**getProfileSpotlightsQuery**](docs/DefaultApi.md#getprofilespotlightsquery) | **GET** /graphql/{pathQueryId}/ProfileSpotlightsQuery | 
*DefaultApi* | [**getTweetResultByRestId**](docs/DefaultApi.md#gettweetresultbyrestid) | **GET** /graphql/{pathQueryId}/TweetResultByRestId | 
*DefaultApi* | [**getUseStoryTopicQuery**](docs/DefaultApi.md#getusestorytopicquery) | **GET** /graphql/{pathQueryId}/useStoryTopicQuery | 
*OtherApi* | [**other**](docs/OtherApi.md#other) | **GET** /other | 
*PostApi* | [**postCreateBookmark**](docs/PostApi.md#postcreatebookmarkoperation) | **POST** /graphql/{pathQueryId}/CreateBookmark | 
*PostApi* | [**postCreateDraftTweet**](docs/PostApi.md#postcreatedrafttweetoperation) | **POST** /graphql/{pathQueryId}/CreateDraftTweet | 
*PostApi* | [**postCreateList**](docs/PostApi.md#postcreatelistoperation) | **POST** /graphql/{pathQueryId}/CreateList | 
*PostApi* | [**postCreateRetweet**](docs/PostApi.md#postcreateretweetoperation) | **POST** /graphql/{pathQueryId}/CreateRetweet | 
*PostApi* | [**postCreateTweet**](docs/PostApi.md#postcreatetweetoperation) | **POST** /graphql/{pathQueryId}/CreateTweet | 
*PostApi* | [**postDeleteBookmark**](docs/PostApi.md#postdeletebookmarkoperation) | **POST** /graphql/{pathQueryId}/DeleteBookmark | 
*PostApi* | [**postDeleteDraftTweets**](docs/PostApi.md#postdeletedrafttweetsoperation) | **POST** /graphql/{pathQueryId}/DeleteDraftTweets | 
*PostApi* | [**postDeleteList**](docs/PostApi.md#postdeletelistoperation) | **POST** /graphql/{pathQueryId}/DeleteList | 
*PostApi* | [**postDeleteRetweet**](docs/PostApi.md#postdeleteretweetoperation) | **POST** /graphql/{pathQueryId}/DeleteRetweet | 
*PostApi* | [**postDeleteTweet**](docs/PostApi.md#postdeletetweetoperation) | **POST** /graphql/{pathQueryId}/DeleteTweet | 
*PostApi* | [**postFavoriteTweet**](docs/PostApi.md#postfavoritetweetoperation) | **POST** /graphql/{pathQueryId}/FavoriteTweet | 
*PostApi* | [**postListAddMember**](docs/PostApi.md#postlistaddmemberoperation) | **POST** /graphql/{pathQueryId}/ListAddMember | 
*PostApi* | [**postListRemoveMember**](docs/PostApi.md#postlistremovememberoperation) | **POST** /graphql/{pathQueryId}/ListRemoveMember | 
*PostApi* | [**postUnfavoriteTweet**](docs/PostApi.md#postunfavoritetweetoperation) | **POST** /graphql/{pathQueryId}/UnfavoriteTweet | 
*TweetApi* | [**getBookmarkSearchTimeline**](docs/TweetApi.md#getbookmarksearchtimeline) | **GET** /graphql/{pathQueryId}/BookmarkSearchTimeline | 
*TweetApi* | [**getBookmarks**](docs/TweetApi.md#getbookmarks) | **GET** /graphql/{pathQueryId}/Bookmarks | 
*TweetApi* | [**getCommunityAboutTimeline**](docs/TweetApi.md#getcommunityabouttimeline) | **GET** /graphql/{pathQueryId}/CommunityAboutTimeline | 
*TweetApi* | [**getCommunityDiscoveryTimeline**](docs/TweetApi.md#getcommunitydiscoverytimeline) | **GET** /graphql/{pathQueryId}/CommunityDiscoveryTimeline | 
*TweetApi* | [**getCommunityMediaTimeline**](docs/TweetApi.md#getcommunitymediatimeline) | **GET** /graphql/{pathQueryId}/CommunityMediaTimeline | 
*TweetApi* | [**getCommunityTweetsTimeline**](docs/TweetApi.md#getcommunitytweetstimeline) | **GET** /graphql/{pathQueryId}/CommunityTweetsTimeline | 
*TweetApi* | [**getConnectTabTimeline**](docs/TweetApi.md#getconnecttabtimeline) | **GET** /graphql/{pathQueryId}/ConnectTabTimeline | 
*TweetApi* | [**getExplorePage**](docs/TweetApi.md#getexplorepage) | **GET** /graphql/{pathQueryId}/ExplorePage | 
*TweetApi* | [**getExploreSidebar**](docs/TweetApi.md#getexploresidebar) | **GET** /graphql/{pathQueryId}/ExploreSidebar | 
*TweetApi* | [**getGenericTimelineById**](docs/TweetApi.md#getgenerictimelinebyid) | **GET** /graphql/{pathQueryId}/GenericTimelineById | 
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
*TweetApi* | [**getUserRepostsTimeline**](docs/TweetApi.md#getuserrepoststimeline) | **GET** /graphql/{pathQueryId}/UserRepostsTimeline | 
*TweetApi* | [**getUserSuperFollowTweets**](docs/TweetApi.md#getusersuperfollowtweets) | **GET** /graphql/{pathQueryId}/UserSuperFollowTweets | 
*TweetApi* | [**getUserTweets**](docs/TweetApi.md#getusertweets) | **GET** /graphql/{pathQueryId}/UserTweets | 
*TweetApi* | [**getUserTweetsAndReplies**](docs/TweetApi.md#getusertweetsandreplies) | **GET** /graphql/{pathQueryId}/UserTweetsAndReplies | 
*TweetApi* | [**getUserVideoTimeline**](docs/TweetApi.md#getuservideotimeline) | **GET** /graphql/{pathQueryId}/UserVideoTimeline | 
*UserApi* | [**getAboutAccountQuery**](docs/UserApi.md#getaboutaccountquery) | **GET** /graphql/{pathQueryId}/AboutAccountQuery | 
*UserApi* | [**getFetchDraftTweets**](docs/UserApi.md#getfetchdrafttweets) | **GET** /graphql/{pathQueryId}/FetchDraftTweets | 
*UserApi* | [**getFetchScheduledTweets**](docs/UserApi.md#getfetchscheduledtweets) | **GET** /graphql/{pathQueryId}/FetchScheduledTweets | 
*UserApi* | [**getUserByRestId**](docs/UserApi.md#getuserbyrestid) | **GET** /graphql/{pathQueryId}/UserByRestId | 
*UserApi* | [**getUserByScreenName**](docs/UserApi.md#getuserbyscreenname) | **GET** /graphql/{pathQueryId}/UserByScreenName | 
*UserApi* | [**getViewerBadgeCounts**](docs/UserApi.md#getviewerbadgecounts) | **GET** /graphql/{pathQueryId}/ViewerBadgeCounts | 
*UserListApi* | [**getBlueVerifiedFollowers**](docs/UserListApi.md#getblueverifiedfollowers) | **GET** /graphql/{pathQueryId}/BlueVerifiedFollowers | 
*UserListApi* | [**getCombinedLists**](docs/UserListApi.md#getcombinedlists) | **GET** /graphql/{pathQueryId}/CombinedLists | 
*UserListApi* | [**getFavoriters**](docs/UserListApi.md#getfavoriters) | **GET** /graphql/{pathQueryId}/Favoriters | 
*UserListApi* | [**getFollowers**](docs/UserListApi.md#getfollowers) | **GET** /graphql/{pathQueryId}/Followers | 
*UserListApi* | [**getFollowersYouKnow**](docs/UserListApi.md#getfollowersyouknow) | **GET** /graphql/{pathQueryId}/FollowersYouKnow | 
*UserListApi* | [**getFollowing**](docs/UserListApi.md#getfollowing) | **GET** /graphql/{pathQueryId}/Following | 
*UserListApi* | [**getListByRestId**](docs/UserListApi.md#getlistbyrestid) | **GET** /graphql/{pathQueryId}/ListByRestId | 
*UserListApi* | [**getListCreationRecommendedUsers**](docs/UserListApi.md#getlistcreationrecommendedusers) | **GET** /graphql/{pathQueryId}/ListCreationRecommendedUsers | 
*UserListApi* | [**getListEditRecommendedUsers**](docs/UserListApi.md#getlisteditrecommendedusers) | **GET** /graphql/{pathQueryId}/ListEditRecommendedUsers | 
*UserListApi* | [**getListMembers**](docs/UserListApi.md#getlistmembers) | **GET** /graphql/{pathQueryId}/ListMembers | 
*UserListApi* | [**getListOwnerships**](docs/UserListApi.md#getlistownerships) | **GET** /graphql/{pathQueryId}/ListOwnerships | 
*UserListApi* | [**getListSearchTimeline**](docs/UserListApi.md#getlistsearchtimeline) | **GET** /graphql/{pathQueryId}/ListSearchTimeline | 
*UserListApi* | [**getListSubscribers**](docs/UserListApi.md#getlistsubscribers) | **GET** /graphql/{pathQueryId}/ListSubscribers | 
*UserListApi* | [**getListsManagementPageTimeline**](docs/UserListApi.md#getlistsmanagementpagetimeline) | **GET** /graphql/{pathQueryId}/ListsManagementPageTimeline | 
*UserListApi* | [**getRetweeters**](docs/UserListApi.md#getretweeters) | **GET** /graphql/{pathQueryId}/Retweeters | 
*UsersApi* | [**getSidebarUserRecommendations**](docs/UsersApi.md#getsidebaruserrecommendations) | **GET** /graphql/{pathQueryId}/SidebarUserRecommendations | 
*UsersApi* | [**getUsersByRestIds**](docs/UsersApi.md#getusersbyrestids) | **GET** /graphql/{pathQueryId}/UsersByRestIds | 
*UsersApi* | [**getUsersVerifiedAvatars**](docs/UsersApi.md#getusersverifiedavatars) | **GET** /graphql/{pathQueryId}/UsersVerifiedAvatars | 
*V11GetApi* | [**getFriendsFollowingList**](docs/V11GetApi.md#getfriendsfollowinglist) | **GET** /1.1/friends/following/list.json | 
*V11GetApi* | [**getSearchTypeahead**](docs/V11GetApi.md#getsearchtypeahead) | **GET** /1.1/search/typeahead.json | 
*V11PostApi* | [**postCreateFriendships**](docs/V11PostApi.md#postcreatefriendships) | **POST** /1.1/friendships/create.json | 
*V11PostApi* | [**postDestroyFriendships**](docs/V11PostApi.md#postdestroyfriendships) | **POST** /1.1/friendships/destroy.json | 
*V20GetApi* | [**getSearchAdaptive**](docs/V20GetApi.md#getsearchadaptive) | **GET** /2/search/adaptive.json | 


### Models

- [AboutAccountData](docs/AboutAccountData.md)
- [AboutAccountResponse](docs/AboutAccountResponse.md)
- [AboutAccountUser](docs/AboutAccountUser.md)
- [AboutAccountUserResult](docs/AboutAccountUserResult.md)
- [AboutAccountVerificationInfo](docs/AboutAccountVerificationInfo.md)
- [AboutAccountVerificationInfoReason](docs/AboutAccountVerificationInfoReason.md)
- [AboutCommunityResult](docs/AboutCommunityResult.md)
- [AboutCommunityResults](docs/AboutCommunityResults.md)
- [AboutCommunityTweetData](docs/AboutCommunityTweetData.md)
- [AboutProfile](docs/AboutProfile.md)
- [AboutProfileUsernameChanges](docs/AboutProfileUsernameChanges.md)
- [AdMetadataContainer](docs/AdMetadataContainer.md)
- [AdditionalMediaInfo](docs/AdditionalMediaInfo.md)
- [AdditionalMediaInfoCallToActions](docs/AdditionalMediaInfoCallToActions.md)
- [AdditionalMediaInfoCallToActionsUrl](docs/AdditionalMediaInfoCallToActionsUrl.md)
- [AffiliatesHighlightedLabel](docs/AffiliatesHighlightedLabel.md)
- [AiTrend](docs/AiTrend.md)
- [AiTrendCore](docs/AiTrendCore.md)
- [AiTrendResults](docs/AiTrendResults.md)
- [AiTrendSocialProof](docs/AiTrendSocialProof.md)
- [AllowDownloadStatus](docs/AllowDownloadStatus.md)
- [AnalysisResults](docs/AnalysisResults.md)
- [ApiImage](docs/ApiImage.md)
- [ApiMedia](docs/ApiMedia.md)
- [Article](docs/Article.md)
- [ArticleContentBlock](docs/ArticleContentBlock.md)
- [ArticleContentBlockData](docs/ArticleContentBlockData.md)
- [ArticleContentEntity](docs/ArticleContentEntity.md)
- [ArticleContentEntityData](docs/ArticleContentEntityData.md)
- [ArticleContentEntityRange](docs/ArticleContentEntityRange.md)
- [ArticleContentEntityValue](docs/ArticleContentEntityValue.md)
- [ArticleContentInlineStyleRange](docs/ArticleContentInlineStyleRange.md)
- [ArticleContentMediaItem](docs/ArticleContentMediaItem.md)
- [ArticleContentState](docs/ArticleContentState.md)
- [ArticleContentTextRange](docs/ArticleContentTextRange.md)
- [ArticleCoverMedia](docs/ArticleCoverMedia.md)
- [ArticleCoverMediaInfo](docs/ArticleCoverMediaInfo.md)
- [ArticleLifecycleState](docs/ArticleLifecycleState.md)
- [ArticleMetadata](docs/ArticleMetadata.md)
- [ArticlePreview](docs/ArticlePreview.md)
- [ArticleResult](docs/ArticleResult.md)
- [ArticleResults](docs/ArticleResults.md)
- [AudioSpace](docs/AudioSpace.md)
- [AudioSpaceData](docs/AudioSpaceData.md)
- [AudioSpaceMentionedUser](docs/AudioSpaceMentionedUser.md)
- [AudioSpaceMetadata](docs/AudioSpaceMetadata.md)
- [AudioSpaceParticipant](docs/AudioSpaceParticipant.md)
- [AudioSpaceParticipantUser](docs/AudioSpaceParticipantUser.md)
- [AudioSpaceParticipantUserResults](docs/AudioSpaceParticipantUserResults.md)
- [AudioSpaceParticipantVerification](docs/AudioSpaceParticipantVerification.md)
- [AudioSpaceParticipants](docs/AudioSpaceParticipants.md)
- [AudioSpaceResponse](docs/AudioSpaceResponse.md)
- [AudioSpaceSharings](docs/AudioSpaceSharings.md)
- [AuthenticatePeriscopeResponse](docs/AuthenticatePeriscopeResponse.md)
- [AuthenticatePeriscopeResponseData](docs/AuthenticatePeriscopeResponseData.md)
- [AuthorCommunityRelationship](docs/AuthorCommunityRelationship.md)
- [BadgeCounts](docs/BadgeCounts.md)
- [BirdwatchAliasSelfSelectStatus](docs/BirdwatchAliasSelfSelectStatus.md)
- [BirdwatchEntity](docs/BirdwatchEntity.md)
- [BirdwatchEntityRef](docs/BirdwatchEntityRef.md)
- [BirdwatchFetchAliasSelfSelectStatusResponse](docs/BirdwatchFetchAliasSelfSelectStatusResponse.md)
- [BirdwatchFetchAliasSelfSelectStatusResponseData](docs/BirdwatchFetchAliasSelfSelectStatusResponseData.md)
- [BirdwatchFetchAuthenticatedUserProfileResponse](docs/BirdwatchFetchAuthenticatedUserProfileResponse.md)
- [BirdwatchFetchAuthenticatedUserProfileResponseData](docs/BirdwatchFetchAuthenticatedUserProfileResponseData.md)
- [BirdwatchFetchBirdwatchProfileResponse](docs/BirdwatchFetchBirdwatchProfileResponse.md)
- [BirdwatchFetchBirdwatchProfileResponseData](docs/BirdwatchFetchBirdwatchProfileResponseData.md)
- [BirdwatchFetchGlobalTimelineResponse](docs/BirdwatchFetchGlobalTimelineResponse.md)
- [BirdwatchFetchGlobalTimelineResponseData](docs/BirdwatchFetchGlobalTimelineResponseData.md)
- [BirdwatchFetchPublicDataResponse](docs/BirdwatchFetchPublicDataResponse.md)
- [BirdwatchFetchPublicDataResponseData](docs/BirdwatchFetchPublicDataResponseData.md)
- [BirdwatchHomePage](docs/BirdwatchHomePage.md)
- [BirdwatchHomePageBody](docs/BirdwatchHomePageBody.md)
- [BirdwatchHomeTimeline](docs/BirdwatchHomeTimeline.md)
- [BirdwatchPivot](docs/BirdwatchPivot.md)
- [BirdwatchPivotCallToAction](docs/BirdwatchPivotCallToAction.md)
- [BirdwatchPivotFooter](docs/BirdwatchPivotFooter.md)
- [BirdwatchPivotNote](docs/BirdwatchPivotNote.md)
- [BirdwatchPivotSubtitle](docs/BirdwatchPivotSubtitle.md)
- [BirdwatchProfile](docs/BirdwatchProfile.md)
- [BirdwatchPublicDataFile](docs/BirdwatchPublicDataFile.md)
- [BirdwatchPublicDataFileBundle](docs/BirdwatchPublicDataFileBundle.md)
- [BirdwatchViewer](docs/BirdwatchViewer.md)
- [BookmarkSearch](docs/BookmarkSearch.md)
- [BookmarkSearchTimelineResponse](docs/BookmarkSearchTimelineResponse.md)
- [BookmarkSearchTimelineResponseData](docs/BookmarkSearchTimelineResponseData.md)
- [BookmarksResponse](docs/BookmarksResponse.md)
- [BookmarksResponseData](docs/BookmarksResponseData.md)
- [BookmarksTimeline](docs/BookmarksTimeline.md)
- [Broadcast](docs/Broadcast.md)
- [BroadcastData](docs/BroadcastData.md)
- [BroadcastEditedReplay](docs/BroadcastEditedReplay.md)
- [BroadcastPeriscopeUser](docs/BroadcastPeriscopeUser.md)
- [BroadcastResponse](docs/BroadcastResponse.md)
- [Callback](docs/Callback.md)
- [CashtagAttachment](docs/CashtagAttachment.md)
- [CashtagInfo](docs/CashtagInfo.md)
- [ClickTrackingInfo](docs/ClickTrackingInfo.md)
- [ClientEventInfo](docs/ClientEventInfo.md)
- [ClientEventInfoDetails](docs/ClientEventInfoDetails.md)
- [CommunitiesActions](docs/CommunitiesActions.md)
- [CommunitiesFetchOneQueryResponse](docs/CommunitiesFetchOneQueryResponse.md)
- [CommunitiesFetchOneQueryResponseData](docs/CommunitiesFetchOneQueryResponseData.md)
- [CommunitiesSearchQueryResponse](docs/CommunitiesSearchQueryResponse.md)
- [CommunitiesSearchQueryResponseData](docs/CommunitiesSearchQueryResponseData.md)
- [CommunitiesSearchSlice](docs/CommunitiesSearchSlice.md)
- [Community](docs/Community.md)
- [CommunityAboutTimelineResponse](docs/CommunityAboutTimelineResponse.md)
- [CommunityActions](docs/CommunityActions.md)
- [CommunityBannerMedia](docs/CommunityBannerMedia.md)
- [CommunityBannerMediaInfo](docs/CommunityBannerMediaInfo.md)
- [CommunityDeleteActionResult](docs/CommunityDeleteActionResult.md)
- [CommunityDiscoveryTimelineResponse](docs/CommunityDiscoveryTimelineResponse.md)
- [CommunityDiscoveryTimelineResponseData](docs/CommunityDiscoveryTimelineResponseData.md)
- [CommunityDiscoveryTimelineViewer](docs/CommunityDiscoveryTimelineViewer.md)
- [CommunityFacepileUser](docs/CommunityFacepileUser.md)
- [CommunityFacepileUserResults](docs/CommunityFacepileUserResults.md)
- [CommunityHashtag](docs/CommunityHashtag.md)
- [CommunityHashtagSlice](docs/CommunityHashtagSlice.md)
- [CommunityIdUserResults](docs/CommunityIdUserResults.md)
- [CommunityInvitesResult](docs/CommunityInvitesResult.md)
- [CommunityJoinAction](docs/CommunityJoinAction.md)
- [CommunityJoinActionResultUnion](docs/CommunityJoinActionResultUnion.md)
- [CommunityJoinActionUnavailable](docs/CommunityJoinActionUnavailable.md)
- [CommunityJoinRequestsResult](docs/CommunityJoinRequestsResult.md)
- [CommunityLeaveActionResult](docs/CommunityLeaveActionResult.md)
- [CommunityListMembersActionResult](docs/CommunityListMembersActionResult.md)
- [CommunityMediaTimelineResponse](docs/CommunityMediaTimelineResponse.md)
- [CommunityModerationState](docs/CommunityModerationState.md)
- [CommunityPageActions](docs/CommunityPageActions.md)
- [CommunityPageCommunity](docs/CommunityPageCommunity.md)
- [CommunityPageDeleteActionResult](docs/CommunityPageDeleteActionResult.md)
- [CommunityPageInvitesResult](docs/CommunityPageInvitesResult.md)
- [CommunityPageJoinActionResult](docs/CommunityPageJoinActionResult.md)
- [CommunityPageLeaveActionResult](docs/CommunityPageLeaveActionResult.md)
- [CommunityPagePinActionResult](docs/CommunityPagePinActionResult.md)
- [CommunityPageResults](docs/CommunityPageResults.md)
- [CommunityPinActionResult](docs/CommunityPinActionResult.md)
- [CommunityPrimaryTopicName](docs/CommunityPrimaryTopicName.md)
- [CommunityQueryResponse](docs/CommunityQueryResponse.md)
- [CommunityQueryResponseData](docs/CommunityQueryResponseData.md)
- [CommunityRelationship](docs/CommunityRelationship.md)
- [CommunityRelayRule](docs/CommunityRelayRule.md)
- [CommunityResult](docs/CommunityResult.md)
- [CommunityRule](docs/CommunityRule.md)
- [CommunitySearchCommunity](docs/CommunitySearchCommunity.md)
- [CommunitySearchResults](docs/CommunitySearchResults.md)
- [CommunitySettingsActions](docs/CommunitySettingsActions.md)
- [CommunitySettingsCommunity](docs/CommunitySettingsCommunity.md)
- [CommunitySettingsCreator](docs/CommunitySettingsCreator.md)
- [CommunitySettingsCreatorCore](docs/CommunitySettingsCreatorCore.md)
- [CommunitySettingsCreatorResults](docs/CommunitySettingsCreatorResults.md)
- [CommunitySettingsCreatorVerification](docs/CommunitySettingsCreatorVerification.md)
- [CommunitySettingsInvitesResult](docs/CommunitySettingsInvitesResult.md)
- [CommunitySettingsResults](docs/CommunitySettingsResults.md)
- [CommunitySubtopic](docs/CommunitySubtopic.md)
- [CommunityTopic](docs/CommunityTopic.md)
- [CommunityTopicResults](docs/CommunityTopicResults.md)
- [CommunityTweetsTimelineResponse](docs/CommunityTweetsTimelineResponse.md)
- [CommunityUnavailable](docs/CommunityUnavailable.md)
- [CommunityUnion](docs/CommunityUnion.md)
- [CommunityUnpinActionResult](docs/CommunityUnpinActionResult.md)
- [CommunityUrls](docs/CommunityUrls.md)
- [CommunityUrlsPermalink](docs/CommunityUrlsPermalink.md)
- [CommunityViewerRelationship](docs/CommunityViewerRelationship.md)
- [ConnectTabTimelineResponse](docs/ConnectTabTimelineResponse.md)
- [ConnectTabTimelineResponseData](docs/ConnectTabTimelineResponseData.md)
- [ContentDisclosure](docs/ContentDisclosure.md)
- [ContentDisclosureAdvertisingDisclosure](docs/ContentDisclosureAdvertisingDisclosure.md)
- [ContentDisclosureAiGeneratedDisclosure](docs/ContentDisclosureAiGeneratedDisclosure.md)
- [ContentEntryType](docs/ContentEntryType.md)
- [ContentItemType](docs/ContentItemType.md)
- [ContentUnion](docs/ContentUnion.md)
- [ConversationControl](docs/ConversationControl.md)
- [ConversationDetails](docs/ConversationDetails.md)
- [ConversationMetadata](docs/ConversationMetadata.md)
- [ConversationOwner](docs/ConversationOwner.md)
- [ConversationOwnerCore](docs/ConversationOwnerCore.md)
- [ConversationOwnerResults](docs/ConversationOwnerResults.md)
- [CoverCta](docs/CoverCta.md)
- [CreateBookmarkResponse](docs/CreateBookmarkResponse.md)
- [CreateBookmarkResponseData](docs/CreateBookmarkResponseData.md)
- [CreateDraftTweetResponse](docs/CreateDraftTweetResponse.md)
- [CreateDraftTweetResponseData](docs/CreateDraftTweetResponseData.md)
- [CreateDraftTweetResponseTweet](docs/CreateDraftTweetResponseTweet.md)
- [CreateRetweet](docs/CreateRetweet.md)
- [CreateRetweetResponse](docs/CreateRetweetResponse.md)
- [CreateRetweetResponseData](docs/CreateRetweetResponseData.md)
- [CreateRetweetResponseResult](docs/CreateRetweetResponseResult.md)
- [CreateTweet](docs/CreateTweet.md)
- [CreateTweetResponse](docs/CreateTweetResponse.md)
- [CreateTweetResponseData](docs/CreateTweetResponseData.md)
- [CreateTweetResponseResult](docs/CreateTweetResponseResult.md)
- [CreatorStudioTabBarItemQueryResponse](docs/CreatorStudioTabBarItemQueryResponse.md)
- [CreatorStudioTabBarItemQueryResponseData](docs/CreatorStudioTabBarItemQueryResponseData.md)
- [CtaClientEventInfo](docs/CtaClientEventInfo.md)
- [CtaLimitedActionPrompt](docs/CtaLimitedActionPrompt.md)
- [CtaLimitedActionPromptText](docs/CtaLimitedActionPromptText.md)
- [CursorType](docs/CursorType.md)
- [DataSaverModeResponse](docs/DataSaverModeResponse.md)
- [DataSaverModeResponseData](docs/DataSaverModeResponseData.md)
- [DeepsearchHeader](docs/DeepsearchHeader.md)
- [DeepsearchStep](docs/DeepsearchStep.md)
- [DeepsearchWebResult](docs/DeepsearchWebResult.md)
- [DeleteBookmarkResponse](docs/DeleteBookmarkResponse.md)
- [DeleteBookmarkResponseData](docs/DeleteBookmarkResponseData.md)
- [DeleteDraftTweetsResponse](docs/DeleteDraftTweetsResponse.md)
- [DeleteDraftTweetsResponseData](docs/DeleteDraftTweetsResponseData.md)
- [DeleteListResponse](docs/DeleteListResponse.md)
- [DeleteListResponseData](docs/DeleteListResponseData.md)
- [DeleteRetweet](docs/DeleteRetweet.md)
- [DeleteRetweetResponse](docs/DeleteRetweetResponse.md)
- [DeleteRetweetResponseData](docs/DeleteRetweetResponseData.md)
- [DeleteRetweetResponseResult](docs/DeleteRetweetResponseResult.md)
- [DeleteTweetResponse](docs/DeleteTweetResponse.md)
- [DeleteTweetResponseData](docs/DeleteTweetResponseData.md)
- [DeleteTweetResponseResult](docs/DeleteTweetResponseResult.md)
- [DisplayTreatment](docs/DisplayTreatment.md)
- [DisplayType](docs/DisplayType.md)
- [DraftList](docs/DraftList.md)
- [DraftTweet](docs/DraftTweet.md)
- [DraftTweetCreateRequest](docs/DraftTweetCreateRequest.md)
- [DraftTweetUser](docs/DraftTweetUser.md)
- [DraftTweetUserResults](docs/DraftTweetUserResults.md)
- [DraftTweetsViewer](docs/DraftTweetsViewer.md)
- [Entities](docs/Entities.md)
- [ErrorExtensions](docs/ErrorExtensions.md)
- [ErrorResponse](docs/ErrorResponse.md)
- [ErrorResponsePathInner](docs/ErrorResponsePathInner.md)
- [EventSummaryAdMetadataContainer](docs/EventSummaryAdMetadataContainer.md)
- [EventSummaryEvent](docs/EventSummaryEvent.md)
- [EventSummaryMedia](docs/EventSummaryMedia.md)
- [EventSummaryMediaEntity](docs/EventSummaryMediaEntity.md)
- [EventSummaryMediaKey](docs/EventSummaryMediaKey.md)
- [EventSummaryPromotedMetadata](docs/EventSummaryPromotedMetadata.md)
- [ExplorePage](docs/ExplorePage.md)
- [ExplorePageBody](docs/ExplorePageBody.md)
- [ExplorePageResponse](docs/ExplorePageResponse.md)
- [ExplorePageResponseData](docs/ExplorePageResponseData.md)
- [ExploreSidebarResponse](docs/ExploreSidebarResponse.md)
- [ExploreSidebarResponseData](docs/ExploreSidebarResponseData.md)
- [ExploreTimeline](docs/ExploreTimeline.md)
- [ExploreTimelineScribeConfig](docs/ExploreTimelineScribeConfig.md)
- [ExtMediaAvailability](docs/ExtMediaAvailability.md)
- [ExtendedEntities](docs/ExtendedEntities.md)
- [FavoriteTweet](docs/FavoriteTweet.md)
- [FavoriteTweetResponse](docs/FavoriteTweetResponse.md)
- [FeedbackAction](docs/FeedbackAction.md)
- [FeedbackActionEntry](docs/FeedbackActionEntry.md)
- [FeedbackClientEventInfo](docs/FeedbackClientEventInfo.md)
- [FeedbackInfo](docs/FeedbackInfo.md)
- [FetchDraftTweetsResponse](docs/FetchDraftTweetsResponse.md)
- [FetchDraftTweetsResponseData](docs/FetchDraftTweetsResponseData.md)
- [FetchScheduledTweetsResponse](docs/FetchScheduledTweetsResponse.md)
- [FetchScheduledTweetsResponseData](docs/FetchScheduledTweetsResponseData.md)
- [FollowResponse](docs/FollowResponse.md)
- [FollowResponseData](docs/FollowResponseData.md)
- [FollowResponseResult](docs/FollowResponseResult.md)
- [FollowResponseUser](docs/FollowResponseUser.md)
- [FollowTimeline](docs/FollowTimeline.md)
- [GenericTimelineByIdResponse](docs/GenericTimelineByIdResponse.md)
- [GenericTimelineByIdResponseData](docs/GenericTimelineByIdResponseData.md)
- [GlobalCommunitiesLatestPostSearch](docs/GlobalCommunitiesLatestPostSearch.md)
- [GlobalCommunitiesLatestPostSearchTimelineResponse](docs/GlobalCommunitiesLatestPostSearchTimelineResponse.md)
- [GlobalCommunitiesLatestPostSearchTimelineResponseData](docs/GlobalCommunitiesLatestPostSearchTimelineResponseData.md)
- [GlobalCommunitiesPostSearch](docs/GlobalCommunitiesPostSearch.md)
- [GlobalCommunitiesPostSearchTimelineResponse](docs/GlobalCommunitiesPostSearchTimelineResponse.md)
- [GlobalCommunitiesPostSearchTimelineResponseData](docs/GlobalCommunitiesPostSearchTimelineResponseData.md)
- [GrokAccountJwt](docs/GrokAccountJwt.md)
- [GrokAccountJwtData](docs/GrokAccountJwtData.md)
- [GrokAccountJwtResponse](docs/GrokAccountJwtResponse.md)
- [GrokAnnotation](docs/GrokAnnotation.md)
- [GrokEntity](docs/GrokEntity.md)
- [GrokEntityRef](docs/GrokEntityRef.md)
- [GrokHome](docs/GrokHome.md)
- [GrokHomeLayout](docs/GrokHomeLayout.md)
- [GrokHomeLayoutSection](docs/GrokHomeLayoutSection.md)
- [GrokHomePrompt](docs/GrokHomePrompt.md)
- [GrokHomeResponse](docs/GrokHomeResponse.md)
- [GrokHomeResponseData](docs/GrokHomeResponseData.md)
- [GrokImageAnnotation](docs/GrokImageAnnotation.md)
- [GrokModelOption](docs/GrokModelOption.md)
- [GrokShareAttachment](docs/GrokShareAttachment.md)
- [GrokShareAttachmentItem](docs/GrokShareAttachmentItem.md)
- [GrokTranslatedBio](docs/GrokTranslatedBio.md)
- [GrokTranslatedBioWithAvailability](docs/GrokTranslatedBioWithAvailability.md)
- [GrokTranslatedCommunityNote](docs/GrokTranslatedCommunityNote.md)
- [GrokTranslatedCommunityNoteWithAvailability](docs/GrokTranslatedCommunityNoteWithAvailability.md)
- [GrokTranslatedPost](docs/GrokTranslatedPost.md)
- [GrokTranslatedPostWithAvailability](docs/GrokTranslatedPostWithAvailability.md)
- [GroupedTrend](docs/GroupedTrend.md)
- [Hashtag](docs/Hashtag.md)
- [Highlight](docs/Highlight.md)
- [HomeTimelineHome](docs/HomeTimelineHome.md)
- [HomeTimelineResponseData](docs/HomeTimelineResponseData.md)
- [IdentityProfileLabelsHighlightedLabel](docs/IdentityProfileLabelsHighlightedLabel.md)
- [InstructionType](docs/InstructionType.md)
- [InstructionUnion](docs/InstructionUnion.md)
- [ItemContentUnion](docs/ItemContentUnion.md)
- [ItemResult](docs/ItemResult.md)
- [JetfuelAttachment](docs/JetfuelAttachment.md)
- [KeyValue](docs/KeyValue.md)
- [LandingUrl](docs/LandingUrl.md)
- [LimitedAction](docs/LimitedAction.md)
- [LimitedActionResults](docs/LimitedActionResults.md)
- [LimitedActionResultsData](docs/LimitedActionResultsData.md)
- [ListBannerMedia](docs/ListBannerMedia.md)
- [ListBannerMediaInfo](docs/ListBannerMediaInfo.md)
- [ListBannerMediaResults](docs/ListBannerMediaResults.md)
- [ListLatestTweetsTimelineResponse](docs/ListLatestTweetsTimelineResponse.md)
- [ListMembersList](docs/ListMembersList.md)
- [ListMembersResponse](docs/ListMembersResponse.md)
- [ListMembersResponseData](docs/ListMembersResponseData.md)
- [ListRecommendedUsersList](docs/ListRecommendedUsersList.md)
- [ListRecommendedUsersResponse](docs/ListRecommendedUsersResponse.md)
- [ListRecommendedUsersResponseData](docs/ListRecommendedUsersResponseData.md)
- [ListResponse](docs/ListResponse.md)
- [ListResponseData](docs/ListResponseData.md)
- [ListSearch](docs/ListSearch.md)
- [ListSearchTimelineResponse](docs/ListSearchTimelineResponse.md)
- [ListSearchTimelineResponseData](docs/ListSearchTimelineResponseData.md)
- [ListSubscribersList](docs/ListSubscribersList.md)
- [ListSubscribersResponse](docs/ListSubscribersResponse.md)
- [ListSubscribersResponseData](docs/ListSubscribersResponseData.md)
- [ListTweetsTimelineData](docs/ListTweetsTimelineData.md)
- [ListTweetsTimelineList](docs/ListTweetsTimelineList.md)
- [ListsManagementPageTimelineResponse](docs/ListsManagementPageTimelineResponse.md)
- [ListsManagementPageTimelineResponseData](docs/ListsManagementPageTimelineResponseData.md)
- [ListsManagementViewer](docs/ListsManagementViewer.md)
- [Location](docs/Location.md)
- [Media](docs/Media.md)
- [MediaColorInfo](docs/MediaColorInfo.md)
- [MediaColorInfoPalette](docs/MediaColorInfoPalette.md)
- [MediaColorInfoPaletteRGB](docs/MediaColorInfoPaletteRGB.md)
- [MediaCommunityResult](docs/MediaCommunityResult.md)
- [MediaCommunityResults](docs/MediaCommunityResults.md)
- [MediaCommunityTweetData](docs/MediaCommunityTweetData.md)
- [MediaExtended](docs/MediaExtended.md)
- [MediaOriginalInfo](docs/MediaOriginalInfo.md)
- [MediaOriginalInfoFocusRect](docs/MediaOriginalInfoFocusRect.md)
- [MediaResult](docs/MediaResult.md)
- [MediaResults](docs/MediaResults.md)
- [MediaSalientRect](docs/MediaSalientRect.md)
- [MediaSize](docs/MediaSize.md)
- [MediaSizes](docs/MediaSizes.md)
- [MediaStats](docs/MediaStats.md)
- [MediaVideoInfo](docs/MediaVideoInfo.md)
- [MediaVideoInfoVariant](docs/MediaVideoInfoVariant.md)
- [MediaVisibilityResults](docs/MediaVisibilityResults.md)
- [MediaVisibilityResultsBlurredImageInterstitial](docs/MediaVisibilityResultsBlurredImageInterstitial.md)
- [ModuleEntry](docs/ModuleEntry.md)
- [ModuleFooter](docs/ModuleFooter.md)
- [ModuleHeader](docs/ModuleHeader.md)
- [ModuleItem](docs/ModuleItem.md)
- [ModuleMetadata](docs/ModuleMetadata.md)
- [NoteTweet](docs/NoteTweet.md)
- [NoteTweetResult](docs/NoteTweetResult.md)
- [NoteTweetResultData](docs/NoteTweetResultData.md)
- [NoteTweetResultMedia](docs/NoteTweetResultMedia.md)
- [NoteTweetResultMediaInlineMedia](docs/NoteTweetResultMediaInlineMedia.md)
- [NoteTweetResultRichText](docs/NoteTweetResultRichText.md)
- [NoteTweetResultRichTextTag](docs/NoteTweetResultRichTextTag.md)
- [NotificationDetails](docs/NotificationDetails.md)
- [NotificationTemplate](docs/NotificationTemplate.md)
- [NotificationsResult](docs/NotificationsResult.md)
- [NotificationsTimelineData](docs/NotificationsTimelineData.md)
- [NotificationsTimelineResponse](docs/NotificationsTimelineResponse.md)
- [NotificationsUserResults](docs/NotificationsUserResults.md)
- [NotificationsViewerV2](docs/NotificationsViewerV2.md)
- [OneFactorLoginEligibility](docs/OneFactorLoginEligibility.md)
- [OtherObjectAll](docs/OtherObjectAll.md)
- [PinnedTimelines](docs/PinnedTimelines.md)
- [PinnedTimelinesResponse](docs/PinnedTimelinesResponse.md)
- [PinnedTimelinesResponseData](docs/PinnedTimelinesResponseData.md)
- [PostCreateBookmarkRequest](docs/PostCreateBookmarkRequest.md)
- [PostCreateBookmarkRequestVariables](docs/PostCreateBookmarkRequestVariables.md)
- [PostCreateDraftTweetRequest](docs/PostCreateDraftTweetRequest.md)
- [PostCreateDraftTweetRequestVariables](docs/PostCreateDraftTweetRequestVariables.md)
- [PostCreateDraftTweetRequestVariablesPostTweetRequest](docs/PostCreateDraftTweetRequestVariablesPostTweetRequest.md)
- [PostCreateListRequest](docs/PostCreateListRequest.md)
- [PostCreateListRequestFeatures](docs/PostCreateListRequestFeatures.md)
- [PostCreateListRequestVariables](docs/PostCreateListRequestVariables.md)
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
- [PostDeleteDraftTweetsRequest](docs/PostDeleteDraftTweetsRequest.md)
- [PostDeleteDraftTweetsRequestVariables](docs/PostDeleteDraftTweetsRequestVariables.md)
- [PostDeleteListRequest](docs/PostDeleteListRequest.md)
- [PostDeleteListRequestVariables](docs/PostDeleteListRequestVariables.md)
- [PostDeleteRetweetRequest](docs/PostDeleteRetweetRequest.md)
- [PostDeleteRetweetRequestVariables](docs/PostDeleteRetweetRequestVariables.md)
- [PostDeleteTweetRequest](docs/PostDeleteTweetRequest.md)
- [PostFavoriteTweetRequest](docs/PostFavoriteTweetRequest.md)
- [PostListAddMemberRequest](docs/PostListAddMemberRequest.md)
- [PostListAddMemberRequestVariables](docs/PostListAddMemberRequestVariables.md)
- [PostListRemoveMemberRequest](docs/PostListRemoveMemberRequest.md)
- [PostUnfavoriteTweetRequest](docs/PostUnfavoriteTweetRequest.md)
- [PrimaryCommunityTopic](docs/PrimaryCommunityTopic.md)
- [ProfileBio](docs/ProfileBio.md)
- [ProfileBioEntities](docs/ProfileBioEntities.md)
- [ProfileBioEntitiesUrls](docs/ProfileBioEntitiesUrls.md)
- [ProfileResponse](docs/ProfileResponse.md)
- [ProfileResponseData](docs/ProfileResponseData.md)
- [PromotedMetadata](docs/PromotedMetadata.md)
- [PromotedTrend](docs/PromotedTrend.md)
- [QuotedRefResult](docs/QuotedRefResult.md)
- [QuotedStatusPermalink](docs/QuotedStatusPermalink.md)
- [RankedCommunityResult](docs/RankedCommunityResult.md)
- [RankedCommunityResults](docs/RankedCommunityResults.md)
- [RankedCommunityTweetData](docs/RankedCommunityTweetData.md)
- [ReaderModeConfig](docs/ReaderModeConfig.md)
- [Retweet](docs/Retweet.md)
- [RetweetLegacy](docs/RetweetLegacy.md)
- [RichMessage](docs/RichMessage.md)
- [RichMessageEntity](docs/RichMessageEntity.md)
- [RichMessageEntityRef](docs/RichMessageEntityRef.md)
- [ScheduledTweetsViewer](docs/ScheduledTweetsViewer.md)
- [ScribeConfig](docs/ScribeConfig.md)
- [SearchByRawQuery](docs/SearchByRawQuery.md)
- [SearchTimeline](docs/SearchTimeline.md)
- [SearchTimelineData](docs/SearchTimelineData.md)
- [SearchTimelineResponse](docs/SearchTimelineResponse.md)
- [SelfThread](docs/SelfThread.md)
- [SensitiveMediaWarning](docs/SensitiveMediaWarning.md)
- [Session](docs/Session.md)
- [SidebarUserRecommendation](docs/SidebarUserRecommendation.md)
- [SidebarUserRecommendationsData](docs/SidebarUserRecommendationsData.md)
- [SidebarUserRecommendationsResponse](docs/SidebarUserRecommendationsResponse.md)
- [SliceInfo](docs/SliceInfo.md)
- [Smarttag](docs/Smarttag.md)
- [SmarttagTag](docs/SmarttagTag.md)
- [SmarttagTagInfo](docs/SmarttagTagInfo.md)
- [SocialContextLandingUrl](docs/SocialContextLandingUrl.md)
- [SocialContextUnion](docs/SocialContextUnion.md)
- [SocialContextUnionType](docs/SocialContextUnionType.md)
- [StoryTopic](docs/StoryTopic.md)
- [StoryTopicData](docs/StoryTopicData.md)
- [StoryTopicItem](docs/StoryTopicItem.md)
- [StoryTopicResponse](docs/StoryTopicResponse.md)
- [StoryTopicStories](docs/StoryTopicStories.md)
- [SuperFollowUserProfile](docs/SuperFollowUserProfile.md)
- [SuperFollowsReplyUserResult](docs/SuperFollowsReplyUserResult.md)
- [SuperFollowsReplyUserResultCore](docs/SuperFollowsReplyUserResultCore.md)
- [SuperFollowsReplyUserResultData](docs/SuperFollowsReplyUserResultData.md)
- [SuperFollowsReplyUserResultLegacy](docs/SuperFollowsReplyUserResultLegacy.md)
- [Symbol](docs/Symbol.md)
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
- [TimelineEventSummary](docs/TimelineEventSummary.md)
- [TimelineFrame](docs/TimelineFrame.md)
- [TimelineGeneralContext](docs/TimelineGeneralContext.md)
- [TimelineHalfCover](docs/TimelineHalfCover.md)
- [TimelineLabel](docs/TimelineLabel.md)
- [TimelineMarkEntriesUnreadGreaterThanSortIndex](docs/TimelineMarkEntriesUnreadGreaterThanSortIndex.md)
- [TimelineMessagePrompt](docs/TimelineMessagePrompt.md)
- [TimelineMessagePromptButton](docs/TimelineMessagePromptButton.md)
- [TimelineMessagePromptButtonAction](docs/TimelineMessagePromptButtonAction.md)
- [TimelineMessagePromptContent](docs/TimelineMessagePromptContent.md)
- [TimelineMessagePromptRichText](docs/TimelineMessagePromptRichText.md)
- [TimelineMessagePromptRichTextEntity](docs/TimelineMessagePromptRichTextEntity.md)
- [TimelineMessagePromptRichTextEntityRef](docs/TimelineMessagePromptRichTextEntityRef.md)
- [TimelineMetadata](docs/TimelineMetadata.md)
- [TimelineNotification](docs/TimelineNotification.md)
- [TimelinePinEntry](docs/TimelinePinEntry.md)
- [TimelinePrompt](docs/TimelinePrompt.md)
- [TimelinePromptCallback](docs/TimelinePromptCallback.md)
- [TimelinePromptContent](docs/TimelinePromptContent.md)
- [TimelineReplaceEntry](docs/TimelineReplaceEntry.md)
- [TimelineResponse](docs/TimelineResponse.md)
- [TimelineResponseObjects](docs/TimelineResponseObjects.md)
- [TimelineResult](docs/TimelineResult.md)
- [TimelineShowAlert](docs/TimelineShowAlert.md)
- [TimelineShowAlertColorConfig](docs/TimelineShowAlertColorConfig.md)
- [TimelineShowAlertIconDisplayInfo](docs/TimelineShowAlertIconDisplayInfo.md)
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
- [TimelineTwitterList](docs/TimelineTwitterList.md)
- [TimelineUser](docs/TimelineUser.md)
- [TimelinesDetails](docs/TimelinesDetails.md)
- [Timestamp](docs/Timestamp.md)
- [TombstoneEntity](docs/TombstoneEntity.md)
- [TombstoneInfo](docs/TombstoneInfo.md)
- [TombstoneRef](docs/TombstoneRef.md)
- [TombstoneRichText](docs/TombstoneRichText.md)
- [TopicCarouselQueryResponse](docs/TopicCarouselQueryResponse.md)
- [TopicCarouselQueryResponseData](docs/TopicCarouselQueryResponseData.md)
- [TopicContext](docs/TopicContext.md)
- [Tracing](docs/Tracing.md)
- [TrendImage](docs/TrendImage.md)
- [TrendMetadata](docs/TrendMetadata.md)
- [TrendPromotedMetadata](docs/TrendPromotedMetadata.md)
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
- [TweetLegacyPlace](docs/TweetLegacyPlace.md)
- [TweetLegacyPlaceBoundingBox](docs/TweetLegacyPlaceBoundingBox.md)
- [TweetLegacyPoint](docs/TweetLegacyPoint.md)
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
- [TwitterList](docs/TwitterList.md)
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
- [UserLabel](docs/UserLabel.md)
- [UserLabelBadge](docs/UserLabelBadge.md)
- [UserLabelMentionResults](docs/UserLabelMentionResults.md)
- [UserLabelMentionUser](docs/UserLabelMentionUser.md)
- [UserLabelMentionUserCore](docs/UserLabelMentionUserCore.md)
- [UserLabelText](docs/UserLabelText.md)
- [UserLabelTextEntity](docs/UserLabelTextEntity.md)
- [UserLabelTextEntityRef](docs/UserLabelTextEntityRef.md)
- [UserLabelUrl](docs/UserLabelUrl.md)
- [UserLegacy](docs/UserLegacy.md)
- [UserLegacyExtendedProfile](docs/UserLegacyExtendedProfile.md)
- [UserLegacyExtendedProfileBirthdate](docs/UserLegacyExtendedProfileBirthdate.md)
- [UserLocation](docs/UserLocation.md)
- [UserMediaPermissions](docs/UserMediaPermissions.md)
- [UserMention](docs/UserMention.md)
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
- [UsersVerifiedAvatarsResponse](docs/UsersVerifiedAvatarsResponse.md)
- [UsersVerifiedAvatarsResponseData](docs/UsersVerifiedAvatarsResponseData.md)
- [VerifiedAvatarUser](docs/VerifiedAvatarUser.md)
- [VerifiedAvatarUserResults](docs/VerifiedAvatarUserResults.md)
- [ViewerBadgeCountsResponse](docs/ViewerBadgeCountsResponse.md)
- [ViewerBadgeCountsResponseData](docs/ViewerBadgeCountsResponseData.md)
- [ViewerBadgeCountsResult](docs/ViewerBadgeCountsResult.md)
- [ViewerBadgeCountsUserResults](docs/ViewerBadgeCountsUserResults.md)
- [ViewerBadgeCountsViewer](docs/ViewerBadgeCountsViewer.md)

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
- Package version: `0.1.3`
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
