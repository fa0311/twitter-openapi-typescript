
# GrokHome


## Properties

Name | Type
------------ | -------------
`defaultGrokMode` | string
`defaultGrokModelOptionId` | string
`eligibleForGrok` | boolean
`freeAccessEnabled` | boolean
`grokModelOptions` | [Array&lt;GrokModelOption&gt;](GrokModelOption.md)
`grokVersion` | string
`ineligibleReasons` | Array&lt;object&gt;
`layout` | [GrokHomeLayout](GrokHomeLayout.md)

## Example

```typescript
import type { GrokHome } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "defaultGrokMode": null,
  "defaultGrokModelOptionId": null,
  "eligibleForGrok": null,
  "freeAccessEnabled": null,
  "grokModelOptions": null,
  "grokVersion": null,
  "ineligibleReasons": null,
  "layout": null,
} satisfies GrokHome

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GrokHome
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


