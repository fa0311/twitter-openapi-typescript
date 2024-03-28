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
/**
 * 
 * @export
 * @interface UserValue
 */
export interface UserValue {
    /**
     * 
     * @type {string}
     * @memberof UserValue
     */
    idStr: string;
}

/**
 * Check if a given object implements the UserValue interface.
 */
export function instanceOfUserValue(value: object): boolean {
    if (!('idStr' in value)) return false;
    return true;
}

export function UserValueFromJSON(json: any): UserValue {
    return UserValueFromJSONTyped(json, false);
}

export function UserValueFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserValue {
    if (json == null) {
        return json;
    }
    return {
        
        'idStr': json['id_str'],
    };
}

export function UserValueToJSON(value?: UserValue | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id_str': value['idStr'],
    };
}

