
# TweetWithVisibilityResults


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`limitedActionResults` | [LimitedActionResults](LimitedActionResults.md)
`mediaVisibilityResults` | [MediaVisibilityResults](MediaVisibilityResults.md)
`tweet` | [Tweet](Tweet.md)
`tweetInterstitial` | [TweetInterstitial](TweetInterstitial.md)

## Example

```typescript
import type { TweetWithVisibilityResults } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "limitedActionResults": null,
  "mediaVisibilityResults": null,
  "tweet": null,
  "tweetInterstitial": null,
} satisfies TweetWithVisibilityResults

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetWithVisibilityResults
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


