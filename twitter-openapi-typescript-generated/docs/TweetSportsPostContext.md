
# TweetSportsPostContext


## Properties

Name | Type
------------ | -------------
`competitors` | [Array&lt;TweetSportsCompetitor&gt;](TweetSportsCompetitor.md)
`gameId` | [TweetSportsRestId](TweetSportsRestId.md)
`league` | string
`scheduledAtMs` | string
`state` | string
`statusText` | string
`title` | string
`url` | string

## Example

```typescript
import type { TweetSportsPostContext } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "competitors": null,
  "gameId": null,
  "league": null,
  "scheduledAtMs": null,
  "state": null,
  "statusText": null,
  "title": null,
  "url": null,
} satisfies TweetSportsPostContext

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetSportsPostContext
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


