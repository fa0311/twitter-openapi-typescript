
# NotificationTemplate


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`additionalContext` | [NotificationAdditionalContext](NotificationAdditionalContext.md)
`fromUsers` | Array&lt;object&gt;
`showAllLinkText` | string
`targetObjects` | Array&lt;object&gt;

## Example

```typescript
import type { NotificationTemplate } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "additionalContext": null,
  "fromUsers": null,
  "showAllLinkText": null,
  "targetObjects": null,
} satisfies NotificationTemplate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as NotificationTemplate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


