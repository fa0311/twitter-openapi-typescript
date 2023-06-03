# twitter-openapi-typescript@0.0.5

```sh
npm i twitter-openapi-typescript
```

```typescript
  import { TwitterOpenApi } from "twitter-openapi-typescript";
  import fetch from "node-fetch";

  const api = new TwitterOpenApi();
  api.setFetchApi(fetch as any);
  const client = await api.getClientFromCookies('<csrf toke here>', '<auth token here>'); // option
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
  console.log(response.data.legacy.screenName);
  console.log(`followCount: ${response.data.legacy.friendsCount} followersCount: ${response.data.legacy.followersCount}`);
```
