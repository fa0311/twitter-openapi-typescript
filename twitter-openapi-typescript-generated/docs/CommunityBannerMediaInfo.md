
# CommunityBannerMediaInfo


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`colorInfo` | [MediaColorInfo](MediaColorInfo.md)
`originalImgHeight` | number
`originalImgUrl` | string
`originalImgWidth` | number
`salientRect` | [MediaSalientRect](MediaSalientRect.md)

## Example

```typescript
import type { CommunityBannerMediaInfo } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "colorInfo": null,
  "originalImgHeight": null,
  "originalImgUrl": null,
  "originalImgWidth": null,
  "salientRect": null,
} satisfies CommunityBannerMediaInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunityBannerMediaInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


