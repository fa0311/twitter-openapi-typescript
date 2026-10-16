
# ProfileBio


## Properties

Name | Type
------------ | -------------
`description` | string
`entities` | [ProfileBioEntities](ProfileBioEntities.md)
`withheldInCountries` | Array&lt;string&gt;

## Example

```typescript
import type { ProfileBio } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "description": null,
  "entities": null,
  "withheldInCountries": null,
} satisfies ProfileBio

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProfileBio
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


