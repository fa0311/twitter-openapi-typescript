
# CommunitySettingsCommunity


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`actions` | [CommunitySettingsActions](CommunitySettingsActions.md)
`createdAt` | number
`creatorResults` | [CommunitySettingsCreatorResults](CommunitySettingsCreatorResults.md)
`customBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`defaultBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`description` | string
`id` | string
`invitesResult` | [CommunitySettingsInvitesResult](CommunitySettingsInvitesResult.md)
`isMember` | boolean
`isNsfw` | boolean
`joinPolicy` | string
`joinRequestsResult` | [CommunityJoinRequestsResult](CommunityJoinRequestsResult.md)
`memberCount` | number
`membersFacepileResults` | [Array&lt;CommunityFacepileUserResults&gt;](CommunityFacepileUserResults.md)
`name` | string
`primaryCommunityTopic` | [CommunityPrimaryTopicName](CommunityPrimaryTopicName.md)
`restId` | string
`role` | string
`rules` | [Array&lt;CommunityRelayRule&gt;](CommunityRelayRule.md)
`trendingHashtagsSlice` | [CommunityHashtagSlice](CommunityHashtagSlice.md)

## Example

```typescript
import type { CommunitySettingsCommunity } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "actions": null,
  "createdAt": null,
  "creatorResults": null,
  "customBannerMedia": null,
  "defaultBannerMedia": null,
  "description": null,
  "id": null,
  "invitesResult": null,
  "isMember": null,
  "isNsfw": null,
  "joinPolicy": null,
  "joinRequestsResult": null,
  "memberCount": null,
  "membersFacepileResults": null,
  "name": null,
  "primaryCommunityTopic": null,
  "restId": null,
  "role": null,
  "rules": null,
  "trendingHashtagsSlice": null,
} satisfies CommunitySettingsCommunity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunitySettingsCommunity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


