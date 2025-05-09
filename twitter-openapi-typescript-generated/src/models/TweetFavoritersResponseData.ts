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
import type { TimelineResult } from './TimelineResult';
import {
    TimelineResultFromJSON,
    TimelineResultFromJSONTyped,
    TimelineResultToJSON,
    TimelineResultToJSONTyped,
} from './TimelineResult';

/**
 * 
 * @export
 * @interface TweetFavoritersResponseData
 */
export interface TweetFavoritersResponseData {
    /**
     * 
     * @type {TimelineResult}
     * @memberof TweetFavoritersResponseData
     */
    favoritersTimeline?: TimelineResult;
}

/**
 * Check if a given object implements the TweetFavoritersResponseData interface.
 */
export function instanceOfTweetFavoritersResponseData(value: object): value is TweetFavoritersResponseData {
    return true;
}

export function TweetFavoritersResponseDataFromJSON(json: any): TweetFavoritersResponseData {
    return TweetFavoritersResponseDataFromJSONTyped(json, false);
}

export function TweetFavoritersResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetFavoritersResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'favoritersTimeline': json['favoriters_timeline'] == null ? undefined : TimelineResultFromJSON(json['favoriters_timeline']),
    };
}

export function TweetFavoritersResponseDataToJSON(json: any): TweetFavoritersResponseData {
    return TweetFavoritersResponseDataToJSONTyped(json, false);
}

export function TweetFavoritersResponseDataToJSONTyped(value?: TweetFavoritersResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'favoriters_timeline': TimelineResultToJSON(value['favoritersTimeline']),
    };
}

