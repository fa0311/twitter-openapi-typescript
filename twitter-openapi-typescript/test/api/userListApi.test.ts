import { getClient, getUserId, logger } from '@test/init';
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

test('getBlueVerifiedFollowers', async () => {
  logger.log('getBlueVerifiedFollowers');
  const client = await getClient();
  const response = await client.getUserListApi().getBlueVerifiedFollowers({ userId: '44196397' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListMembers', async () => {
  logger.log('getListMembers');
  const client = await getClient();
  const response = await client.getUserListApi().getListMembers({ listId: '1141162794290520064' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListSubscribers', async () => {
  logger.log('getListSubscribers');
  const client = await getClient();
  const response = await client.getUserListApi().getListSubscribers({ listId: '1141162794290520064' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListCreationRecommendedUsers', async () => {
  logger.log('getListCreationRecommendedUsers');
  const client = await getClient();
  const response = await client.getUserListApi().getListCreationRecommendedUsers({ listId: '1141162794290520064' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListEditRecommendedUsers', async () => {
  logger.log('getListEditRecommendedUsers');
  const client = await getClient();
  const response = await client.getUserListApi().getListEditRecommendedUsers({ listId: '1141162794290520064' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListOwnerships', async () => {
  logger.log('getListOwnerships');
  const client = await getClient();
  const response = await client.getUserListApi().getListOwnerships({ userId: await getUserId() });
  response.data.data.forEach((e) => logger.log(e.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getListByRestId', async () => {
  logger.log('getListByRestId');
  const client = await getClient();
  const response = await client.getUserListApi().getListByRestId({ listId: '1141162794290520064' });
  logger.log(`${response.data.name}: ${response.data.memberCount} members`);
  expect(response.raw.response.ok).toBe(true);
});

test('getListSearchTimeline', async () => {
  logger.log('getListSearchTimeline');
  const client = await getClient();
  const response = await client.getUserListApi().getListSearchTimeline({ rawQuery: 'test' });
  response.data.data.forEach((e) => logger.log(e.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getCombinedLists', async () => {
  logger.log('getCombinedLists');
  const client = await getClient();
  const response = await client.getUserListApi().getCombinedLists({ userId: '44196397' });
  response.data.data.forEach((e) => logger.log(e.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getListsManagementPageTimeline', async () => {
  logger.log('getListsManagementPageTimeline');
  const client = await getClient();
  const response = await client.getUserListApi().getListsManagementPageTimeline();
  response.data.data.forEach((e) => logger.log(e.name));
  expect(response.raw.response.ok).toBe(true);
});
