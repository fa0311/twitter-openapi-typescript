
# ListBannerMediaInfo


## Properties

Name | Type
------------ | -------------
`originalImgHeight` | number
`originalImgUrl` | string
`originalImgWidth` | number
`salientRect` | [ListBannerMediaSalientRect](ListBannerMediaSalientRect.md)

## Example

```typescript
import type { ListBannerMediaInfo } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "originalImgHeight": null,
  "originalImgUrl": null,
  "originalImgWidth": null,
  "salientRect": null,
} satisfies ListBannerMediaInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ListBannerMediaInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


