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
import type { UserTweetsData } from './UserTweetsData';
import {
    UserTweetsDataFromJSON,
    UserTweetsDataFromJSONTyped,
    UserTweetsDataToJSON,
} from './UserTweetsData';

/**
 * 
 * @export
 * @interface UserTweetsResponse
 */
export interface UserTweetsResponse {
    /**
     * 
     * @type {UserTweetsData}
     * @memberof UserTweetsResponse
     */
    data: UserTweetsData;
}

/**
 * Check if a given object implements the UserTweetsResponse interface.
 */
export function instanceOfUserTweetsResponse(value: object): value is UserTweetsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UserTweetsResponseFromJSON(json: any): UserTweetsResponse {
    return UserTweetsResponseFromJSONTyped(json, false);
}

export function UserTweetsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTweetsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UserTweetsDataFromJSON(json['data']),
    };
}

export function UserTweetsResponseToJSON(value?: UserTweetsResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UserTweetsDataToJSON(value['data']),
    };
}

