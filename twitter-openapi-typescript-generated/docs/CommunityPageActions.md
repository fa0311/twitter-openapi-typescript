
# CommunityPageActions


## Properties

Name | Type
------------ | -------------
`deleteActionResult` | [CommunityPageDeleteActionResult](CommunityPageDeleteActionResult.md)
`id` | string
`joinActionResult` | [CommunityPageJoinActionResult](CommunityPageJoinActionResult.md)
`leaveActionResult` | [CommunityPageLeaveActionResult](CommunityPageLeaveActionResult.md)
`pinActionResult` | [CommunityPagePinActionResult](CommunityPagePinActionResult.md)

## Example

```typescript
import type { CommunityPageActions } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "deleteActionResult": null,
  "id": null,
  "joinActionResult": null,
  "leaveActionResult": null,
  "pinActionResult": null,
} satisfies CommunityPageActions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunityPageActions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


