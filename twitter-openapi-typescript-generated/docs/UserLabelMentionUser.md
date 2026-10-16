
# UserLabelMentionUser


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`core` | [UserLabelMentionUserCore](UserLabelMentionUserCore.md)
`restId` | string

## Example

```typescript
import type { UserLabelMentionUser } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "core": null,
  "restId": null,
} satisfies UserLabelMentionUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserLabelMentionUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


