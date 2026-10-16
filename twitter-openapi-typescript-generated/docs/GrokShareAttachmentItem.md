
# GrokShareAttachmentItem


## Properties

Name | Type
------------ | -------------
`analysisPostIdResults` | [AnalysisResults](AnalysisResults.md)
`deepsearchHeaders` | [Array&lt;DeepsearchHeader&gt;](DeepsearchHeader.md)
`mediaUrls` | Array&lt;string&gt;
`message` | string

## Example

```typescript
import type { GrokShareAttachmentItem } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "analysisPostIdResults": null,
  "deepsearchHeaders": null,
  "mediaUrls": null,
  "message": null,
} satisfies GrokShareAttachmentItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GrokShareAttachmentItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


