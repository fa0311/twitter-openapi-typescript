
# TimelineShowAlert


## Properties

Name | Type
------------ | -------------
`alertType` | string
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`colorConfig` | [TimelineShowAlertColorConfig](TimelineShowAlertColorConfig.md)
`displayDurationMs` | number
`displayLocation` | string
`iconDisplayInfo` | [TimelineShowAlertIconDisplayInfo](TimelineShowAlertIconDisplayInfo.md)
`richText` | [TimelineShowAlertRichText](TimelineShowAlertRichText.md)
`triggerDelayMs` | number
`type` | [InstructionType](InstructionType.md)
`usersResults` | [Array&lt;UserResults&gt;](UserResults.md)

## Example

```typescript
import type { TimelineShowAlert } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "alertType": null,
  "clientEventInfo": null,
  "colorConfig": null,
  "displayDurationMs": null,
  "displayLocation": null,
  "iconDisplayInfo": null,
  "richText": null,
  "triggerDelayMs": null,
  "type": null,
  "usersResults": null,
} satisfies TimelineShowAlert

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineShowAlert
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


