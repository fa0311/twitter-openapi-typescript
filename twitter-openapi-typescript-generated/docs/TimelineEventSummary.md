
# TimelineEventSummary


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`event` | [EventSummaryEvent](EventSummaryEvent.md)
`eventSummaryDisplayType` | string
`eventSummaryUrl` | [SocialContextLandingUrl](SocialContextLandingUrl.md)
`itemType` | [ContentItemType](ContentItemType.md)
`media` | [EventSummaryMedia](EventSummaryMedia.md)
`promotedMetadata` | [EventSummaryPromotedMetadata](EventSummaryPromotedMetadata.md)
`title` | string

## Example

```typescript
import type { TimelineEventSummary } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "event": null,
  "eventSummaryDisplayType": null,
  "eventSummaryUrl": null,
  "itemType": null,
  "media": null,
  "promotedMetadata": null,
  "title": null,
} satisfies TimelineEventSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineEventSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


