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
const userLegacy = response.data?.user?.legacy;
if (userLegacy) {
  console.log(userLegacy.screenName);
  console.log(`followCount: ${userLegacy.friendsCount} followersCount: ${userLegacy.followersCount}`);
} else {
  console.log('User not found');
}
```

### Login

```typescript
// ct0 and authToken will also work but it is recommended to set all cookies.
const client = await api.getClientFromCookies({
  ct0: '<csrf_token>',
  auth_token: '<auth_token>',
});
```

### Multiple OS

The Token can only be used on the same OS that issued the Token
In other words, if the sec-ch-ua-platform does not match, the Token cannot be used.
This library uses the Linux Chrome header by default.
To use Token issued by Windows, do the following.

```typescript
TwitterOpenApi.additionalApiHeaders = {
  'sec-ch-ua-platform': '"Windows"',
};
```

### List of APIs

You should read the Test case.

<https://github.com/fa0311/twitter-openapi-typescript/tree/master/twitter-openapi-typescript/test/api>

### Customize in detail

Most values exist as static variables. There is no need to change them.

```typescript
import { TwitterOpenApi } from 'twitter-openapi-typescript';
TwitterOpenApi.additionalBrowserHeaders = {};
TwitterOpenApi.additionalApiHeaders = {};
TwitterOpenApi.fetchApi = fetch.bind(globalThis);
```

## License

This project is dual licensed. You can choose one of the following licenses:

- [Custom License](./LICENSE)
- [GNU Affero General Public License v3.0](./LICENSE.AGPL)
