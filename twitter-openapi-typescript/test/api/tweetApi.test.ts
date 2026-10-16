import { getClient, getUserId, logger } from '@test/init';
import { printTweet, printUser } from '@test/util';

test('getTweetDetail', async () => {
  logger.log('getTweetDetail');
  const client = await getClient();
  const response = await client.getTweetApi().getTweetDetail({ focalTweetId: '1349129669258448897' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getSearchTimeline', async () => {
  logger.log('getSearchTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getSearchTimeline({ rawQuery: 'elonmusk' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getHomeTimeline', async () => {
  logger.log('getHomeTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getHomeTimeline();
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getHomeLatestTimeline', async () => {
  logger.log('getHomeLatestTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getHomeLatestTimeline();
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getListLatestTweetsTimeline', async () => {
  logger.log('getListLatestTweetsTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getListLatestTweetsTimeline({ listId: '1141162794290520064' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserTweets', async () => {
  logger.log('getUserTweets');
  const client = await getClient();
  const response = await client.getTweetApi().getUserTweets({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserTweetsAndReplies', async () => {
  logger.log('getUserTweetsAndReplies');
  const client = await getClient();
  const response = await client.getTweetApi().getUserTweetsAndReplies({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserMedia', async () => {
  logger.log('getUserMedia');
  const client = await getClient();
  const response = await client.getTweetApi().getUserMedia({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});
test('getUserOriginalsTimeline', async () => {
  logger.log('getUserOriginalsTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getUserOriginalsTimeline({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});
test('getUserRepliesTimeline', async () => {
  logger.log('getUserRepliesTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getUserRepliesTimeline({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});
test('getUserVideoTimeline', async () => {
  logger.log('getUserVideoTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getUserVideoTimeline({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getLikes', async () => {
  logger.log('getLikes');
  const client = await getClient();
  const response = await client.getTweetApi().getLikes({ userId: await getUserId() });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getBookmarks', async () => {
  logger.log('getBookmarks');
  const client = await getClient();
  const response = await client.getTweetApi().getBookmarks();
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getCommunityTweets', async () => {
  logger.log('getCommunityTweets');
  const client = await getClient();
  const response = await client.getTweetApi().getCommunityTweetsTimeline({ communityId: '1489422448332197888' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getCommunityMedia', async () => {
  logger.log('getCommunityMedia');
  const client = await getClient();
  const response = await client.getTweetApi().getCommunityMediaTimeline({ communityId: '1489422448332197888' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserHighlightsTweets', async () => {
  logger.log('getUserHighlightsTweets');
  const client = await getClient();
  const response = await client.getTweetApi().getUserHighlightsTweets({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserRepostsTimeline', async () => {
  logger.log('getUserRepostsTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getUserRepostsTimeline({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getUserSuperFollowTweets', async () => {
  logger.log('getUserSuperFollowTweets');
  const client = await getClient();
  const response = await client.getTweetApi().getUserSuperFollowTweets({ userId: '44196397' });
  response.data.data.filter((e) => !e.promotedMetadata).forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getExplorePage', async () => {
  logger.log('getExplorePage');
  const client = await getClient();
  const response = await client.getTweetApi().getExplorePage();
  response.data.data.forEach((e) => logger.log(e.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getGenericTimelineById', async () => {
  logger.log('getGenericTimelineById');
  const client = await getClient();
  const timelineId = client.flag.GenericTimelineById.variables.timelineId;
  const response = await client.getTweetApi().getGenericTimelineById({ timelineId: timelineId });
  response.data.data.forEach((e) => logger.log(e.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getNotificationsTimeline', async () => {
  logger.log('getNotificationsTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getNotificationsTimeline();
  response.data.data.forEach((e) => logger.log(e.richMessage.text));
  expect(response.raw.response.ok).toBe(true);
});

test('getCommunityDiscoveryTimeline', async () => {
  logger.log('getCommunityDiscoveryTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getCommunityDiscoveryTimeline();
  response.data.data.forEach((e) => logger.log(e.community.name));
  expect(response.raw.response.ok).toBe(true);
});

test('getCommunityAboutTimeline', async () => {
  logger.log('getCommunityAboutTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getCommunityAboutTimeline({ communityId: '1489422448332197888' });
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getConnectTabTimeline', async () => {
  logger.log('getConnectTabTimeline');
  const client = await getClient();
  const response = await client.getTweetApi().getConnectTabTimeline();
  response.data.data.forEach((e) => printUser(e));
  expect(response.raw.response.ok).toBe(true);
});
