import { getClient, logger } from '@test/init';

test('getUserByScreenName', async () => {
  logger.log('getUserByScreenName');
  const client = await getClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
  const legacy = response.data.legacy;
  logger.log(legacy.screenName);
  logger.log(`followedBy: ${legacy.followedBy} following: ${legacy.following}`);
  logger.log(`friendsCount: ${legacy.friendsCount} followersCount: ${legacy.followersCount}`);
  logger.log('┄'.repeat(50));
  expect(0).toBe(0);
});
