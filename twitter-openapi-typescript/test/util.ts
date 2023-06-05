import { TweetApiUtilsData, UserApiUtilsData } from '@/models';
import { getClient, logger } from '@test/init';

export const printTweet = (tweet: TweetApiUtilsData) => {
  logger.log(`${tweet.user.legacy.screenName}: ${tweet.tweet.legacy.fullText}`.replace(/\n/g, ' '));
  tweet.reply.forEach((reply) => {
    logger.log(`${reply.user.legacy.screenName}: ${reply.tweet.legacy.fullText}`.replace(/\n/g, ' '));
  });
  logger.log('┄'.repeat(50));
};

export const printUser = (user: UserApiUtilsData) => {
  const legacy = user.user.legacy;
  logger.log(legacy.screenName);
  logger.log(`followedBy: ${legacy.followedBy} following: ${legacy.following}`);
  logger.log(`friendsCount: ${legacy.friendsCount} followersCount: ${legacy.followersCount}`);
  logger.log('┄'.repeat(50));
};
