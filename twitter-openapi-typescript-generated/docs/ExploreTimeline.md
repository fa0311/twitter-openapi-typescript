
# ExploreTimeline


## Properties

Name | Type
------------ | -------------
`id` | string
`labelText` | string
`refreshIntervalSec` | number
`scribeConfig` | [ExploreTimelineScribeConfig](ExploreTimelineScribeConfig.md)
`timeline` | [TimelineResult](TimelineResult.md)

## Example

```typescript
import type { ExploreTimeline } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "labelText": null,
  "refreshIntervalSec": null,
  "scribeConfig": null,
  "timeline": null,
} satisfies ExploreTimeline

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExploreTimeline
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


