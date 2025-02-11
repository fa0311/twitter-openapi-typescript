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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
    TypeNameToJSONTyped,
} from './TypeName';
import type { FollowTimeline } from './FollowTimeline';
import {
    FollowTimelineFromJSON,
    FollowTimelineFromJSONTyped,
    FollowTimelineToJSON,
    FollowTimelineToJSONTyped,
} from './FollowTimeline';

/**
 * 
 * @export
 * @interface FollowResponseResult
 */
export interface FollowResponseResult {
    /**
     * 
     * @type {TypeName}
     * @memberof FollowResponseResult
     */
    typename: TypeName;
    /**
     * 
     * @type {FollowTimeline}
     * @memberof FollowResponseResult
     */
    timeline: FollowTimeline;
}



/**
 * Check if a given object implements the FollowResponseResult interface.
 */
export function instanceOfFollowResponseResult(value: object): value is FollowResponseResult {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('timeline' in value) || value['timeline'] === undefined) return false;
    return true;
}

export function FollowResponseResultFromJSON(json: any): FollowResponseResult {
    return FollowResponseResultFromJSONTyped(json, false);
}

export function FollowResponseResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowResponseResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'timeline': FollowTimelineFromJSON(json['timeline']),
    };
}

export function FollowResponseResultToJSON(json: any): FollowResponseResult {
    return FollowResponseResultToJSONTyped(json, false);
}

export function FollowResponseResultToJSONTyped(value?: FollowResponseResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'timeline': FollowTimelineToJSON(value['timeline']),
    };
}

