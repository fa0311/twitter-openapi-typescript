import { getClient, logger } from '@test/init';

test('getTweetDetail', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getTweetDetail({ focalTweetId: '1349129669258448897' });
  logger.debug(response);
  expect(0).toBe(0);
});

test('getHomeTimeline', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getHomeTimeline();
  logger.debug(response);
  expect(0).toBe(0);
});

test('getHomeLatestTimeline', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getHomeLatestTimeline();
  logger.debug(response);
  expect(0).toBe(0);
});

test('getListLatestTweetsTimeline', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getListLatestTweetsTimeline({ listId: '1141162794290520064' });
  logger.debug(response);
  expect(0).toBe(0);
});

test('getUserTweets', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getUserTweets({ userId: '44196397' });
  logger.debug(response);
  expect(0).toBe(0);
});

test('getUserTweetsAndReplies', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getUserTweetsAndReplies({ userId: '44196397' });
  logger.debug(response);
  expect(0).toBe(0);
});

test('getUserMedia', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getUserMedia({ userId: '44196397' });
  logger.debug(response);
  expect(0).toBe(0);
});

test('getLikes', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getLikes({ userId: '44196397' });
  logger.debug(response);
  expect(0).toBe(0);
});

test('getBookmarks', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().getBookmarks();
  logger.debug(response);
  expect(0).toBe(0);
});
