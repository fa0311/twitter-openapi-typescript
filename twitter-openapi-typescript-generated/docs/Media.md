
# Media


## Properties

Name | Type
------------ | -------------
`additionalMediaInfo` | [AdditionalMediaInfo](AdditionalMediaInfo.md)
`allowDownloadStatus` | [AllowDownloadStatus](AllowDownloadStatus.md)
`displayUrl` | string
`expandedUrl` | string
`extAltText` | string
`extMediaAvailability` | [ExtMediaAvailability](ExtMediaAvailability.md)
`features` | object
`grokPostId` | string
`idStr` | string
`indices` | Array&lt;number&gt;
`mediaKey` | string
`mediaResults` | [MediaResults](MediaResults.md)
`mediaUrlHttps` | string
`originalInfo` | [MediaOriginalInfo](MediaOriginalInfo.md)
`sensitiveMediaWarning` | [SensitiveMediaWarning](SensitiveMediaWarning.md)
`sizes` | [MediaSizes](MediaSizes.md)
`sourceStatusIdStr` | string
`sourceUserIdStr` | string
`sourceUserResults` | [UserResults](UserResults.md)
`type` | string
`url` | string
`videoInfo` | [MediaVideoInfo](MediaVideoInfo.md)

## Example

```typescript
import type { Media } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "additionalMediaInfo": null,
  "allowDownloadStatus": null,
  "displayUrl": null,
  "expandedUrl": null,
  "extAltText": null,
  "extMediaAvailability": null,
  "features": null,
  "grokPostId": null,
  "idStr": null,
  "indices": null,
  "mediaKey": null,
  "mediaResults": null,
  "mediaUrlHttps": null,
  "originalInfo": null,
  "sensitiveMediaWarning": null,
  "sizes": null,
  "sourceStatusIdStr": null,
  "sourceUserIdStr": null,
  "sourceUserResults": null,
  "type": null,
  "url": null,
  "videoInfo": null,
} satisfies Media

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Media
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


