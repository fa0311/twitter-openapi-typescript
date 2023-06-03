import { getClient, logger } from '@test/init';

test('postCreateTweet', async () => {
  logger.log('postCreateTweet');
  const client = await getClient();
  const time = new Date().toISOString();
  const text = `Tweets from twitter-openapi-typescript🎉\n${time}`;
  const response = await client.getPostApi().postCreateTweet({ tweetText: text });
  expect(0).toBe(0);
});
