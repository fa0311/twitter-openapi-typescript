import { getClient, logger } from '@test/init';
import { printLegacyUser } from '@test/util';

// X answers UsersByRestIds with 403 outside a browser (Cloudflare), the parameters are the frontend's
test.skip('getUsersByRestIds', async () => {
  logger.log('getUsersByRestIds');
  const client = await getClient();
  const response = await client.getUsersApi().getUsersByRestIds({ userIds: ['44196397'] });
  response.data.forEach((e) => {
    e.user && printLegacyUser(e.user);
  });
  expect(response.raw.response.ok).toBe(true);
});
