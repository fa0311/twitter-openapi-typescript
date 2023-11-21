import { getClient, logger } from '@test/init';

test('postCreateTweet', async () => {
  logger.log('postCreateTweet');
  const client = await getClient();
  const time = new Date().toISOString();
  const response = await client.getPostApi().postCreateTweet({ tweetText: `Test[${time}]` });
  expect(response.raw.response.ok).toBe(true);
});

test('postCreateReplyTweet', async () => {
  logger.log('postCreateTweet');
  const client = await getClient();
  const time = new Date().toISOString();
  const response = await client.getPostApi().postCreateTweet({
    tweetText: `Test[${time}]`,
    inReplyToTweetId: '1726807635754914204',
  });
  expect(response.raw.response.ok).toBe(true);
});

test('postDeleteTweet', async () => {
  logger.log('postDeleteTweet');
  const client = await getClient();
  const time = new Date().toISOString();
  const response = await client.getPostApi().postCreateTweet({ tweetText: `Test[${time}]` });
  expect(response.raw.response.ok).toBe(true);
  const tweetId = response.data.data.createTweet.tweetResults.result.restId;
  logger.log(tweetId);

  const response2 = await client.getPostApi().postDeleteTweet({ tweetId: tweetId });
  expect(response2.raw.response.ok).toBe(true);
});

test('postCreateRetweet', async () => {
  logger.log('postCreateRetweet');
  const client = await getClient();
  const response = await client.getPostApi().postCreateRetweet({ tweetId: '1349129669258448897' });
  expect(response.raw.response.ok).toBe(true);
});

test('postDeleteRetweet', async () => {
  logger.log('postDeleteRetweet');
  const client = await getClient();
  const response = await client.getPostApi().postDeleteRetweet({ sourceTweetId: '1349129669258448897' });
  expect(response.raw.response.ok).toBe(true);
});

test('postFavoriteTweet', async () => {
  logger.log('postFavoriteTweet');
  const client = await getClient();
  const response = await client.getPostApi().postFavoriteTweet({ tweetId: '1349129669258448897' });
  expect(response.raw.response.ok).toBe(true);
});

test('postUnfavoriteTweet', async () => {
  logger.log('postUnfavoriteTweet');
  const client = await getClient();
  const response = await client.getPostApi().postUnfavoriteTweet({ tweetId: '1349129669258448897' });
  expect(response.raw.response.ok).toBe(true);
});
