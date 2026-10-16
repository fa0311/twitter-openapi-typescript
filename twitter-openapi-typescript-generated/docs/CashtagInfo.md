
# CashtagInfo


## Properties

Name | Type
------------ | -------------
`name` | string
`ticker` | string
`tradablePlatforms` | Array&lt;string&gt;

## Example

```typescript
import type { CashtagInfo } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "ticker": null,
  "tradablePlatforms": null,
} satisfies CashtagInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CashtagInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


