
# UserResultByScreenNameResult


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`core` | [UserResultByScreenNameCore](UserResultByScreenNameCore.md)
`id` | string
`isVerifiedOrganization` | boolean
`legacy` | [UserResultByScreenNameLegacy](UserResultByScreenNameLegacy.md)
`privacy` | [UserResultPrivacy](UserResultPrivacy.md)
`profilemodules` | { [key: string]: any; }
`relationshipPerspectives` | [UserResultRelationshipPerspectives](UserResultRelationshipPerspectives.md)
`restId` | string

## Example

```typescript
import type { UserResultByScreenNameResult } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "core": null,
  "id": null,
  "isVerifiedOrganization": null,
  "legacy": null,
  "privacy": null,
  "profilemodules": null,
  "relationshipPerspectives": null,
  "restId": null,
} satisfies UserResultByScreenNameResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserResultByScreenNameResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


