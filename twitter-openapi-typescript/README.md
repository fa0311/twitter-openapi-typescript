# twitter-openapi-typescript

## Setup

```sh
npm i twitter-openapi-typescript
```

## Usage

```typescript
import { TwitterOpenApi } from 'twitter-openapi-typescript';

const api = new TwitterOpenApi();
const client = await api.getGuestClient();
const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
console.log(response.data.legacy.screenName);
console.log(`followCount: ${response.data.legacy.friendsCount} followersCount: ${response.data.legacy.followersCount}`);
```

### Login

```typescript
// ct0 and authToken will also work but it is recommended to set all cookies.
const client = await api.getClientFromCookies({
  ct0: '<csrf_token>',
  auth_token: '<auth_token>',
});
```

### List of APIs

You should read the Test case.
aaaaa

<https://github.com/fa0311/twitter-openapi-typescript/tree/master/twitter-openapi-typescript/test/api>

### Customize in detail

Most values exist as static variables. There is no need to change them.

```typescript
import { TwitterOpenApi } from 'twitter-openapi-typescript';
TwitterOpenApi.url = 'twitter-openapi placeholder json url';
TwitterOpenApi.twitter = 'twitter first access url';
TwitterOpenApi.userAgent = 'user agent';
TwitterOpenApi.bearer = 'bearer token';
TwitterOpenApi.browser_headers = 'browser headers';
TwitterOpenApi.api_key = 'api key';
```

## License

This project is dual licensed. You can choose one of the following licenses:

- [Custom License](./LICENSE)
- [GNU Affero General Public License v3.0](./LICENSE.AGPL)
