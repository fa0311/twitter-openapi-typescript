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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PostCreateTweetRequestVariablesReply
 */
export interface PostCreateTweetRequestVariablesReply {
    /**
     * 
     * @type {Array<object>}
     * @memberof PostCreateTweetRequestVariablesReply
     */
    excludeReplyUserIds: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof PostCreateTweetRequestVariablesReply
     */
    inReplyToTweetId: string;
}

/**
 * Check if a given object implements the PostCreateTweetRequestVariablesReply interface.
 */
export function instanceOfPostCreateTweetRequestVariablesReply(value: object): value is PostCreateTweetRequestVariablesReply {
    if (!('excludeReplyUserIds' in value) || value['excludeReplyUserIds'] === undefined) return false;
    if (!('inReplyToTweetId' in value) || value['inReplyToTweetId'] === undefined) return false;
    return true;
}

export function PostCreateTweetRequestVariablesReplyFromJSON(json: any): PostCreateTweetRequestVariablesReply {
    return PostCreateTweetRequestVariablesReplyFromJSONTyped(json, false);
}

export function PostCreateTweetRequestVariablesReplyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateTweetRequestVariablesReply {
    if (json == null) {
        return json;
    }
    return {
        
        'excludeReplyUserIds': json['exclude_reply_user_ids'],
        'inReplyToTweetId': json['in_reply_to_tweet_id'],
    };
}

export function PostCreateTweetRequestVariablesReplyToJSON(json: any): PostCreateTweetRequestVariablesReply {
    return PostCreateTweetRequestVariablesReplyToJSONTyped(json, false);
}

export function PostCreateTweetRequestVariablesReplyToJSONTyped(value?: PostCreateTweetRequestVariablesReply | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'exclude_reply_user_ids': value['excludeReplyUserIds'],
        'in_reply_to_tweet_id': value['inReplyToTweetId'],
    };
}

