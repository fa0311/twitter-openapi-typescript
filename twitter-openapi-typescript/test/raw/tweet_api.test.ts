import { getClient, logger } from '@test/init';

test('getHomeTimelineRaw', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().api.getHomeTimelineRaw({
    queryId: client.flag.HomeTimeline.queryId,
    variables: JSON.stringify(client.flag.HomeTimeline.variables),
    features: JSON.stringify(client.flag.HomeTimeline.features),
  });
  const value = await response.value();
  expect(response.raw.ok).toBe(true);
});
