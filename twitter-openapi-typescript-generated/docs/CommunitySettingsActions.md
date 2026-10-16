
# CommunitySettingsActions


## Properties

Name | Type
------------ | -------------
`id` | string
`joinActionResult` | [CommunityJoinActionResultUnion](CommunityJoinActionResultUnion.md)
`listMembersActionResult` | [CommunityListMembersActionResult](CommunityListMembersActionResult.md)

## Example

```typescript
import type { CommunitySettingsActions } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "joinActionResult": null,
  "listMembersActionResult": null,
} satisfies CommunitySettingsActions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunitySettingsActions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


