import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('getProfileSpotlightsQuery', async () => {
  logger.log('getProfileSpotlightsQuery');
  const client = await getClient();
  const response = await client.getDefaultApi().getProfileSpotlightsQuery({ screenName: 'elonmusk' });
  const result = response.data.result;
  logger.log(result.core.screenName ?? 'undefined');
  logger.log(`followedBy: ${result.legacy?.followedBy} following: ${result.legacy?.following}`);
  logger.log('┄'.repeat(50));
  expect(response.raw.response.ok).toBe(true);
});

test('getTweetResultByRestId', async () => {
  logger.log('getTweetResultByRestId');
  const client = await getClient();
  const response = await client.getDefaultApi().getTweetResultByRestId({ tweetId: '1349129669258448897' });
  printTweet(response.data!);
  expect(response.raw.response.ok).toBe(true);
});

test('getAuthenticatePeriscope', async () => {
  logger.log('getAuthenticatePeriscope');
  const client = await getClient();
  const response = await client.getDefaultApi().getAuthenticatePeriscope();
  logger.log(`token length: ${response.data.length}`);
  expect(response.raw.response.ok).toBe(true);
});

test('getCreatorStudioTabBarItemQuery', async () => {
  logger.log('getCreatorStudioTabBarItemQuery');
  const client = await getClient();
  const response = await client.getDefaultApi().getCreatorStudioTabBarItemQuery();
  logger.log(`tasks: ${response.data.xpaymentsAudienceRewardsTasks.length}`);
  expect(response.raw.response.ok).toBe(true);
});

test('getDataSaverMode', async () => {
  logger.log('getDataSaverMode');
  const client = await getClient();
  const response = await client.getDefaultApi().getDataSaverMode();
  logger.log(JSON.stringify(response.data.viewer));
  expect(response.raw.response.ok).toBe(true);
});

test('getGrokHome', async () => {
  logger.log('getGrokHome');
  const client = await getClient();
  const response = await client.getDefaultApi().getGrokHome();
  logger.log(`grok ${response.data.grokVersion}: ${response.data.grokModelOptions.map((m) => m.name).join(', ')}`);
  expect(response.raw.response.ok).toBe(true);
});

test('getPinnedTimelines', async () => {
  logger.log('getPinnedTimelines');
  const client = await getClient();
  const response = await client.getDefaultApi().getPinnedTimelines();
  logger.log(`pinned: ${response.data.pinnedTimelines.length}`);
  expect(response.raw.response.ok).toBe(true);
});
