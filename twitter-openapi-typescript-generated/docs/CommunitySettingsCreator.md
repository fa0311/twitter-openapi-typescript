
# CommunitySettingsCreator


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`core` | [CommunitySettingsCreatorCore](CommunitySettingsCreatorCore.md)
`id` | string
`isBlueVerified` | boolean
`verification` | [CommunitySettingsCreatorVerification](CommunitySettingsCreatorVerification.md)

## Example

```typescript
import type { CommunitySettingsCreator } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "core": null,
  "id": null,
  "isBlueVerified": null,
  "verification": null,
} satisfies CommunitySettingsCreator

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CommunitySettingsCreator
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


