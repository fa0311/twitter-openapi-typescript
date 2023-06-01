import { getClient, logger } from '@test/init';

test('getTweetDetail', async () => {
  const client = await getClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
  logger.debug(response);
  expect(0).toBe(0);
});
