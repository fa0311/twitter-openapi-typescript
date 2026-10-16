import { logger } from '@test/init';
import type * as i from 'twitter-openapi-typescript-generated';
import type { TweetApiUtilsData, UserApiUtilsData } from '@/models';

export const printTweet = (tweet: TweetApiUtilsData) => {
  logger.log(`${tweet.user.core?.screenName}: ${tweet.tweet.legacy?.fullText}`.replace(/\n/g, ' '));
  tweet.replies.forEach((reply) => {
    reply.tweet.legacy && printLegacyTweet(reply.user, reply.tweet.legacy);
  });
};

export const printLegacyTweet = (user: i.User, tweet: i.TweetLegacy) => {
  const text = `${user.core!.screenName.padStart(20)}: ${tweet.fullText}`.replace(/\n/g, ' ');
  logger.log(text);
};

export const printUser = (user: UserApiUtilsData) => {
  user.user && printLegacyUser(user.user);
};

export const printLegacyUser = (user: i.User) => {
  logger.log(user.core!.screenName);
  logger.log(
    `followedBy: ${user.relationshipPerspectives?.followedBy} following: ${user.relationshipPerspectives?.following}`,
  );
  const text = `following: ${user.relationshipCounts?.following} followers: ${user.relationshipCounts?.followers}`;
  logger.log(text);
  logger.log('┄'.repeat(50));
};
