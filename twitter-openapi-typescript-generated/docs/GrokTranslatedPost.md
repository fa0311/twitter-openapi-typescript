
# GrokTranslatedPost


## Properties

Name | Type
------------ | -------------
`associatedData` | object
`destinationLanguage` | string
`entities` | [Entities](Entities.md)
`previewTranslation` | string
`sourceLanguage` | string
`translation` | string

## Example

```typescript
import type { GrokTranslatedPost } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "associatedData": null,
  "destinationLanguage": null,
  "entities": null,
  "previewTranslation": null,
  "sourceLanguage": null,
  "translation": null,
} satisfies GrokTranslatedPost

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GrokTranslatedPost
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


