
# UserLabelTextEntityRef


## Properties

Name | Type
------------ | -------------
`mentionResults` | [UserLabelMentionResults](UserLabelMentionResults.md)
`screenName` | string
`type` | string

## Example

```typescript
import type { UserLabelTextEntityRef } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "mentionResults": null,
  "screenName": null,
  "type": null,
} satisfies UserLabelTextEntityRef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserLabelTextEntityRef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


