
# CommunitySearchCommunity


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`customBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`defaultBannerMedia` | [CommunityBannerMedia](CommunityBannerMedia.md)
`id` | string
`isNsfw` | boolean
`memberCount` | number
`membersFacepileResults` | [Array&lt;CommunityFacepileUserResults&gt;](CommunityFacepileUserResults.md)
`name` | string
`primaryCommunityTopic` | [CommunityPrimaryTopicName](CommunityPrimaryTopicName.md)
`restId` | string

## Example

```typescript
import type { CommunitySearchCommunity } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "customBannerMedia": null,
  "defaultBannerMedia": null,
  "id": null,
  "isNsfw": null,
  "memberCount": null,
  "membersFacepileResults": null,
  "name": null,
  "primaryCommunityTopic": null,
  "restId": null,
} satisfies CommunitySearchCommunity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunitySearchCommunity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


