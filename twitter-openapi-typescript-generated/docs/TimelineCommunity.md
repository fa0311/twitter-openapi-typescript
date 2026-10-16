
# TimelineCommunity


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`communityResults` | [CommunityResult](CommunityResult.md)
`itemType` | [ContentItemType](ContentItemType.md)

## Example

```typescript
import type { TimelineCommunity } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "communityResults": null,
  "itemType": null,
} satisfies TimelineCommunity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TimelineCommunity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


