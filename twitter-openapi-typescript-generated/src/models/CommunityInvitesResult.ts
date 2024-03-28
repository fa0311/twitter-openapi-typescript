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
 * @interface CommunityInvitesResult
 */
export interface CommunityInvitesResult {
    /**
     * 
     * @type {TypeName}
     * @memberof CommunityInvitesResult
     */
    typename: TypeName;
    /**
     * 
     * @type {string}
     * @memberof CommunityInvitesResult
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof CommunityInvitesResult
     */
    reason: CommunityInvitesResultReasonEnum;
}


/**
 * @export
 */
export const CommunityInvitesResultReasonEnum = {
    Unavailable: 'Unavailable'
} as const;
export type CommunityInvitesResultReasonEnum = typeof CommunityInvitesResultReasonEnum[keyof typeof CommunityInvitesResultReasonEnum];


/**
 * Check if a given object implements the CommunityInvitesResult interface.
 */
export function instanceOfCommunityInvitesResult(value: object): boolean {
    if (!('typename' in value)) return false;
    if (!('message' in value)) return false;
    if (!('reason' in value)) return false;
    return true;
}

export function CommunityInvitesResultFromJSON(json: any): CommunityInvitesResult {
    return CommunityInvitesResultFromJSONTyped(json, false);
}

export function CommunityInvitesResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityInvitesResult {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'message': json['message'],
        'reason': json['reason'],
    };
}

export function CommunityInvitesResultToJSON(value?: CommunityInvitesResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'message': value['message'],
        'reason': value['reason'],
    };
}

