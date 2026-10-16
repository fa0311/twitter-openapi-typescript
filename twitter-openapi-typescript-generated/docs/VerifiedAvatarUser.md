
# VerifiedAvatarUser


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`affiliatesHighlightedLabel` | [AffiliatesHighlightedLabel](AffiliatesHighlightedLabel.md)
`isBlueVerified` | boolean
`profileImageShape` | string
`restId` | string
`verification` | object

## Example

```typescript
import type { VerifiedAvatarUser } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "affiliatesHighlightedLabel": null,
  "isBlueVerified": null,
  "profileImageShape": null,
  "restId": null,
  "verification": null,
} satisfies VerifiedAvatarUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VerifiedAvatarUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


