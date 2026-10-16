
# Timeline


## Properties

Name | Type
------------ | -------------
`instructions` | [Array&lt;InstructionUnion&gt;](InstructionUnion.md)
`metadata` | [TimelineMetadata](TimelineMetadata.md)
`responseObjects` | [TimelineResponseObjects](TimelineResponseObjects.md)

## Example

```typescript
import type { Timeline } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "instructions": null,
  "metadata": null,
  "responseObjects": null,
} satisfies Timeline

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Timeline
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


