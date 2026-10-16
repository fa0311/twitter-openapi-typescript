
# TrendPromotedMetadata


## Properties

Name | Type
------------ | -------------
`advertiserResults` | [UserResults](UserResults.md)
`disclosureType` | string
`impressionId` | string
`impressionString` | string
`promotedTrend` | [PromotedTrend](PromotedTrend.md)
`promotedTrendDescription` | string
`promotedTrendName` | string
`promotedTrendQueryTerm` | string

## Example

```typescript
import type { TrendPromotedMetadata } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "advertiserResults": null,
  "disclosureType": null,
  "impressionId": null,
  "impressionString": null,
  "promotedTrend": null,
  "promotedTrendDescription": null,
  "promotedTrendName": null,
  "promotedTrendQueryTerm": null,
} satisfies TrendPromotedMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrendPromotedMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


