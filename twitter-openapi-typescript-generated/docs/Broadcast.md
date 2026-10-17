
# Broadcast


## Properties

Name | Type
------------ | -------------
`availableForReplay` | boolean
`broadcastId` | string
`cameraRotation` | number
`chatOption` | number
`editedReplay` | [BroadcastEditedReplay](BroadcastEditedReplay.md)
`endTime` | number
`height` | number
`id` | string
`imageUrl` | string
`imageUrlMedium` | string
`imageUrlSmall` | string
`isHighLatency` | boolean
`mediaKey` | string
`periscopeUser` | [BroadcastPeriscopeUser](BroadcastPeriscopeUser.md)
`pingTime` | number
`preLiveSlateUrl` | string
`privateChat` | boolean
`scheduledStartTime` | number
`source` | string
`startTime` | number
`state` | string
`status` | string
`totalWatched` | number
`totalWatching` | number
`tweetResults` | [ItemResult](ItemResult.md)
`userResults` | [UserResults](UserResults.md)
`version` | number
`width` | number

## Example

```typescript
import type { Broadcast } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "availableForReplay": null,
  "broadcastId": null,
  "cameraRotation": null,
  "chatOption": null,
  "editedReplay": null,
  "endTime": null,
  "height": null,
  "id": null,
  "imageUrl": null,
  "imageUrlMedium": null,
  "imageUrlSmall": null,
  "isHighLatency": null,
  "mediaKey": null,
  "periscopeUser": null,
  "pingTime": null,
  "preLiveSlateUrl": null,
  "privateChat": null,
  "scheduledStartTime": null,
  "source": null,
  "startTime": null,
  "state": null,
  "status": null,
  "totalWatched": null,
  "totalWatching": null,
  "tweetResults": null,
  "userResults": null,
  "version": null,
  "width": null,
} satisfies Broadcast

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Broadcast
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


