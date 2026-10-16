
# Entities


## Properties

Name | Type
------------ | -------------
`hashtags` | [Array&lt;Hashtag&gt;](Hashtag.md)
`media` | [Array&lt;Media&gt;](Media.md)
`smarttags` | [Array&lt;Smarttag&gt;](Smarttag.md)
`symbols` | [Array&lt;Symbol&gt;](Symbol.md)
`timestamps` | [Array&lt;Timestamp&gt;](Timestamp.md)
`urls` | [Array&lt;Url&gt;](Url.md)
`userMentions` | [Array&lt;UserMention&gt;](UserMention.md)

## Example

```typescript
import type { Entities } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "hashtags": null,
  "media": null,
  "smarttags": null,
  "symbols": null,
  "timestamps": null,
  "urls": null,
  "userMentions": null,
} satisfies Entities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Entities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


