
# TimelineHalfCover


## Properties

Name | Type
------------ | -------------
`dismissible` | boolean
`halfCoverDisplayType` | string
`impressionCallbacks` | [Array&lt;Callback&gt;](Callback.md)
`primaryCoverCta` | [CoverCta](CoverCta.md)
`primaryText` | [Text](Text.md)
`secondaryCoverCta` | [CoverCta](CoverCta.md)
`secondaryText` | [Text](Text.md)
`type` | string

## Example

```typescript
import type { TimelineHalfCover } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "dismissible": null,
  "halfCoverDisplayType": null,
  "impressionCallbacks": null,
  "primaryCoverCta": null,
  "primaryText": null,
  "secondaryCoverCta": null,
  "secondaryText": null,
  "type": null,
} satisfies TimelineHalfCover

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineHalfCover
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


