
# RichMessageEntity


## Properties

Name | Type
------------ | -------------
`format` | string
`fromIndex` | number
`ref` | [RichMessageEntityRef](RichMessageEntityRef.md)
`toIndex` | number

## Example

```typescript
import type { RichMessageEntity } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "format": null,
  "fromIndex": null,
  "ref": null,
  "toIndex": null,
} satisfies RichMessageEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RichMessageEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


