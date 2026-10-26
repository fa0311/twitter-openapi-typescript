
# PrerollMediaInfo


## Properties

Name | Type
------------ | -------------
`advertiserName` | string
`advertiserProfileImageUrl` | string
`callToAction` | [PrerollCallToAction](PrerollCallToAction.md)
`durationMillis` | number
`publisherResults` | [UserResults](UserResults.md)
`renderAdByAdvertiserName` | boolean
`uuid` | string
`videoVariants` | [Array&lt;PrerollVideoVariant&gt;](PrerollVideoVariant.md)

## Example

```typescript
import type { PrerollMediaInfo } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "advertiserName": null,
  "advertiserProfileImageUrl": null,
  "callToAction": null,
  "durationMillis": null,
  "publisherResults": null,
  "renderAdByAdvertiserName": null,
  "uuid": null,
  "videoVariants": null,
} satisfies PrerollMediaInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PrerollMediaInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


