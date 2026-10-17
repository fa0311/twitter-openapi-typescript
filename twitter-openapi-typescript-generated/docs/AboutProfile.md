
# AboutProfile


## Properties

Name | Type
------------ | -------------
`accountBasedIn` | string
`affiliateUsername` | string
`learnMoreUrl` | string
`locationAccurate` | boolean
`source` | string
`usernameChanges` | [AboutProfileUsernameChanges](AboutProfileUsernameChanges.md)

## Example

```typescript
import type { AboutProfile } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "accountBasedIn": null,
  "affiliateUsername": null,
  "learnMoreUrl": null,
  "locationAccurate": null,
  "source": null,
  "usernameChanges": null,
} satisfies AboutProfile

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AboutProfile
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


