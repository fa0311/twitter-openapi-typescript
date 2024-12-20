import { getClient, logger } from '@test/init';
import { printUser } from '@test/util';

test('getUserByScreenName', async () => {
  logger.log('getUserByScreenName');
  const client = await getClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
  printUser(response.data);
  expect(response.raw.response.ok).toBe(true);
});

test('getUserByScreenNameNotFound', async () => {
  logger.log('getUserByScreenName');
  const client = await getClient();
  const response = client.getUserApi().getUserByScreenName({ screenName: 'Wendoleecs' });
  response.catch((e) => logger.log(e.message));
  expect(response).rejects.toThrow(Error);
});

test('getUserByScreenNameFreezed', async () => {
  logger.log('getUserByScreenName');
  const client = await getClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'anal' });
  printUser(response.data);
  expect(response.raw.response.ok).toBe(true);
});

test('getUserByRestId', async () => {
  logger.log('getUserByRestId');
  const client = await getClient();
  const response = await client.getUserApi().getUserByRestId({ userId: '44196397' });
  printUser(response.data);
  expect(response.raw.response.ok).toBe(true);
});
