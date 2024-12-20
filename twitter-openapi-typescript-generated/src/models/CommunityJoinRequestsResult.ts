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

/**
 * 
 * @export
 * @interface CommunityJoinRequestsResult
 */
export interface CommunityJoinRequestsResult {
    /**
     * 
     * @type {TypeName}
     * @memberof CommunityJoinRequestsResult
     */
    typename: TypeName;
}



/**
 * Check if a given object implements the CommunityJoinRequestsResult interface.
 */
export function instanceOfCommunityJoinRequestsResult(value: object): value is CommunityJoinRequestsResult {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    return true;
}

export function CommunityJoinRequestsResultFromJSON(json: any): CommunityJoinRequestsResult {
    return CommunityJoinRequestsResultFromJSONTyped(json, false);
}

export function CommunityJoinRequestsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityJoinRequestsResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
    };
}

export function CommunityJoinRequestsResultToJSON(json: any): CommunityJoinRequestsResult {
    return CommunityJoinRequestsResultToJSONTyped(json, false);
}

export function CommunityJoinRequestsResultToJSONTyped(value?: CommunityJoinRequestsResult | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
    };
}

