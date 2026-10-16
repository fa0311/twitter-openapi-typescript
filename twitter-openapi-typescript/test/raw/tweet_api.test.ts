import { getClient } from '@test/init';

test('getHomeTimelineRaw', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().api.getHomeTimelineRaw({
    pathQueryId: client.flag.HomeTimeline.queryId,
    variables: JSON.stringify(client.flag.HomeTimeline.variables),
    features: JSON.stringify(client.flag.HomeTimeline.features),
    fieldToggles: JSON.stringify(client.flag.HomeTimeline.fieldToggles),
  });
  const _value = await response.value();
  expect(response.raw.ok).toBe(true);
});
