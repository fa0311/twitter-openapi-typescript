
# RichMessageEntityRef


## Properties

Name | Type
------------ | -------------
`id` | string
`type` | string
`url` | string
`userResults` | [UserResults](UserResults.md)

## Example

```typescript
import type { RichMessageEntityRef } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "type": null,
  "url": null,
  "userResults": null,
} satisfies RichMessageEntityRef

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RichMessageEntityRef
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


