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
import type { FollowResponseResult } from './FollowResponseResult';
import {
    FollowResponseResultFromJSON,
    FollowResponseResultFromJSONTyped,
    FollowResponseResultToJSON,
} from './FollowResponseResult';

/**
 * 
 * @export
 * @interface FollowResponseUser
 */
export interface FollowResponseUser {
    /**
     * 
     * @type {FollowResponseResult}
     * @memberof FollowResponseUser
     */
    result: FollowResponseResult;
}

/**
 * Check if a given object implements the FollowResponseUser interface.
 */
export function instanceOfFollowResponseUser(value: object): boolean {
    if (!('result' in value)) return false;
    return true;
}

export function FollowResponseUserFromJSON(json: any): FollowResponseUser {
    return FollowResponseUserFromJSONTyped(json, false);
}

export function FollowResponseUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowResponseUser {
    if (json == null) {
        return json;
    }
    return {
        
        'result': FollowResponseResultFromJSON(json['result']),
    };
}

export function FollowResponseUserToJSON(value?: FollowResponseUser | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': FollowResponseResultToJSON(value['result']),
    };
}

