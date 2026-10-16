
# UserLegacy


## Properties

Name | Type
------------ | -------------
`blockedBy` | boolean
`blocking` | boolean
`canDm` | boolean
`canMediaTag` | boolean
`createdAt` | string
`defaultProfile` | boolean
`defaultProfileImage` | boolean
`description` | string
`entities` | [ProfileBioEntities](ProfileBioEntities.md)
`fastFollowersCount` | number
`favouritesCount` | number
`followRequestSent` | boolean
`followedBy` | boolean
`followersCount` | number
`following` | boolean
`friendsCount` | number
`hasCustomTimelines` | boolean
`isTranslator` | boolean
`listedCount` | number
`location` | string
`mediaCount` | number
`muting` | boolean
`name` | string
`normalFollowersCount` | number
`notifications` | boolean
`pinnedTweetIdsStr` | Array&lt;string&gt;
`possiblySensitive` | boolean
`profileBannerExtensions` | object
`profileBannerUrl` | string
`profileImageExtensions` | object
`profileImageUrlHttps` | string
`profileInterstitialType` | string
`_protected` | boolean
`screenName` | string
`statusesCount` | number
`timeZone` | string
`translatorType` | string
`url` | string
`utcOffset` | number
`verified` | boolean
`verifiedType` | string
`wantRetweets` | boolean
`withheldDescription` | string
`withheldInCountries` | Array&lt;string&gt;
`withheldScope` | string

## Example

```typescript
import type { UserLegacy } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "blockedBy": null,
  "blocking": null,
  "canDm": null,
  "canMediaTag": null,
  "createdAt": Sat Dec 31 23:59:59 +0000 2023,
  "defaultProfile": null,
  "defaultProfileImage": null,
  "description": null,
  "entities": null,
  "fastFollowersCount": null,
  "favouritesCount": null,
  "followRequestSent": null,
  "followedBy": null,
  "followersCount": null,
  "following": null,
  "friendsCount": null,
  "hasCustomTimelines": null,
  "isTranslator": null,
  "listedCount": null,
  "location": null,
  "mediaCount": null,
  "muting": null,
  "name": null,
  "normalFollowersCount": null,
  "notifications": null,
  "pinnedTweetIdsStr": null,
  "possiblySensitive": null,
  "profileBannerExtensions": null,
  "profileBannerUrl": null,
  "profileImageExtensions": null,
  "profileImageUrlHttps": null,
  "profileInterstitialType": null,
  "_protected": null,
  "screenName": null,
  "statusesCount": null,
  "timeZone": null,
  "translatorType": null,
  "url": null,
  "utcOffset": null,
  "verified": null,
  "verifiedType": null,
  "wantRetweets": null,
  "withheldDescription": null,
  "withheldInCountries": null,
  "withheldScope": null,
} satisfies UserLegacy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserLegacy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


