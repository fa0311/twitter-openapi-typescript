import { HttpsProxyAgent } from 'https-proxy-agent';
import fetch from 'node-fetch';
import { TwitterOpenApi } from 'twitter-openapi-typescript';

(async () => {
  TwitterOpenApi.fetchApi = fetch as any;
  const api = new TwitterOpenApi();
  const proxyAgent = new HttpsProxyAgent('http://0.0.0.0:8080');
  api.setInitOverrides({ agent: proxyAgent } as any);

  const client = await api.getGuestClient();
  const response = await client.getDefaultApi().getTweetResultByRestId({ tweetId: '1349129669258448897' });

  console.log(response);
})();
