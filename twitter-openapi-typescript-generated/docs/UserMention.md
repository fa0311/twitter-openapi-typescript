
# UserMention


## Properties

Name | Type
------------ | -------------
`id` | string
`idStr` | string
`indices` | Array&lt;number&gt;
`name` | string
`screenName` | string

## Example

```typescript
import type { UserMention } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "idStr": null,
  "indices": null,
  "name": null,
  "screenName": null,
} satisfies UserMention

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserMention
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


