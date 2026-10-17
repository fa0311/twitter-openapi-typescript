
# ArticleContentState


## Properties

Name | Type
------------ | -------------
`blocks` | [Array&lt;ArticleContentBlock&gt;](ArticleContentBlock.md)
`entityMap` | [Array&lt;ArticleContentEntity&gt;](ArticleContentEntity.md)

## Example

```typescript
import type { ArticleContentState } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "blocks": null,
  "entityMap": null,
} satisfies ArticleContentState

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArticleContentState
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


