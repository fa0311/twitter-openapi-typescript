
# PostListRemoveMemberRequest


## Properties

Name | Type
------------ | -------------
`features` | [PostCreateListRequestFeatures](PostCreateListRequestFeatures.md)
`queryId` | string
`variables` | [PostListAddMemberRequestVariables](PostListAddMemberRequestVariables.md)

## Example

```typescript
import type { PostListRemoveMemberRequest } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "features": null,
  "queryId": _2o1-wSMWGFSi5HUscn1Hw,
  "variables": null,
} satisfies PostListRemoveMemberRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostListRemoveMemberRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


