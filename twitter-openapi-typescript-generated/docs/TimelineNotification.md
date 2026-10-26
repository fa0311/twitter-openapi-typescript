
# TimelineNotification


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`id` | string
`itemType` | [ContentItemType](ContentItemType.md)
`notificationIcon` | string
`notificationUrl` | [NotificationUrl](NotificationUrl.md)
`richMessage` | [RichMessage](RichMessage.md)
`template` | [NotificationTemplate](NotificationTemplate.md)
`timestampMs` | string

## Example

```typescript
import type { TimelineNotification } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "id": null,
  "itemType": null,
  "notificationIcon": null,
  "notificationUrl": null,
  "richMessage": null,
  "template": null,
  "timestampMs": null,
} satisfies TimelineNotification

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineNotification
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


