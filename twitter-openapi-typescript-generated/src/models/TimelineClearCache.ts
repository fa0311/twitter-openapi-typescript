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
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
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
export function instanceOfTimelineClearCache(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TimelineClearCacheFromJSON(json: any): TimelineClearCache {
    return TimelineClearCacheFromJSONTyped(json, false);
}

export function TimelineClearCacheFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineClearCache {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineClearCacheToJSON(value?: TimelineClearCache | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': InstructionTypeToJSON(value.type),
    };
}

