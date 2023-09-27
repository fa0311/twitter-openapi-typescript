import * as i from 'twitter-openapi-typescript-generated';

import { TweetApiUtilsData, UserApiUtilsData } from '@/models';
import { logger } from '@test/init';

export const printTweet = (tweet: TweetApiUtilsData) => {
  logger.log(`${tweet.user.legacy.screenName}: ${tweet.tweet.legacy?.fullText}`.replace(/\n/g, ' '));
  tweet.replies.forEach((reply) => {
    reply.tweet.legacy && printLegacyTweet(reply.user.legacy, reply.tweet.legacy);
  });
};

export const printLegacyTweet = (user: i.UserLegacy, tweet: i.TweetLegacy) => {
  const text = `${user.screenName.padStart(20)}: ${tweet.fullText}`.replace(/\n/g, ' ');
  logger.log(text);
};

export const printUser = (user: UserApiUtilsData) => {
  user.user && printLegacyUser(user.user.legacy);
};

export const printLegacyUser = (user: i.UserLegacy) => {
  logger.log(user.screenName);
  logger.log(`listedCount: ${user.listedCount}`);
  logger.log(`followedBy: ${user.followedBy} following: ${user.following}`);
  const text = `friendsCount: ${user.friendsCount} followersCount: ${user.followersCount}`;
  logger.log(text);
  logger.log('┄'.repeat(50));
};
