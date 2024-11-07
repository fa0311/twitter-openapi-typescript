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
import type { ListTweetsTimelineList } from './ListTweetsTimelineList';
import {
    ListTweetsTimelineListFromJSON,
    ListTweetsTimelineListFromJSONTyped,
    ListTweetsTimelineListToJSON,
} from './ListTweetsTimelineList';

/**
 * 
 * @export
 * @interface ListTweetsTimelineData
 */
export interface ListTweetsTimelineData {
    /**
     * 
     * @type {ListTweetsTimelineList}
     * @memberof ListTweetsTimelineData
     */
    list?: ListTweetsTimelineList;
}

/**
 * Check if a given object implements the ListTweetsTimelineData interface.
 */
export function instanceOfListTweetsTimelineData(value: object): value is ListTweetsTimelineData {
    return true;
}

export function ListTweetsTimelineDataFromJSON(json: any): ListTweetsTimelineData {
    return ListTweetsTimelineDataFromJSONTyped(json, false);
}

export function ListTweetsTimelineDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListTweetsTimelineData {
    if (json == null) {
        return json;
    }
    return {
        
        'list': json['list'] == null ? undefined : ListTweetsTimelineListFromJSON(json['list']),
    };
}

export function ListTweetsTimelineDataToJSON(value?: ListTweetsTimelineData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'list': ListTweetsTimelineListToJSON(value['list']),
    };
}

