
# TimelineTimelineModule


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`displayType` | [DisplayType](DisplayType.md)
`entryType` | [ContentEntryType](ContentEntryType.md)
`feedbackInfo` | [FeedbackInfo](FeedbackInfo.md)
`footer` | [ModuleFooter](ModuleFooter.md)
`header` | [ModuleHeader](ModuleHeader.md)
`items` | [Array&lt;ModuleItem&gt;](ModuleItem.md)
`metadata` | [ModuleMetadata](ModuleMetadata.md)

## Example

```typescript
import type { TimelineTimelineModule } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "clientEventInfo": null,
  "displayType": null,
  "entryType": null,
  "feedbackInfo": null,
  "footer": null,
  "header": null,
  "items": null,
  "metadata": null,
} satisfies TimelineTimelineModule

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTimelineModule
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


