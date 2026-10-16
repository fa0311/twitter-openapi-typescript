import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('getBirdwatchFetchAliasSelfSelectStatus', async () => {
  logger.log('getBirdwatchFetchAliasSelfSelectStatus');
  const client = await getClient();
  const response = await client.getBirdwatchApi().getBirdwatchFetchAliasSelfSelectStatus();
  logger.log(`canSelect: ${response.data.canSelect} hasSelected: ${response.data.hasSelected}`);
  expect(response.raw.response.ok).toBe(true);
});

test('getBirdwatchFetchAuthenticatedUserProfile', async () => {
  logger.log('getBirdwatchFetchAuthenticatedUserProfile');
  const client = await getClient();
  const response = await client.getBirdwatchApi().getBirdwatchFetchAuthenticatedUserProfile();
  logger.log(response.data.alias);
  expect(response.raw.response.ok).toBe(true);
});

test('getBirdwatchFetchBirdwatchProfile', async () => {
  logger.log('getBirdwatchFetchBirdwatchProfile');
  const client = await getClient();
  const response = await client.getBirdwatchApi().getBirdwatchFetchBirdwatchProfile({ alias: 'me' });
  logger.log(response.data.alias);
  expect(response.raw.response.ok).toBe(true);
});

test('getBirdwatchFetchGlobalTimeline', async () => {
  logger.log('getBirdwatchFetchGlobalTimeline');
  const client = await getClient();
  const response = await client.getBirdwatchApi().getBirdwatchFetchGlobalTimeline();
  response.data.data.forEach((e) => printTweet(e));
  expect(response.raw.response.ok).toBe(true);
});

test('getBirdwatchFetchPublicData', async () => {
  logger.log('getBirdwatchFetchPublicData');
  const client = await getClient();
  const response = await client.getBirdwatchApi().getBirdwatchFetchPublicData();
  logger.log(`notes files: ${response.data.notes.urls.length}`);
  expect(response.raw.response.ok).toBe(true);
});
