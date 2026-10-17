
# BroadcastResponse


## Properties

Name | Type
------------ | -------------
`data` | [BroadcastData](BroadcastData.md)
`errors` | [Array&lt;ErrorResponse&gt;](ErrorResponse.md)

## Example

```typescript
import type { BroadcastResponse } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "errors": null,
} satisfies BroadcastResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BroadcastResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


