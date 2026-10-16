
# TimelineTimelineItem


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`entryType` | [ContentEntryType](ContentEntryType.md)
`feedbackInfo` | [FeedbackInfo](FeedbackInfo.md)
`itemContent` | [ItemContentUnion](ItemContentUnion.md)

## Example

```typescript
import type { TimelineTimelineItem } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "clientEventInfo": null,
  "entryType": null,
  "feedbackInfo": null,
  "itemContent": null,
} satisfies TimelineTimelineItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTimelineItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


