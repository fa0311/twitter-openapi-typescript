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
import type { ItemResult } from './ItemResult';
import {
    ItemResultFromJSON,
    ItemResultFromJSONTyped,
    ItemResultToJSON,
} from './ItemResult';

/**
 * 
 * @export
 * @interface TweetResultByRestIdData
 */
export interface TweetResultByRestIdData {
    /**
     * 
     * @type {ItemResult}
     * @memberof TweetResultByRestIdData
     */
    tweetResult: ItemResult;
}

/**
 * Check if a given object implements the TweetResultByRestIdData interface.
 */
export function instanceOfTweetResultByRestIdData(value: object): value is TweetResultByRestIdData {
    if (!('tweetResult' in value) || value['tweetResult'] === undefined) return false;
    return true;
}

export function TweetResultByRestIdDataFromJSON(json: any): TweetResultByRestIdData {
    return TweetResultByRestIdDataFromJSONTyped(json, false);
}

export function TweetResultByRestIdDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetResultByRestIdData {
    if (json == null) {
        return json;
    }
    return {
        
        'tweetResult': ItemResultFromJSON(json['tweetResult']),
    };
}

export function TweetResultByRestIdDataToJSON(value?: TweetResultByRestIdData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tweetResult': ItemResultToJSON(value['tweetResult']),
    };
}

