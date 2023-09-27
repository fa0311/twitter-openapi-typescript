import { getClient, logger } from '@test/init';
import { printLegacyUser } from '@test/util';

test('getUserByRestId', async () => {
  logger.log('getUserByRestId');
  const client = await getClient();
  const response = await client.getUsersApi().getUsersByRestIds({ userIds: ['44196397'] });
  response.data.forEach((e) => {
    e.user && printLegacyUser(e.user.legacy);
  });
  expect(response.raw.response.ok).toBe(true);
});
