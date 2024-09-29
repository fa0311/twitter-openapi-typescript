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
import type { ListTweetsTimeline } from './ListTweetsTimeline';
import {
    ListTweetsTimelineFromJSON,
    ListTweetsTimelineFromJSONTyped,
    ListTweetsTimelineToJSON,
} from './ListTweetsTimeline';

/**
 * 
 * @export
 * @interface ListTweetsTimelineList
 */
export interface ListTweetsTimelineList {
    /**
     * 
     * @type {ListTweetsTimeline}
     * @memberof ListTweetsTimelineList
     */
    tweetsTimeline: ListTweetsTimeline;
}

/**
 * Check if a given object implements the ListTweetsTimelineList interface.
 */
export function instanceOfListTweetsTimelineList(value: object): value is ListTweetsTimelineList {
    if (!('tweetsTimeline' in value) || value['tweetsTimeline'] === undefined) return false;
    return true;
}

export function ListTweetsTimelineListFromJSON(json: any): ListTweetsTimelineList {
    return ListTweetsTimelineListFromJSONTyped(json, false);
}

export function ListTweetsTimelineListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTweetsTimelineList {
    if (json == null) {
        return json;
    }
    return {
        
        'tweetsTimeline': ListTweetsTimelineFromJSON(json['tweets_timeline']),
    };
}

export function ListTweetsTimelineListToJSON(value?: ListTweetsTimelineList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'tweets_timeline': ListTweetsTimelineToJSON(value['tweetsTimeline']),
    };
}

