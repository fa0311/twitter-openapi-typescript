
# TimelinePrompt


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`clientEventInfo` | [ClientEventInfo](ClientEventInfo.md)
`content` | [TimelinePromptContent](TimelinePromptContent.md)
`itemType` | [ContentItemType](ContentItemType.md)

## Example

```typescript
import type { TimelinePrompt } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "clientEventInfo": null,
  "content": null,
  "itemType": null,
} satisfies TimelinePrompt

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelinePrompt
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


