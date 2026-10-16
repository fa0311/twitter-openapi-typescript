
# ApiMedia


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`id` | string
`mediaId` | string
`mediaInfo` | [ApiImage](ApiImage.md)
`mediaKey` | string

## Example

```typescript
import type { ApiMedia } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "id": null,
  "mediaId": null,
  "mediaInfo": null,
  "mediaKey": null,
} satisfies ApiMedia

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiMedia
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


