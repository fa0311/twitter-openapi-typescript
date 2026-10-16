import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('getCommunitiesFetchOneQuery', async () => {
  logger.log('getCommunitiesFetchOneQuery');
  const client = await getClient();
  const response = await client.getCommunityApi().getCommunitiesFetchOneQuery({ communityId: '1738874426798870555' });
  logger.log(`${response.data.name}: ${response.data.memberCount} members`);
  expect(response.raw.response.ok).toBe(true);
});

test('getCommunityQuery', async () => {
  logger.log('getCommunityQuery');
  const client = await getClient();
  const response = await client.getCommunityApi().getCommunityQuery({ communityId: '1493446837214187523' });
  logger.log(`${response.data.name}: ${response.data.memberCount} members`);
  expect(response.raw.response.ok).toBe(true);
});

test('getCommunitiesSearchQuery', async () => {
  logger.log('getCommunitiesSearchQuery');
  const client = await getClient();
  const response = await client.getCommunityApi().getCommunitiesSearchQuery({ query: 'test' });
  response.data.itemsResults.forEach((e) => logger.log(e.result.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getTopicCarouselQuery', async () => {
  logger.log('getTopicCarouselQuery');
  const client = await getClient();
  const response = await client.getCommunityApi().getTopicCarouselQuery();
  response.data.forEach((e) => logger.log(e.topicName));
  expect(response.raw.response.ok).toBe(true);
});

test('getGlobalCommunitiesPostSearchTimeline', async () => {
  logger.log('getGlobalCommunitiesPostSearchTimeline');
  const client = await getClient();
  const response = await client.getCommunityApi().getGlobalCommunitiesPostSearchTimeline({ rawQuery: 'test' });
  response.data.data.forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getGlobalCommunitiesLatestPostSearchTimeline', async () => {
  logger.log('getGlobalCommunitiesLatestPostSearchTimeline');
  const client = await getClient();
  const response = await client.getCommunityApi().getGlobalCommunitiesLatestPostSearchTimeline({ rawQuery: 'test' });
  response.data.data.forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});
