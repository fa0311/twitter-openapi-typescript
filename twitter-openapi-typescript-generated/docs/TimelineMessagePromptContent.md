
# TimelineMessagePromptContent


## Properties

Name | Type
------------ | -------------
`bodyRichText` | [TimelineMessagePromptRichText](TimelineMessagePromptRichText.md)
`bodyText` | string
`contentType` | string
`headerText` | string
`primaryButtonAction` | [TimelineMessagePromptButton](TimelineMessagePromptButton.md)

## Example

```typescript
import type { TimelineMessagePromptContent } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "bodyRichText": null,
  "bodyText": null,
  "contentType": null,
  "headerText": null,
  "primaryButtonAction": null,
} satisfies TimelineMessagePromptContent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineMessagePromptContent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


