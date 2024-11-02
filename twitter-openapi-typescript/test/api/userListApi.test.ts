import { getClient, logger } from '@test/init';
import { printUser } from '@test/util';

test('getFollowers', async () => {
  logger.log('getFollowers');
  const client = await getClient();
  const response = await client.getUserListApi().getFollowers({ userId: '44196397' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getFollowing', async () => {
  logger.log('getFollowing');
  const client = await getClient();
  const response = await client.getUserListApi().getFollowing({ userId: '44196397' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getFollowersYouKnow', async () => {
  logger.log('getFollowersYouKnow');
  const client = await getClient();
  const response = await client.getUserListApi().getFollowersYouKnow({ userId: '44196397' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getFavoriters', async () => {
  logger.log('getFavoriters');
  const client = await getClient();
  const response = await client.getUserListApi().getFavoriters({ tweetId: '1811571695544860784' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getRetweeters', async () => {
  logger.log('getRetweeters');
  const client = await getClient();
  const response = await client.getUserListApi().getRetweeters({ tweetId: '1349129669258448897' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});
