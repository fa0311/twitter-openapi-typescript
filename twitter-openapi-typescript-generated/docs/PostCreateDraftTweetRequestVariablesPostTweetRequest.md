
# PostCreateDraftTweetRequestVariablesPostTweetRequest


## Properties

Name | Type
------------ | -------------
`autoPopulateReplyMetadata` | boolean
`excludeReplyUserIds` | Array&lt;object&gt;
`mediaIds` | Array&lt;object&gt;
`status` | string
`threadTweets` | Array&lt;object&gt;

## Example

```typescript
import type { PostCreateDraftTweetRequestVariablesPostTweetRequest } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "autoPopulateReplyMetadata": false,
  "excludeReplyUserIds": null,
  "mediaIds": null,
  "status": test,
  "threadTweets": null,
} satisfies PostCreateDraftTweetRequestVariablesPostTweetRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostCreateDraftTweetRequestVariablesPostTweetRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


