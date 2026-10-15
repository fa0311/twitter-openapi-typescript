
# User


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`actionCounts` | [UserActionCounts](UserActionCounts.md)
`affiliatesHighlightedLabel` | { [key: string]: any; }
`avatar` | [UserAvatar](UserAvatar.md)
`banner` | [UserBanner](UserBanner.md)
`businessAccount` | { [key: string]: any; }
`core` | [UserCore](UserCore.md)
`creatorSubscriptionsCount` | number
`dmPermissions` | [UserDmPermissions](UserDmPermissions.md)
`followRequestSent` | boolean
`hasGraduatedAccess` | boolean
`hasHiddenLikesOnProfile` | boolean
`hasHiddenSubscriptionsOnProfile` | boolean
`hasNftAvatar` | boolean
`highlightsInfo` | [UserHighlightsInfo](UserHighlightsInfo.md)
`id` | string
`isBlueVerified` | boolean
`isProfileTranslatable` | boolean
`isVerifiedOrganization` | boolean
`legacy` | [UserLegacy](UserLegacy.md)
`legacyExtendedProfile` | [UserLegacyExtendedProfile](UserLegacyExtendedProfile.md)
`location` | [UserLocation](UserLocation.md)
`mediaPermissions` | [UserMediaPermissions](UserMediaPermissions.md)
`notificationsSettings` | [UserNotificationsSettings](UserNotificationsSettings.md)
`parodyCommentaryFanLabel` | string
`pinnedItems` | [UserPinnedItems](UserPinnedItems.md)
`possiblySensitive` | boolean
`premiumGiftingEligible` | boolean
`privacy` | [UserPrivacy](UserPrivacy.md)
`professional` | [UserProfessional](UserProfessional.md)
`profileBio` | [ProfileBio](ProfileBio.md)
`profileDescriptionLanguage` | string
`profileImageShape` | string
`profileMetadata` | [UserProfileMetadata](UserProfileMetadata.md)
`profileSortEnabled` | boolean
`profileTranslation` | [UserProfileTranslation](UserProfileTranslation.md)
`relationshipCounts` | [UserRelationshipCounts](UserRelationshipCounts.md)
`relationshipPerspectives` | [UserRelationshipPerspectives](UserRelationshipPerspectives.md)
`restId` | string
`superFollowEligible` | boolean
`superFollowedBy` | boolean
`superFollowing` | boolean
`superFollowsUserProfile` | [UserProfile](UserProfile.md)
`tipjarSettings` | [UserTipJarSettings](UserTipJarSettings.md)
`tweetCounts` | [UserTweetCounts](UserTweetCounts.md)
`userSeedTweetCount` | number
`verification` | [UserVerification](UserVerification.md)
`verificationInfo` | [UserVerificationInfo](UserVerificationInfo.md)
`verifiedUserProfiles` | [UserProfile](UserProfile.md)
`website` | [UserWebsite](UserWebsite.md)

## Example

```typescript
import type { User } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "actionCounts": null,
  "affiliatesHighlightedLabel": null,
  "avatar": null,
  "banner": null,
  "businessAccount": null,
  "core": null,
  "creatorSubscriptionsCount": null,
  "dmPermissions": null,
  "followRequestSent": null,
  "hasGraduatedAccess": null,
  "hasHiddenLikesOnProfile": null,
  "hasHiddenSubscriptionsOnProfile": null,
  "hasNftAvatar": null,
  "highlightsInfo": null,
  "id": null,
  "isBlueVerified": null,
  "isProfileTranslatable": null,
  "isVerifiedOrganization": null,
  "legacy": null,
  "legacyExtendedProfile": null,
  "location": null,
  "mediaPermissions": null,
  "notificationsSettings": null,
  "parodyCommentaryFanLabel": null,
  "pinnedItems": null,
  "possiblySensitive": null,
  "premiumGiftingEligible": null,
  "privacy": null,
  "professional": null,
  "profileBio": null,
  "profileDescriptionLanguage": null,
  "profileImageShape": null,
  "profileMetadata": null,
  "profileSortEnabled": null,
  "profileTranslation": null,
  "relationshipCounts": null,
  "relationshipPerspectives": null,
  "restId": null,
  "superFollowEligible": null,
  "superFollowedBy": null,
  "superFollowing": null,
  "superFollowsUserProfile": null,
  "tipjarSettings": null,
  "tweetCounts": null,
  "userSeedTweetCount": null,
  "verification": null,
  "verificationInfo": null,
  "verifiedUserProfiles": null,
  "website": null,
} satisfies User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


