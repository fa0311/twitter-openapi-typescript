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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
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
export function instanceOfCommunityJoinRequestsResult(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "typename" in value;

    return isInstance;
}

export function CommunityJoinRequestsResultFromJSON(json: any): CommunityJoinRequestsResult {
    return CommunityJoinRequestsResultFromJSONTyped(json, false);
}

export function CommunityJoinRequestsResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityJoinRequestsResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
    };
}

export function CommunityJoinRequestsResultToJSON(value?: CommunityJoinRequestsResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
    };
}

