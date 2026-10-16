
# TwitterList


## Properties

Name | Type
------------ | -------------
`createdAt` | number
`customBannerMedia` | [ListBannerMedia](ListBannerMedia.md)
`customBannerMediaResults` | [ListBannerMediaResults](ListBannerMediaResults.md)
`defaultBannerMedia` | [ListBannerMedia](ListBannerMedia.md)
`defaultBannerMediaResults` | [ListBannerMediaResults](ListBannerMediaResults.md)
`description` | string
`facepileUrls` | Array&lt;string&gt;
`followersContext` | string
`following` | boolean
`id` | string
`idStr` | string
`isMember` | boolean
`memberCount` | number
`membersContext` | string
`mode` | string
`muting` | boolean
`name` | string
`pinning` | boolean
`subscriberCount` | number
`userResults` | [UserResults](UserResults.md)

## Example

```typescript
import type { TwitterList } from 'twitter-openapi-typescript-generated'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "customBannerMedia": null,
  "customBannerMediaResults": null,
  "defaultBannerMedia": null,
  "defaultBannerMediaResults": null,
  "description": null,
  "facepileUrls": null,
  "followersContext": null,
  "following": null,
  "id": null,
  "idStr": null,
  "isMember": null,
  "memberCount": null,
  "membersContext": null,
  "mode": null,
  "muting": null,
  "name": null,
  "pinning": null,
  "subscriberCount": null,
  "userResults": null,
} satisfies TwitterList

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TwitterList
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


