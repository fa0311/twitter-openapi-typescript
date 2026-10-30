
# TweetSportsCompetitor


## Properties

Name | Type
------------ | -------------
`abbreviation` | string
`darkLogoUrl` | string
`isActive` | boolean
`isWinner` | boolean
`logoUrl` | string
`name` | string
`score` | string
`teamRestId` | [TweetSportsRestId](TweetSportsRestId.md)

## Example

```typescript
import type { TweetSportsCompetitor } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "abbreviation": null,
  "darkLogoUrl": null,
  "isActive": null,
  "isWinner": null,
  "logoUrl": null,
  "name": null,
  "score": null,
  "teamRestId": null,
} satisfies TweetSportsCompetitor

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetSportsCompetitor
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


