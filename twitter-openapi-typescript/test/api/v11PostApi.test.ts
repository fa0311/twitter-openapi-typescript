import { getClient, logger } from '@test/init';

test('postCreateFriendships', async () => {
  const client = await getClient();
  const response = await client.getV11PostApi().postCreateFriendships({ userId: '44196397' });
  expect(response.raw.response.ok).toBe(true);
});

test('postDestroyFriendships', async () => {
  const client = await getClient();
  const response = await client.getV11PostApi().postDestroyFriendships({ userId: '44196397' });
  expect(response.raw.response.ok).toBe(true);
});
