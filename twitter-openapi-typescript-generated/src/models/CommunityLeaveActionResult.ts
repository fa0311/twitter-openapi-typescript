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
 * @interface CommunityLeaveActionResult
 */
export interface CommunityLeaveActionResult {
    /**
     * 
     * @type {TypeName}
     * @memberof CommunityLeaveActionResult
     */
    typename: TypeName;
    /**
     * 
     * @type {string}
     * @memberof CommunityLeaveActionResult
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityLeaveActionResult
     */
    reason: CommunityLeaveActionResultReasonEnum;
}


/**
 * @export
 */
export const CommunityLeaveActionResultReasonEnum = {
    ViewerNotMember: 'ViewerNotMember'
} as const;
export type CommunityLeaveActionResultReasonEnum = typeof CommunityLeaveActionResultReasonEnum[keyof typeof CommunityLeaveActionResultReasonEnum];


/**
 * Check if a given object implements the CommunityLeaveActionResult interface.
 */
export function instanceOfCommunityLeaveActionResult(value: object): boolean {
    if (!('typename' in value)) return false;
    if (!('message' in value)) return false;
    if (!('reason' in value)) return false;
    return true;
}

export function CommunityLeaveActionResultFromJSON(json: any): CommunityLeaveActionResult {
    return CommunityLeaveActionResultFromJSONTyped(json, false);
}

export function CommunityLeaveActionResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityLeaveActionResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'message': json['message'],
        'reason': json['reason'],
    };
}

export function CommunityLeaveActionResultToJSON(value?: CommunityLeaveActionResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'message': value['message'],
        'reason': value['reason'],
    };
}

