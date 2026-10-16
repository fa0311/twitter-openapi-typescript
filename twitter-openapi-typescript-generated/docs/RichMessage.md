
# RichMessage


## Properties

Name | Type
------------ | -------------
`entities` | [Array&lt;RichMessageEntity&gt;](RichMessageEntity.md)
`rtl` | boolean
`text` | string

## Example

```typescript
import type { RichMessage } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "entities": null,
  "rtl": null,
  "text": null,
} satisfies RichMessage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RichMessage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


