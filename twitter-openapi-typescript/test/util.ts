import { logger } from '@test/init';
import type * as i from 'twitter-openapi-typescript-generated';
import type { TweetApiUtilsData, UserApiUtilsData } from '@/models';

export const printTweet = (tweet: TweetApiUtilsData) => {
  logger.log(`${tweet.user.legacy.screenName}: ${tweet.tweet.legacy?.fullText}`.replace(/\n/g, ' '));
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
  logger.log(`listedCount: ${user.legacy.listedCount}`);
  logger.log(`followedBy: ${user.legacy.followedBy} following: ${user.legacy.following}`);
  const text = `friendsCount: ${user.legacy.friendsCount} followersCount: ${user.legacy.followersCount}`;
  logger.log(text);
  logger.log('┄'.repeat(50));
};
