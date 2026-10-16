
# DraftTweetCreateRequest


## Properties

Name | Type
------------ | -------------
`autoPopulateReplyMetadata` | boolean
`excludeReplyUserIds` | Array&lt;string&gt;
`mediaIds` | Array&lt;string&gt;
`status` | string
`threadTweets` | Array&lt;{ [key: string]: any; }&gt;
`type` | string

## Example

```typescript
import type { DraftTweetCreateRequest } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "autoPopulateReplyMetadata": null,
  "excludeReplyUserIds": null,
  "mediaIds": null,
  "status": null,
  "threadTweets": null,
  "type": null,
} satisfies DraftTweetCreateRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DraftTweetCreateRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


