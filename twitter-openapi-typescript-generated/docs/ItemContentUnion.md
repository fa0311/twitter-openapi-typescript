
# ItemContentUnion


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`hasModeratedReplies` | boolean
`highlights` | [Highlight](Highlight.md)
`itemType` | [ContentItemType](ContentItemType.md)
`promotedMetadata` | [EventSummaryPromotedMetadata](EventSummaryPromotedMetadata.md)
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
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`content` | [TimelineMessagePromptContent](TimelineMessagePromptContent.md)
`communityResults` | [CommunityResult](CommunityResult.md)
`tombstoneDisplayType` | string
`tombstoneInfo` | [TombstoneInfo](TombstoneInfo.md)
`description` | string
`groupedTrends` | [Array&lt;GroupedTrend&gt;](GroupedTrend.md)
`images` | [Array&lt;TrendImage&gt;](TrendImage.md)
`isAiTrend` | boolean
`name` | string
`promotedMetadata` | [TrendPromotedMetadata](TrendPromotedMetadata.md)
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
`event` | [EventSummaryEvent](EventSummaryEvent.md)
`eventSummaryDisplayType` | string
`eventSummaryUrl` | [SocialContextLandingUrl](SocialContextLandingUrl.md)
`media` | [EventSummaryMedia](EventSummaryMedia.md)
`title` | string

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
  "clientEventInfo": null,
  "content": null,
  "communityResults": null,
  "tombstoneDisplayType": null,
  "tombstoneInfo": null,
  "description": null,
  "groupedTrends": null,
  "images": null,
  "isAiTrend": null,
  "name": null,
  "promotedMetadata": null,
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
  "event": null,
  "eventSummaryDisplayType": null,
  "eventSummaryUrl": null,
  "media": null,
  "title": null,
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


