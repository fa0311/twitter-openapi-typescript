
# PostCreateListRequestFeatures


## Properties

Name | Type
------------ | -------------
`profileLabelImprovementsPcfLabelInPostEnabled` | boolean
`responsiveWebGraphqlTimelineNavigationEnabled` | boolean
`responsiveWebProfileRedirectEnabled` | boolean
`rwebTipjarConsumptionEnabled` | boolean
`verifiedPhoneLabelEnabled` | boolean

## Example

```typescript
import type { PostCreateListRequestFeatures } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "profileLabelImprovementsPcfLabelInPostEnabled": true,
  "responsiveWebGraphqlTimelineNavigationEnabled": true,
  "responsiveWebProfileRedirectEnabled": true,
  "rwebTipjarConsumptionEnabled": false,
  "verifiedPhoneLabelEnabled": false,
} satisfies PostCreateListRequestFeatures

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PostCreateListRequestFeatures
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


