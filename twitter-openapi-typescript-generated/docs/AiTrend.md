
# AiTrend


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`core` | [AiTrendCore](AiTrendCore.md)
`id` | string
`postCount` | string
`restId` | string
`socialProof` | [Array&lt;AiTrendSocialProof&gt;](AiTrendSocialProof.md)

## Example

```typescript
import type { AiTrend } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "core": null,
  "id": null,
  "postCount": null,
  "restId": null,
  "socialProof": null,
} satisfies AiTrend

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AiTrend
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


