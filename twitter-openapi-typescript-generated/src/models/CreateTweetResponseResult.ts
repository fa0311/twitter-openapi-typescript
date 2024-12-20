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
import type { CreateTweet } from './CreateTweet';
import {
    CreateTweetFromJSON,
    CreateTweetFromJSONTyped,
    CreateTweetToJSON,
    CreateTweetToJSONTyped,
} from './CreateTweet';

/**
 * 
 * @export
 * @interface CreateTweetResponseResult
 */
export interface CreateTweetResponseResult {
    /**
     * 
     * @type {CreateTweet}
     * @memberof CreateTweetResponseResult
     */
    tweetResults: CreateTweet;
}

/**
 * Check if a given object implements the CreateTweetResponseResult interface.
 */
export function instanceOfCreateTweetResponseResult(value: object): value is CreateTweetResponseResult {
    if (!('tweetResults' in value) || value['tweetResults'] === undefined) return false;
    return true;
}

export function CreateTweetResponseResultFromJSON(json: any): CreateTweetResponseResult {
    return CreateTweetResponseResultFromJSONTyped(json, false);
}

export function CreateTweetResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTweetResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'tweetResults': CreateTweetFromJSON(json['tweet_results']),
    };
}

export function CreateTweetResponseResultToJSON(json: any): CreateTweetResponseResult {
    return CreateTweetResponseResultToJSONTyped(json, false);
}

export function CreateTweetResponseResultToJSONTyped(value?: CreateTweetResponseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'tweet_results': CreateTweetToJSON(value['tweetResults']),
    };
}

