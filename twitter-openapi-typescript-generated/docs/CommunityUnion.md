
# CommunityUnion


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`actions` | [CommunityActions](CommunityActions.md)
`adminResults` | [UserResults](UserResults.md)
`createdAt` | number
`creatorResults` | [UserResults](UserResults.md)
`customBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`defaultBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`description` | string
`idStr` | string
`invitesPolicy` | string
`invitesResult` | [CommunityInvitesResult](CommunityInvitesResult.md)
`isNsfw` | boolean
`isPinned` | boolean
`joinPolicy` | string
`joinRequestsResult` | [CommunityJoinRequestsResult](CommunityJoinRequestsResult.md)
`memberCount` | number
`membersFacepileResults` | [Array&lt;UserResults&gt;](UserResults.md)
`moderatorCount` | number
`name` | string
`primaryCommunityTopic` | [PrimaryCommunityTopic](PrimaryCommunityTopic.md)
`question` | string
`role` | string
`rules` | [Array&lt;CommunityRule&gt;](CommunityRule.md)
`searchTags` | Array&lt;string&gt;
`showOnlyUsersToDisplay` | Array&lt;string&gt;
`urls` | [CommunityUrls](CommunityUrls.md)
`viewerRelationship` | [CommunityViewerRelationship](CommunityViewerRelationship.md)

## Example

```typescript
import type { CommunityUnion } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "actions": null,
  "adminResults": null,
  "createdAt": null,
  "creatorResults": null,
  "customBannerMedia": null,
  "defaultBannerMedia": null,
  "description": null,
  "idStr": null,
  "invitesPolicy": null,
  "invitesResult": null,
  "isNsfw": null,
  "isPinned": null,
  "joinPolicy": null,
  "joinRequestsResult": null,
  "memberCount": null,
  "membersFacepileResults": null,
  "moderatorCount": null,
  "name": null,
  "primaryCommunityTopic": null,
  "question": null,
  "role": null,
  "rules": null,
  "searchTags": null,
  "showOnlyUsersToDisplay": null,
  "urls": null,
  "viewerRelationship": null,
} satisfies CommunityUnion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunityUnion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


