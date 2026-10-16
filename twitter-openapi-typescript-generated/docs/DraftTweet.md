
# DraftTweet


## Properties

Name | Type
------------ | -------------
`restId` | string
`tweetCreateRequest` | [DraftTweetCreateRequest](DraftTweetCreateRequest.md)
`userResults` | [DraftTweetUserResults](DraftTweetUserResults.md)

## Example

```typescript
import type { DraftTweet } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "restId": null,
  "tweetCreateRequest": null,
  "userResults": null,
} satisfies DraftTweet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DraftTweet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


