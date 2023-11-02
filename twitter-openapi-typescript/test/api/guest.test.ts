import { getGuestClient, logger } from '@test/init';
import { printTweet } from '@test/util';

test('getGuestTweetResultByRestId', async () => {
  logger.log('getGuestTweetResultByRestId');
  const client = await getGuestClient();
  const response = await client.getDefaultApi().getTweetResultByRestId({ tweetId: '1349129669258448897' });
  printTweet(response.data!);
  expect(response.raw.response.ok).toBe(true);
});
