
# AdMetadataContainer


## Properties

Name | Type
------------ | -------------
`destinationUrlParams` | [Array&lt;KeyValue&gt;](KeyValue.md)
`isQuickPromote` | boolean
`renderLegacyWebsiteCard` | boolean
`renderSalesCtaWebsiteCard` | boolean
`showOverlayOnFirstCard` | boolean
`unifiedCardOverride` | string

## Example

```typescript
import type { AdMetadataContainer } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "destinationUrlParams": null,
  "isQuickPromote": null,
  "renderLegacyWebsiteCard": null,
  "renderSalesCtaWebsiteCard": null,
  "showOverlayOnFirstCard": null,
  "unifiedCardOverride": null,
} satisfies AdMetadataContainer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdMetadataContainer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


