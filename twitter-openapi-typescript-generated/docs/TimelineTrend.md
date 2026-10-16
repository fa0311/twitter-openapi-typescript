
# TimelineTrend


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`description` | string
`groupedTrends` | [Array&lt;GroupedTrend&gt;](GroupedTrend.md)
`images` | [Array&lt;TrendImage&gt;](TrendImage.md)
`isAiTrend` | boolean
`itemType` | [ContentItemType](ContentItemType.md)
`name` | string
`promotedMetadata` | [TrendPromotedMetadata](TrendPromotedMetadata.md)
`rank` | string
`socialContext` | [SocialContextUnion](SocialContextUnion.md)
`thumbnailImage` | [ThumbnailImage](ThumbnailImage.md)
`trendMetadata` | [TrendMetadata](TrendMetadata.md)
`trendUrl` | [SocialContextLandingUrl](SocialContextLandingUrl.md)

## Example

```typescript
import type { TimelineTrend } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "description": null,
  "groupedTrends": null,
  "images": null,
  "isAiTrend": null,
  "itemType": null,
  "name": null,
  "promotedMetadata": null,
  "rank": null,
  "socialContext": null,
  "thumbnailImage": null,
  "trendMetadata": null,
  "trendUrl": null,
} satisfies TimelineTrend

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTrend
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


