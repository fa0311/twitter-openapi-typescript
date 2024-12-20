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
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
    InstructionTypeToJSONTyped,
} from './InstructionType';

/**
 * 
 * @export
 * @interface TimelineClearCache
 */
export interface TimelineClearCache {
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineClearCache
     */
    type: InstructionType;
}



/**
 * Check if a given object implements the TimelineClearCache interface.
 */
export function instanceOfTimelineClearCache(value: object): value is TimelineClearCache {
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TimelineClearCacheFromJSON(json: any): TimelineClearCache {
    return TimelineClearCacheFromJSONTyped(json, false);
}

export function TimelineClearCacheFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineClearCache {
    if (json == null) {
        return json;
    }
    return {
        
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineClearCacheToJSON(json: any): TimelineClearCache {
    return TimelineClearCacheToJSONTyped(json, false);
}

export function TimelineClearCacheToJSONTyped(value?: TimelineClearCache | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': InstructionTypeToJSON(value['type']),
    };
}

