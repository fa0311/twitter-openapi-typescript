
# PostDeleteTweetRequest


## Properties

Name | Type
------------ | -------------
`queryId` | string
`variables` | [PostCreateRetweetRequestVariables](PostCreateRetweetRequestVariables.md)

## Example

```typescript
import type { PostDeleteTweetRequest } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "queryId": nxpZCY2K-I6QoFHAHeojFQ,
  "variables": null,
} satisfies PostDeleteTweetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostDeleteTweetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


