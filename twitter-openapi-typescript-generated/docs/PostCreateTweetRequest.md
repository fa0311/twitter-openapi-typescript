
# PostCreateTweetRequest


## Properties

Name | Type
------------ | -------------
`features` | [PostCreateTweetRequestFeatures](PostCreateTweetRequestFeatures.md)
`queryId` | string
`variables` | [PostCreateTweetRequestVariables](PostCreateTweetRequestVariables.md)

## Example

```typescript
import type { PostCreateTweetRequest } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "features": null,
  "queryId": wR5Z_lEibLvkew3tF9w-Sg,
  "variables": null,
} satisfies PostCreateTweetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostCreateTweetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


