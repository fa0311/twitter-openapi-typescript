
# ContentUnion


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`entryType` | [ContentEntryType](ContentEntryType.md)
`feedbackInfo` | [FeedbackInfo](FeedbackInfo.md)
`itemContent` | [ItemContentUnion](ItemContentUnion.md)
`displayType` | [DisplayType](DisplayType.md)
`footer` | [ModuleFooter](ModuleFooter.md)
`header` | [ModuleHeader](ModuleHeader.md)
`items` | [Array&lt;ModuleItem&gt;](ModuleItem.md)
`metadata` | [ModuleMetadata](ModuleMetadata.md)
`cursorType` | [CursorType](CursorType.md)
`displayTreatment` | [DisplayTreatment](DisplayTreatment.md)
`itemType` | [ContentEntryType](ContentEntryType.md)
`stopOnEmptyResponse` | boolean
`value` | string

## Example

```typescript
import type { ContentUnion } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "clientEventInfo": null,
  "entryType": null,
  "feedbackInfo": null,
  "itemContent": null,
  "displayType": null,
  "footer": null,
  "header": null,
  "items": null,
  "metadata": null,
  "cursorType": null,
  "displayTreatment": null,
  "itemType": null,
  "stopOnEmptyResponse": null,
  "value": null,
} satisfies ContentUnion

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ContentUnion
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


