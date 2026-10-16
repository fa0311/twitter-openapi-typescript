
# TimelineFrame


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`height` | number
`itemType` | [ContentItemType](ContentItemType.md)
`payload` | string

## Example

```typescript
import type { TimelineFrame } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "height": null,
  "itemType": null,
  "payload": null,
} satisfies TimelineFrame

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineFrame
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


