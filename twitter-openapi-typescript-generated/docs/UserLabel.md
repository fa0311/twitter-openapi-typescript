
# UserLabel


## Properties

Name | Type
------------ | -------------
`badge` | [UserLabelBadge](UserLabelBadge.md)
`description` | string
`longDescription` | [UserLabelText](UserLabelText.md)
`url` | [UserLabelUrl](UserLabelUrl.md)
`userLabelDisplayType` | string
`userLabelType` | string

## Example

```typescript
import type { UserLabel } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "badge": null,
  "description": null,
  "longDescription": null,
  "url": null,
  "userLabelDisplayType": null,
  "userLabelType": null,
} satisfies UserLabel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserLabel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


