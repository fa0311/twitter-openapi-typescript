
# TimelinePromptContent


## Properties

Name | Type
------------ | -------------
`confirmation` | string
`contentType` | string
`displayType` | string
`isRelevantCallback` | [TimelinePromptCallback](TimelinePromptCallback.md)
`isRelevantText` | string
`notRelevantCallback` | [TimelinePromptCallback](TimelinePromptCallback.md)
`notRelevantText` | string
`title` | string

## Example

```typescript
import type { TimelinePromptContent } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "confirmation": null,
  "contentType": null,
  "displayType": null,
  "isRelevantCallback": null,
  "isRelevantText": null,
  "notRelevantCallback": null,
  "notRelevantText": null,
  "title": null,
} satisfies TimelinePromptContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelinePromptContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


