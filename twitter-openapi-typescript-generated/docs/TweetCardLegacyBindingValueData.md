
# TweetCardLegacyBindingValueData


## Properties

Name | Type
------------ | -------------
`booleanValue` | boolean
`imageColorValue` | [MediaColorInfo](MediaColorInfo.md)
`imageValue` | [TweetCardLegacyBindingValueDataImage](TweetCardLegacyBindingValueDataImage.md)
`scribeKey` | string
`stringValue` | string
`type` | string
`userValue` | [UserValue](UserValue.md)

## Example

```typescript
import type { TweetCardLegacyBindingValueData } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "booleanValue": null,
  "imageColorValue": null,
  "imageValue": null,
  "scribeKey": null,
  "stringValue": null,
  "type": null,
  "userValue": null,
} satisfies TweetCardLegacyBindingValueData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetCardLegacyBindingValueData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


