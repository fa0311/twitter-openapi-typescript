
# Tweet


## Properties

Name | Type
------------ | -------------
`typename` | [TypeName](TypeName.md)
`article` | [Article](Article.md)
`authorCommunityRelationship` | [AuthorCommunityRelationship](AuthorCommunityRelationship.md)
`birdwatchPivot` | [BirdwatchPivot](BirdwatchPivot.md)
`card` | [TweetCard](TweetCard.md)
`cashtagAttachments` | [Array&lt;CashtagAttachment&gt;](CashtagAttachment.md)
`communityRelationship` | [CommunityRelationship](CommunityRelationship.md)
`communityResults` | [CommunityResult](CommunityResult.md)
`contentDisclosure` | [ContentDisclosure](ContentDisclosure.md)
`core` | [UserResultCore](UserResultCore.md)
`editControl` | [TweetEditControl](TweetEditControl.md)
`editPrespective` | [TweetEditPrespective](TweetEditPrespective.md)
`grokAnalysisButton` | boolean
`grokAnalysisFollowups` | Array&lt;string&gt;
`grokAnnotations` | [GrokAnnotation](GrokAnnotation.md)
`grokShareAttachment` | [GrokShareAttachment](GrokShareAttachment.md)
`grokTranslatedPostWithAvailability` | [GrokTranslatedPostWithAvailability](GrokTranslatedPostWithAvailability.md)
`hasBirdwatchNotes` | boolean
`isTranslatable` | boolean
`jetfuelAttachment` | [JetfuelAttachment](JetfuelAttachment.md)
`legacy` | [TweetLegacy](TweetLegacy.md)
`nestedQuotedTweetResults` | [ItemResult](ItemResult.md)
`noteTweet` | [NoteTweet](NoteTweet.md)
`postCta` | [TweetPostCta](TweetPostCta.md)
`postImageDescription` | string
`postVideoDescription` | string
`previousCounts` | [TweetPreviousCounts](TweetPreviousCounts.md)
`quickPromoteEligibility` | object
`quotedRefResult` | [QuotedRefResult](QuotedRefResult.md)
`quotedStatusResult` | [ItemResult](ItemResult.md)
`restId` | string
`source` | string
`superFollowsReplyUserResult` | [SuperFollowsReplyUserResult](SuperFollowsReplyUserResult.md)
`trendResults` | [TrendResults](TrendResults.md)
`unifiedCard` | [UnifiedCard](UnifiedCard.md)
`unmentionData` | object
`views` | [TweetView](TweetView.md)
`voiceInfo` | object

## Example

```typescript
import type { Tweet } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "typename": null,
  "article": null,
  "authorCommunityRelationship": null,
  "birdwatchPivot": null,
  "card": null,
  "cashtagAttachments": null,
  "communityRelationship": null,
  "communityResults": null,
  "contentDisclosure": null,
  "core": null,
  "editControl": null,
  "editPrespective": null,
  "grokAnalysisButton": null,
  "grokAnalysisFollowups": null,
  "grokAnnotations": null,
  "grokShareAttachment": null,
  "grokTranslatedPostWithAvailability": null,
  "hasBirdwatchNotes": null,
  "isTranslatable": null,
  "jetfuelAttachment": null,
  "legacy": null,
  "nestedQuotedTweetResults": null,
  "noteTweet": null,
  "postCta": null,
  "postImageDescription": null,
  "postVideoDescription": null,
  "previousCounts": null,
  "quickPromoteEligibility": null,
  "quotedRefResult": null,
  "quotedStatusResult": null,
  "restId": null,
  "source": null,
  "superFollowsReplyUserResult": null,
  "trendResults": null,
  "unifiedCard": null,
  "unmentionData": null,
  "views": null,
  "voiceInfo": null,
} satisfies Tweet

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Tweet
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


