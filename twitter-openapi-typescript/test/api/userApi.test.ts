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
  await expect(response).rejects.toThrow(Error);
});

test('getUserByScreenNameFreezed', async () => {
  logger.log('getUserByScreenName');
  const client = await getClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'anal' });
  printUser(response.data);
  expect(response.raw.response.ok).toBe(true);
});

// X answers UserByRestId with 403 outside a browser (Cloudflare), the parameters are the frontend's
test.skip('getUserByRestId', async () => {
  logger.log('getUserByRestId');
  const client = await getClient();
  const response = await client.getUserApi().getUserByRestId({ userId: '44196397' });
  printUser(response.data);
  expect(response.raw.response.ok).toBe(true);
});

test('getViewerBadgeCounts', async () => {
  logger.log('getViewerBadgeCounts');
  const client = await getClient();
  const response = await client.getUserApi().getViewerBadgeCounts();
  logger.log(`unread: ${response.data.totalUnreadCount}`);
  expect(response.raw.response.ok).toBe(true);
});

test('getFetchDraftTweets', async () => {
  logger.log('getFetchDraftTweets');
  const client = await getClient();
  const response = await client.getUserApi().getFetchDraftTweets();
  response.data.forEach((e) => logger.log(e.tweetCreateRequest.status));
  expect(response.raw.response.ok).toBe(true);
});

test('getFetchScheduledTweets', async () => {
  logger.log('getFetchScheduledTweets');
  const client = await getClient();
  const response = await client.getUserApi().getFetchScheduledTweets();
  logger.log(`scheduled: ${response.data.length}`);
  expect(response.raw.response.ok).toBe(true);
});

test('getAboutAccountQuery', async () => {
  logger.log('getAboutAccountQuery');
  const client = await getClient();
  const response = await client.getUserApi().getAboutAccountQuery({ screenName: 'elonmusk' });
  const about = response.data.aboutProfile;
  logger.log(
    `${response.data.core.screenName}: joined ${response.data.core.createdAt}, based in ${about.accountBasedIn}`,
  );
  expect(response.raw.response.ok).toBe(true);
});
