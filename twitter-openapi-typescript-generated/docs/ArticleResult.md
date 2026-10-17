
# ArticleResult


## Properties

Name | Type
------------ | -------------
`contentState` | [ArticleContentState](ArticleContentState.md)
`coverMedia` | [ArticleCoverMedia](ArticleCoverMedia.md)
`id` | string
`isGrokSummaryEligible` | boolean
`lifecycleState` | [ArticleLifecycleState](ArticleLifecycleState.md)
`mediaEntities` | [Array&lt;ArticleCoverMedia&gt;](ArticleCoverMedia.md)
`metadata` | [ArticleMetadata](ArticleMetadata.md)
`previewText` | string
`restId` | string
`summaryText` | string
`title` | string

## Example

```typescript
import type { ArticleResult } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "contentState": null,
  "coverMedia": null,
  "id": null,
  "isGrokSummaryEligible": null,
  "lifecycleState": null,
  "mediaEntities": null,
  "metadata": null,
  "previewText": null,
  "restId": null,
  "summaryText": null,
  "title": null,
} satisfies ArticleResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ArticleResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


