
# TweetLegacy


## Properties

Name | Type
------------ | -------------
`bookmarkCount` | number
`bookmarked` | boolean
`conversationControl` | [ConversationControl](ConversationControl.md)
`conversationIdStr` | string
`createdAt` | string
`displayTextRange` | Array&lt;number&gt;
`entities` | [Entities](Entities.md)
`extendedEntities` | [ExtendedEntities](ExtendedEntities.md)
`favoriteCount` | number
`favorited` | boolean
`fullText` | string
`idStr` | string
`inReplyToScreenName` | string
`inReplyToStatusIdStr` | string
`inReplyToUserIdStr` | string
`isQuoteStatus` | boolean
`lang` | string
`limitedActions` | string
`place` | { [key: string]: any; }
`possiblySensitive` | boolean
`possiblySensitiveEditable` | boolean
`quoteCount` | number
`quotedStatusIdStr` | string
`quotedStatusPermalink` | [QuotedStatusPermalink](QuotedStatusPermalink.md)
`replyCount` | number
`retweetCount` | number
`retweeted` | boolean
`retweetedStatusResult` | [ItemResult](ItemResult.md)
`scopes` | [TweetLegacyScopes](TweetLegacyScopes.md)
`selfThread` | [SelfThread](SelfThread.md)
`userIdStr` | string

## Example

```typescript
import type { TweetLegacy } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "bookmarkCount": null,
  "bookmarked": null,
  "conversationControl": null,
  "conversationIdStr": null,
  "createdAt": Sat Dec 31 23:59:59 +0000 2023,
  "displayTextRange": null,
  "entities": null,
  "extendedEntities": null,
  "favoriteCount": null,
  "favorited": null,
  "fullText": null,
  "idStr": null,
  "inReplyToScreenName": null,
  "inReplyToStatusIdStr": null,
  "inReplyToUserIdStr": null,
  "isQuoteStatus": null,
  "lang": null,
  "limitedActions": null,
  "place": null,
  "possiblySensitive": null,
  "possiblySensitiveEditable": null,
  "quoteCount": null,
  "quotedStatusIdStr": null,
  "quotedStatusPermalink": null,
  "replyCount": null,
  "retweetCount": null,
  "retweeted": null,
  "retweetedStatusResult": null,
  "scopes": null,
  "selfThread": null,
  "userIdStr": null,
} satisfies TweetLegacy

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TweetLegacy
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


