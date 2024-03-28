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
import type { UserResponseData } from './UserResponseData';
import {
    UserResponseDataFromJSON,
    UserResponseDataFromJSONTyped,
    UserResponseDataToJSON,
} from './UserResponseData';

/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {UserResponseData}
     * @memberof UserResponse
     */
    data: UserResponseData;
}

/**
 * Check if a given object implements the UserResponse interface.
 */
export function instanceOfUserResponse(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function UserResponseFromJSON(json: any): UserResponse {
    return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UserResponseDataFromJSON(json['data']),
    };
}

export function UserResponseToJSON(value?: UserResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UserResponseDataToJSON(value['data']),
    };
}

