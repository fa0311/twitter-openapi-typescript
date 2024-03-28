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
 * @interface CommunityPinActionResult
 */
export interface CommunityPinActionResult {
    /**
     * 
     * @type {TypeName}
     * @memberof CommunityPinActionResult
     */
    typename: TypeName;
}

/**
 * Check if a given object implements the CommunityPinActionResult interface.
 */
export function instanceOfCommunityPinActionResult(value: object): boolean {
    if (!('typename' in value)) return false;
    return true;
}

export function CommunityPinActionResultFromJSON(json: any): CommunityPinActionResult {
    return CommunityPinActionResultFromJSONTyped(json, false);
}

export function CommunityPinActionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityPinActionResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
    };
}

export function CommunityPinActionResultToJSON(value?: CommunityPinActionResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
    };
}

