
# ArticleContentBlock


## Properties

Name | Type
------------ | -------------
`data` | [ArticleContentBlockData](ArticleContentBlockData.md)
`entityRanges` | [Array&lt;ArticleContentEntityRange&gt;](ArticleContentEntityRange.md)
`inlineStyleRanges` | [Array&lt;ArticleContentInlineStyleRange&gt;](ArticleContentInlineStyleRange.md)
`key` | string
`text` | string
`type` | string

## Example

```typescript
import type { ArticleContentBlock } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "data": null,
  "entityRanges": null,
  "inlineStyleRanges": null,
  "key": null,
  "text": null,
  "type": null,
} satisfies ArticleContentBlock

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArticleContentBlock
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


