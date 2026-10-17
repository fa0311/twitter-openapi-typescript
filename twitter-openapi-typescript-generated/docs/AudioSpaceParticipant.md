
# AudioSpaceParticipant


## Properties

Name | Type
------------ | -------------
`avatarUrl` | string
`displayName` | string
`isMutedByAdmin` | boolean
`isMutedByGuest` | boolean
`isVerified` | boolean
`periscopeUserId` | string
`start` | number
`twitterScreenName` | string
`userResults` | [AudioSpaceParticipantUserResults](AudioSpaceParticipantUserResults.md)

## Example

```typescript
import type { AudioSpaceParticipant } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "avatarUrl": null,
  "displayName": null,
  "isMutedByAdmin": null,
  "isMutedByGuest": null,
  "isVerified": null,
  "periscopeUserId": null,
  "start": null,
  "twitterScreenName": null,
  "userResults": null,
} satisfies AudioSpaceParticipant

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceParticipant
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


