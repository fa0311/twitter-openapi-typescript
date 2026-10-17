
# ArticleContentBlockData


## Properties

Name | Type
------------ | -------------
`mentions` | [Array&lt;ArticleContentTextRange&gt;](ArticleContentTextRange.md)
`urls` | [Array&lt;ArticleContentTextRange&gt;](ArticleContentTextRange.md)

## Example

```typescript
import type { ArticleContentBlockData } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "mentions": null,
  "urls": null,
} satisfies ArticleContentBlockData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArticleContentBlockData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


