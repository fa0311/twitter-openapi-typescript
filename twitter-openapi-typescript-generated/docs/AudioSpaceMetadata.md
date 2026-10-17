
# AudioSpaceMetadata


## Properties

Name | Type
------------ | -------------
`contentType` | string
`conversationControls` | number
`createdAt` | number
`creatorResults` | [UserResults](UserResults.md)
`disallowJoin` | boolean
`endedAt` | string
`isEmployeeOnly` | boolean
`isLocked` | boolean
`isMuted` | boolean
`isSpaceAvailableForClipping` | boolean
`isSpaceAvailableForReplay` | boolean
`maxAdminCapacity` | number
`maxGuestSessions` | number
`mediaKey` | string
`mentionedUsers` | [Array&lt;AudioSpaceMentionedUser&gt;](AudioSpaceMentionedUser.md)
`narrowCastSpaceType` | number
`noIncognito` | boolean
`restId` | string
`scheduledStart` | number
`startedAt` | number
`state` | string
`title` | string
`totalLiveListeners` | number
`totalReplayWatched` | number
`tweetResults` | [ItemResult](ItemResult.md)
`updatedAt` | number

## Example

```typescript
import type { AudioSpaceMetadata } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "contentType": null,
  "conversationControls": null,
  "createdAt": null,
  "creatorResults": null,
  "disallowJoin": null,
  "endedAt": null,
  "isEmployeeOnly": null,
  "isLocked": null,
  "isMuted": null,
  "isSpaceAvailableForClipping": null,
  "isSpaceAvailableForReplay": null,
  "maxAdminCapacity": null,
  "maxGuestSessions": null,
  "mediaKey": null,
  "mentionedUsers": null,
  "narrowCastSpaceType": null,
  "noIncognito": null,
  "restId": null,
  "scheduledStart": null,
  "startedAt": null,
  "state": null,
  "title": null,
  "totalLiveListeners": null,
  "totalReplayWatched": null,
  "tweetResults": null,
  "updatedAt": null,
} satisfies AudioSpaceMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AudioSpaceMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


