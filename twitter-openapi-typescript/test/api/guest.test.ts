import { getGuestClient, logger } from '@test/init';
import { printTweet, printUser } from '@test/util';

test('getGuestTweetResultByRestId', async () => {
  logger.log('getGuestTweetResultByRestId');
  const client = await getGuestClient();
  const response = await client.getDefaultApi().getTweetResultByRestId({ tweetId: '1349129669258448897' });
  printTweet(response.data!);
  expect(response.raw.response.ok).toBe(true);
});

test('getGuestUserByScreenName', async () => {
  logger.log('getGuestUserByScreenName');
  const client = await getGuestClient();
  const response = await client.getUserApi().getUserByScreenName({ screenName: 'elonmusk' });
  printUser(response.data);
  expect(response.raw.response.ok).toBe(true);
});
