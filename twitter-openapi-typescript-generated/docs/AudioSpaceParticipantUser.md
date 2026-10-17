
# AudioSpaceParticipantUser


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`identityProfileLabelsHighlightedLabel` | [IdentityProfileLabelsHighlightedLabel](IdentityProfileLabelsHighlightedLabel.md)
`isBlueVerified` | boolean
`verification` | [AudioSpaceParticipantVerification](AudioSpaceParticipantVerification.md)

## Example

```typescript
import type { AudioSpaceParticipantUser } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "identityProfileLabelsHighlightedLabel": null,
  "isBlueVerified": null,
  "verification": null,
} satisfies AudioSpaceParticipantUser

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceParticipantUser
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


