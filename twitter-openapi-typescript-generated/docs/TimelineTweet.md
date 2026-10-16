
# TimelineTweet


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`hasModeratedReplies` | boolean
`highlights` | [Highlight](Highlight.md)
`itemType` | [ContentItemType](ContentItemType.md)
`promotedMetadata` | [PromotedMetadata](PromotedMetadata.md)
`socialContext` | [SocialContextUnion](SocialContextUnion.md)
`tweetDisplayType` | string
`tweetResults` | [ItemResult](ItemResult.md)

## Example

```typescript
import type { TimelineTweet } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "hasModeratedReplies": null,
  "highlights": null,
  "itemType": null,
  "promotedMetadata": null,
  "socialContext": null,
  "tweetDisplayType": null,
  "tweetResults": null,
} satisfies TimelineTweet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTweet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


