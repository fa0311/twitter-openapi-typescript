/* tslint:disable */
/* eslint-disable */
/**
 * Twitter OpenAPI
 * Twitter OpenAPI(Swagger) specification
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: yuki@yuki0311.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TweetPreviousCounts
 */
export interface TweetPreviousCounts {
    /**
     * 
     * @type {number}
     * @memberof TweetPreviousCounts
     */
    bookmarkCount: number;
    /**
     * 
     * @type {number}
     * @memberof TweetPreviousCounts
     */
    favoriteCount: number;
    /**
     * 
     * @type {number}
     * @memberof TweetPreviousCounts
     */
    quoteCount: number;
    /**
     * 
     * @type {number}
     * @memberof TweetPreviousCounts
     */
    replyCount: number;
    /**
     * 
     * @type {number}
     * @memberof TweetPreviousCounts
     */
    retweetCount: number;
}

/**
 * Check if a given object implements the TweetPreviousCounts interface.
 */
export function instanceOfTweetPreviousCounts(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bookmarkCount" in value;
    isInstance = isInstance && "favoriteCount" in value;
    isInstance = isInstance && "quoteCount" in value;
    isInstance = isInstance && "replyCount" in value;
    isInstance = isInstance && "retweetCount" in value;

    return isInstance;
}

export function TweetPreviousCountsFromJSON(json: any): TweetPreviousCounts {
    return TweetPreviousCountsFromJSONTyped(json, false);
}

export function TweetPreviousCountsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetPreviousCounts {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookmarkCount': json['bookmark_count'],
        'favoriteCount': json['favorite_count'],
        'quoteCount': json['quote_count'],
        'replyCount': json['reply_count'],
        'retweetCount': json['retweet_count'],
    };
}

export function TweetPreviousCountsToJSON(value?: TweetPreviousCounts | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookmark_count': value.bookmarkCount,
        'favorite_count': value.favoriteCount,
        'quote_count': value.quoteCount,
        'reply_count': value.replyCount,
        'retweet_count': value.retweetCount,
    };
}
