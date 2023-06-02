import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('gettProfileSpotlightsQuery', async () => {
  logger.log('gettProfileSpotlightsQuery');
  const client = await getClient();
  const response = await client.getDefaultApi().gettProfileSpotlightsQuery({ screenName: 'elonmusk' });
  const legacy = response.result.legacy;
  logger.log(legacy.screenName);
  logger.log(`followedBy: ${legacy.followedBy} following: ${legacy.following}`);
  logger.log('┄'.repeat(50));
  expect(0).toBe(0);
});
