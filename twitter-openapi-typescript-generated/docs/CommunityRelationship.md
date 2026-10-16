
# CommunityRelationship


## Properties

Name | Type
------------ | -------------
`actions` | [CommunityActions](CommunityActions.md)
`id` | string
`moderationState` | [CommunityModerationState](CommunityModerationState.md)
`restId` | string

## Example

```typescript
import type { CommunityRelationship } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "actions": null,
  "id": null,
  "moderationState": null,
  "restId": null,
} satisfies CommunityRelationship

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunityRelationship
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


