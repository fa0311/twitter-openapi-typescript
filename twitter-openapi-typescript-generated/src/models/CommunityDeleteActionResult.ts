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
} from './TypeName';

/**
 * 
 * @export
 * @interface CommunityDeleteActionResult
 */
export interface CommunityDeleteActionResult {
    /**
     * 
     * @type {TypeName}
     * @memberof CommunityDeleteActionResult
     */
    typename: TypeName;
    /**
     * 
     * @type {string}
     * @memberof CommunityDeleteActionResult
     */
    reason: CommunityDeleteActionResultReasonEnum;
}


/**
 * @export
 */
export const CommunityDeleteActionResultReasonEnum = {
    Unavailable: 'Unavailable'
} as const;
export type CommunityDeleteActionResultReasonEnum = typeof CommunityDeleteActionResultReasonEnum[keyof typeof CommunityDeleteActionResultReasonEnum];


/**
 * Check if a given object implements the CommunityDeleteActionResult interface.
 */
export function instanceOfCommunityDeleteActionResult(value: object): value is CommunityDeleteActionResult {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function CommunityDeleteActionResultFromJSON(json: any): CommunityDeleteActionResult {
    return CommunityDeleteActionResultFromJSONTyped(json, false);
}

export function CommunityDeleteActionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityDeleteActionResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'reason': json['reason'],
    };
}

export function CommunityDeleteActionResultToJSON(value?: CommunityDeleteActionResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'reason': value['reason'],
    };
}

