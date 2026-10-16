
# TimelineTwitterList


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`displayType` | string
`itemType` | [ContentItemType](ContentItemType.md)
`list` | [TwitterList](TwitterList.md)

## Example

```typescript
import type { TimelineTwitterList } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "displayType": null,
  "itemType": null,
  "list": null,
} satisfies TimelineTwitterList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineTwitterList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


