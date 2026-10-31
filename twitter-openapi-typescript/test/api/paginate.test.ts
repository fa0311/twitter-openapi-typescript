import { getClient, logger } from '@test/init';
import { printTweet } from '@test/util';
import { paginate } from '@/utils';

test('paginate', async () => {
  logger.log('paginate');
  const client = await getClient();
  const tweets = [];
  for await (const tweet of paginate((cursor) => client.getTweetApi().getUserTweets({ userId: '44196397', cursor }), {
    limit: 30,
  })) {
    printTweet(tweet);
    tweets.push(tweet);
  }
  expect(tweets).toHaveLength(30);
});
