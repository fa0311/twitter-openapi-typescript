
# TweetLegacyPlace


## Properties

Name | Type
------------ | -------------
`boundingBox` | [TweetLegacyPlaceBoundingBox](TweetLegacyPlaceBoundingBox.md)
`country` | string
`countryCode` | string
`fullName` | string
`id` | string
`name` | string
`placeType` | string
`url` | string

## Example

```typescript
import type { TweetLegacyPlace } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "boundingBox": null,
  "country": null,
  "countryCode": null,
  "fullName": null,
  "id": null,
  "name": null,
  "placeType": null,
  "url": null,
} satisfies TweetLegacyPlace

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetLegacyPlace
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


