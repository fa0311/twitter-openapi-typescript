
# FeedbackAction


## Properties

Name | Type
------------ | -------------
`childKeys` | Array&lt;string&gt;
`clientEventInfo` | [FeedbackClientEventInfo](FeedbackClientEventInfo.md)
`confirmation` | string
`confirmationDisplayType` | string
`feedbackType` | string
`feedbackUrl` | string
`hasUndoAction` | boolean
`icon` | string
`prompt` | string

## Example

```typescript
import type { FeedbackAction } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "childKeys": null,
  "clientEventInfo": null,
  "confirmation": null,
  "confirmationDisplayType": null,
  "feedbackType": null,
  "feedbackUrl": null,
  "hasUndoAction": null,
  "icon": null,
  "prompt": null,
} satisfies FeedbackAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeedbackAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


