
# AboutAccountUser


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`aboutProfile` | [AboutProfile](AboutProfile.md)
`affiliatesHighlightedLabel` | [AffiliatesHighlightedLabel](AffiliatesHighlightedLabel.md)
`avatar` | [UserAvatar](UserAvatar.md)
`core` | [UserCore](UserCore.md)
`id` | string
`identityProfileLabelsHighlightedLabel` | [IdentityProfileLabelsHighlightedLabel](IdentityProfileLabelsHighlightedLabel.md)
`isBlueVerified` | boolean
`privacy` | [UserPrivacy](UserPrivacy.md)
`profileImageShape` | string
`restId` | string
`verification` | [UserVerification](UserVerification.md)
`verificationInfo` | [AboutAccountVerificationInfo](AboutAccountVerificationInfo.md)

## Example

```typescript
import type { AboutAccountUser } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "aboutProfile": null,
  "affiliatesHighlightedLabel": null,
  "avatar": null,
  "core": null,
  "id": null,
  "identityProfileLabelsHighlightedLabel": null,
  "isBlueVerified": null,
  "privacy": null,
  "profileImageShape": null,
  "restId": null,
  "verification": null,
  "verificationInfo": null,
} satisfies AboutAccountUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AboutAccountUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


