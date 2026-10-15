import { TwitterOpenApi } from 'twitter-openapi-typescript';
import { ProxyAgent } from 'undici';

(async () => {
  const dispatcher = new ProxyAgent('http://0.0.0.0:8080');
  TwitterOpenApi.fetchApi = (input, init) => fetch(input, { ...init, dispatcher } as RequestInit);
  const api = new TwitterOpenApi();

  const client = await api.getGuestClient();
  const response = await client.getDefaultApi().getTweetResultByRestId({ tweetId: '1349129669258448897' });

  console.log(response);
})();
