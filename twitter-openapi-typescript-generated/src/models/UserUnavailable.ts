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
 * @interface UserUnavailable
 */
export interface UserUnavailable {
    /**
     * 
     * @type {TypeName}
     * @memberof UserUnavailable
     */
    typename: TypeName;
    /**
     * 
     * @type {string}
     * @memberof UserUnavailable
     */
    message?: string;
    /**
     * 
     * @type {string}
     * @memberof UserUnavailable
     */
    reason: string;
}



/**
 * Check if a given object implements the UserUnavailable interface.
 */
export function instanceOfUserUnavailable(value: object): value is UserUnavailable {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function UserUnavailableFromJSON(json: any): UserUnavailable {
    return UserUnavailableFromJSONTyped(json, false);
}

export function UserUnavailableFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUnavailable {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'message': json['message'] == null ? undefined : json['message'],
        'reason': json['reason'],
    };
}

export function UserUnavailableToJSON(json: any): UserUnavailable {
    return UserUnavailableToJSONTyped(json, false);
}

export function UserUnavailableToJSONTyped(value?: UserUnavailable | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'message': value['message'],
        'reason': value['reason'],
    };
}

