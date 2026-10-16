
# GrokTranslatedBio


## Properties

Name | Type
------------ | -------------
`destinationLanguage` | string
`entities` | [Entities](Entities.md)
`sourceLanguage` | string
`translation` | string

## Example

```typescript
import type { GrokTranslatedBio } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "destinationLanguage": null,
  "entities": null,
  "sourceLanguage": null,
  "translation": null,
} satisfies GrokTranslatedBio

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GrokTranslatedBio
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


