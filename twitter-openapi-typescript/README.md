# twitter-openapi-typescript

## Setup

```sh
npm i twitter-openapi-typescript
```

## Usage

```typescript
  import { TwitterOpenApi } from "twitter-openapi-typescript";

  const api = new TwitterOpenApi();
  const client = await api.getClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
  console.log(response.data.legacy.screenName);
  console.log(`followCount: ${response.data.legacy.friendsCount} followersCount: ${response.data.legacy.followersCount}`);
```

### Node.js

```typescript
  import fetch from "node-fetch";
  const api = new TwitterOpenApi({ fetchApi: fetch as any });
```

### Login

```typescript
  const client = await api.getClientFromCookies('<csrf toke here>', '<auth token here>');
```

### List of APIs

You should read the Test case.
<https://github.com/fa0311/twitter-openapi-typescript/tree/master/twitter-openapi-typescript/test/api>
