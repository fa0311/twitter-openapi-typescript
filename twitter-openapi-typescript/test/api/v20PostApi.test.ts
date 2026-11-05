import { getClient } from '@test/init';
import * as i from 'twitter-openapi-typescript-generated';
import { getKwargs } from '@/utils';

test('postTimelineFeedback', async () => {
  const client = await getClient();
  const flag = client.flag.HomeTimeline;
  const timeline = await new i.TweetApi(client.config).getHomeTimeline(getKwargs(flag, {}), client.initOverrides(flag));
  const actions = timeline.data.home!.homeTimelineUrt.responseObjects!.feedbackActions!;
  const url = actions.find((e) => e.value.feedbackType == 'DontLike')!.value.feedbackUrl!;
  const query = new URL(url, 'https://x.com').searchParams;
  for (const undo of [false, true]) {
    const response = await client.getV20PostApi().postTimelineFeedback({
      feedbackType: query.get('feedback_type')!,
      actionMetadata: query.get('action_metadata')!,
      undo,
    });
    expect(response.raw.response.ok).toBe(true);
  }
});
