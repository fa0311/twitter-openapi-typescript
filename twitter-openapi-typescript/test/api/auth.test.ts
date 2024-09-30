import { getClient } from '@test/init';
import { DefaultApi } from 'twitter-openapi-typescript-generated';

test('test auth', async () => {
  const client = await getClient();
  const that = client.getDefaultApi();
  const fn = DefaultApi.prototype['request'].bind(that.api);

  DefaultApi.prototype['request'] = (...args) => {
    console.log('request', args);
    return fn(...args);
  };
  const response = that.getProfileSpotlightsQuery({ screenName: 'elonmusk' });
});
