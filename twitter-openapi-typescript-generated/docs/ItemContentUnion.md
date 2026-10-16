
# ItemContentUnion


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`hasModeratedReplies` | boolean
`highlights` | [Highlight](Highlight.md)
`itemType` | [ContentItemType](ContentItemType.md)
`promotedMetadata` | { [key: string]: any; }
`socialContext` | [SocialContextUnion](SocialContextUnion.md)
`tweetDisplayType` | string
`tweetResults` | [ItemResult](ItemResult.md)
`cursorType` | [CursorType](CursorType.md)
`displayTreatment` | [DisplayTreatment](DisplayTreatment.md)
`entryType` | [ContentEntryType](ContentEntryType.md)
`stopOnEmptyResponse` | boolean
`value` | string
`userDisplayType` | string
`userResults` | [UserResults](UserResults.md)
`tombstoneDisplayType` | string
`tombstoneInfo` | [TombstoneInfo](TombstoneInfo.md)
`images` | [Array&lt;TrendImage&gt;](TrendImage.md)
`isAiTrend` | boolean
`name` | string
`rank` | string
`socialContext` | [SocialContextUnion](SocialContextUnion.md)
`thumbnailImage` | [ThumbnailImage](ThumbnailImage.md)
`trendMetadata` | [TrendMetadata](TrendMetadata.md)
`trendUrl` | [SocialContextLandingUrl](SocialContextLandingUrl.md)
`id` | string
`notificationIcon` | string
`notificationUrl` | [SocialContextLandingUrl](SocialContextLandingUrl.md)
`richMessage` | [RichMessage](RichMessage.md)
`template` | [NotificationTemplate](NotificationTemplate.md)
`timestampMs` | string
`height` | number
`payload` | string
`displayType` | string
`list` | [TwitterList](TwitterList.md)
`text` | string
`url` | [SocialContextLandingUrl](SocialContextLandingUrl.md)

## Example

```typescript
import type { ItemContentUnion } from 'twitter-openapi-typescript-generated'

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
  "cursorType": null,
  "displayTreatment": null,
  "entryType": null,
  "stopOnEmptyResponse": null,
  "value": null,
  "userDisplayType": null,
  "userResults": null,
  "tombstoneDisplayType": null,
  "tombstoneInfo": null,
  "images": null,
  "isAiTrend": null,
  "name": null,
  "rank": null,
  "socialContext": null,
  "thumbnailImage": null,
  "trendMetadata": null,
  "trendUrl": null,
  "id": null,
  "notificationIcon": null,
  "notificationUrl": null,
  "richMessage": null,
  "template": null,
  "timestampMs": null,
  "height": null,
  "payload": null,
  "displayType": null,
  "list": null,
  "text": null,
  "url": null,
} satisfies ItemContentUnion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ItemContentUnion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


