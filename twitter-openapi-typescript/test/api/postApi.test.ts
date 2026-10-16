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
    inReplyToTweetId: '1788174612037320809',
  });
  expect(response.raw.response.ok).toBe(true);
});

test('postDeleteTweet', async () => {
  logger.log('postDeleteTweet');
  const client = await getClient();
  const time = new Date().toISOString();
  const response = await client.getPostApi().postCreateTweet({ tweetText: `Test[${time}]` });
  expect(response.raw.response.ok).toBe(true);
  const tweetId = response.data.data.createTweet!.tweetResults.result.restId;
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

test('postCreateBookmark', async () => {
  logger.log('postCreateBookmark');
  const client = await getClient();
  const response = await client.getPostApi().postCreateBookmark({ tweetId: '1349129669258448897' });
  expect(response.raw.response.ok).toBe(true);

  const response2 = await client.getPostApi().postDeleteBookmark({ tweetId: '1349129669258448897' });
  expect(response2.raw.response.ok).toBe(true);
});

test('postCreateList', async () => {
  logger.log('postCreateList');
  const client = await getClient();
  const time = new Date().toISOString();
  const response = await client.getPostApi().postCreateList({
    name: `Test${time}`,
    description: 'twitter-openapi-typescript',
    isPrivate: true,
  });
  expect(response.raw.response.ok).toBe(true);
  const listId = response.data.data.list.idStr;
  logger.log(listId);

  const response2 = await client.getPostApi().postListAddMember({ listId: listId, userId: '44196397' });
  expect(response2.raw.response.ok).toBe(true);
  expect(response2.data.data.list.memberCount).toBe(1);

  const response3 = await client.getPostApi().postListRemoveMember({ listId: listId, userId: '44196397' });
  expect(response3.raw.response.ok).toBe(true);

  const response4 = await client.getPostApi().postDeleteList({ listId: listId });
  expect(response4.raw.response.ok).toBe(true);
});

test('postCreateDraftTweet', async () => {
  logger.log('postCreateDraftTweet');
  const client = await getClient();
  const time = new Date().toISOString();
  const response = await client.getPostApi().postCreateDraftTweet({ status: `Test${time}` });
  expect(response.raw.response.ok).toBe(true);
  const draftId = response.data.data.tweet.restId;

  const response2 = await client.getPostApi().postDeleteDraftTweets({ draftTweetIds: [draftId] });
  expect(response2.raw.response.ok).toBe(true);
});
