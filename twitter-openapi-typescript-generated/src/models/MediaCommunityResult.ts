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
 * @interface MediaCommunityResult
 */
export interface MediaCommunityResult {
    /**
     * 
     * @type {TypeName}
     * @memberof MediaCommunityResult
     */
    typename: TypeName;
    /**
     * 
     * @type {TimelineResult}
     * @memberof MediaCommunityResult
     */
    communityMediaTimeline: TimelineResult;
}



/**
 * Check if a given object implements the MediaCommunityResult interface.
 */
export function instanceOfMediaCommunityResult(value: object): value is MediaCommunityResult {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('communityMediaTimeline' in value) || value['communityMediaTimeline'] === undefined) return false;
    return true;
}

export function MediaCommunityResultFromJSON(json: any): MediaCommunityResult {
    return MediaCommunityResultFromJSONTyped(json, false);
}

export function MediaCommunityResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaCommunityResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'communityMediaTimeline': TimelineResultFromJSON(json['community_media_timeline']),
    };
}

export function MediaCommunityResultToJSON(json: any): MediaCommunityResult {
    return MediaCommunityResultToJSONTyped(json, false);
}

export function MediaCommunityResultToJSONTyped(value?: MediaCommunityResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'community_media_timeline': TimelineResultToJSON(value['communityMediaTimeline']),
    };
}

