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
import type { UserResults } from './UserResults';
import {
    UserResultsFromJSON,
    UserResultsFromJSONTyped,
    UserResultsToJSON,
} from './UserResults';

/**
 * 
 * @export
 * @interface UsersResponseData
 */
export interface UsersResponseData {
    /**
     * 
     * @type {Array<UserResults>}
     * @memberof UsersResponseData
     */
    users: Array<UserResults>;
}

/**
 * Check if a given object implements the UsersResponseData interface.
 */
export function instanceOfUsersResponseData(value: object): value is UsersResponseData {
    if (!('users' in value) || value['users'] === undefined) return false;
    return true;
}

export function UsersResponseDataFromJSON(json: any): UsersResponseData {
    return UsersResponseDataFromJSONTyped(json, false);
}

export function UsersResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'users': ((json['users'] as Array<any>).map(UserResultsFromJSON)),
    };
}

export function UsersResponseDataToJSON(value?: UsersResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'users': ((value['users'] as Array<any>).map(UserResultsToJSON)),
    };
}

