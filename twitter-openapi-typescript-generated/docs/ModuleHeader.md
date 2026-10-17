
# ModuleHeader


## Properties

Name | Type
------------ | -------------
`displayType` | string
`socialContext` | [SocialContextUnion](SocialContextUnion.md)
`sticky` | boolean
`text` | string

## Example

```typescript
import type { ModuleHeader } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "displayType": null,
  "socialContext": null,
  "sticky": null,
  "text": null,
} satisfies ModuleHeader

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModuleHeader
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


