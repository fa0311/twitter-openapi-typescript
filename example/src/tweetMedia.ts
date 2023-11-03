import login from '@/login';

const main = async () => {
  const { client, legacy } = await login();

  const data = await legacy.v1.uploadMedia('test.png');

  client.getPostApi().postCreateTweet({
    tweetText: 'Hello World!!',
    mediaIds: [data],
  });
};

main();
