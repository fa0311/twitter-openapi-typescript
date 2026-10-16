
# BirdwatchHomePageBody


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`initialTimeline` | [BirdwatchHomeTimeline](BirdwatchHomeTimeline.md)
`timelines` | [Array&lt;BirdwatchHomeTimeline&gt;](BirdwatchHomeTimeline.md)

## Example

```typescript
import type { BirdwatchHomePageBody } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "initialTimeline": null,
  "timelines": null,
} satisfies BirdwatchHomePageBody

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BirdwatchHomePageBody
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


