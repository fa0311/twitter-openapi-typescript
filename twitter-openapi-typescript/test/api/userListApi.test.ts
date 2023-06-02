import { getClient, logger } from '@test/init';
import { printUser } from '@test/util';

test('getFollowers', async () => {
  logger.log('getFollowers');
  const client = await getClient();
  const response = await client.getUserListApi().getFollowers({ userId: '44196397' });
  response.data.forEach((e) => printUser(e));
  expect(0).toBe(0);
});

test('getFollowing', async () => {
  logger.log('getFollowing');
  const client = await getClient();
  const response = await client.getUserListApi().getFollowing({ userId: '44196397' });
  response.data.forEach((e) => printUser(e));
  expect(0).toBe(0);
});
