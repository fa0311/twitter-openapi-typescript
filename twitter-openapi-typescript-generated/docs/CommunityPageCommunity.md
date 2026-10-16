
# CommunityPageCommunity


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`actions` | [CommunityPageActions](CommunityPageActions.md)
`adminResults` | [CommunityIdUserResults](CommunityIdUserResults.md)
`createdAt` | number
`creatorResults` | [CommunityIdUserResults](CommunityIdUserResults.md)
`customBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`defaultBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`description` | string
`id` | string
`idStr` | string
`invitesPolicy` | string
`invitesResult` | [CommunityPageInvitesResult](CommunityPageInvitesResult.md)
`isNsfw` | boolean
`isPinned` | boolean
`joinPolicy` | string
`joinRequestsResult` | [CommunityJoinRequestsResult](CommunityJoinRequestsResult.md)
`memberCount` | number
`membersFacepileResults` | [Array&lt;CommunityIdUserResults&gt;](CommunityIdUserResults.md)
`moderatorCount` | number
`name` | string
`role` | string
`rules` | [Array&lt;CommunityRelayRule&gt;](CommunityRelayRule.md)
`searchTags` | Array&lt;string&gt;
`viewerRelationship` | [CommunityViewerRelationship](CommunityViewerRelationship.md)

## Example

```typescript
import type { CommunityPageCommunity } from 'twitter-openapi-typescript-generated'

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
  "id": null,
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
  "role": null,
  "rules": null,
  "searchTags": null,
  "viewerRelationship": null,
} satisfies CommunityPageCommunity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunityPageCommunity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


