
# PostCreateListRequest


## Properties

Name | Type
------------ | -------------
`features` | [PostCreateListRequestFeatures](PostCreateListRequestFeatures.md)
`queryId` | string
`variables` | [PostCreateListRequestVariables](PostCreateListRequestVariables.md)

## Example

```typescript
import type { PostCreateListRequest } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "features": null,
  "queryId": zdGzorOEOslDL4XEbe2INw,
  "variables": null,
} satisfies PostCreateListRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostCreateListRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


