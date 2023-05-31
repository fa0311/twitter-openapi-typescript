import { getClient, logger } from 'test/init';

test('getHomeTimelineRaw', async () => {
  const client = await getClient();
  const response = await client.getTweetApi().api.getHomeTimeline({
    queryId: client.flag.HomeTimeline.queryId,
    variables: JSON.stringify(client.flag.HomeTimeline.variables),
    features: JSON.stringify(client.flag.HomeTimeline.features),
  });
  logger.debug(response);
  response.data.home.homeTimelineUrt.instructions;

  expect(0).toBe(0);
});
