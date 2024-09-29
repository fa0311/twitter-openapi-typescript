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
import type { UsersResponseData } from './UsersResponseData';
import {
    UsersResponseDataFromJSON,
    UsersResponseDataFromJSONTyped,
    UsersResponseDataToJSON,
} from './UsersResponseData';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * 
     * @type {UsersResponseData}
     * @memberof UsersResponse
     */
    data: UsersResponseData;
}

/**
 * Check if a given object implements the UsersResponse interface.
 */
export function instanceOfUsersResponse(value: object): value is UsersResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UsersResponseFromJSON(json: any): UsersResponse {
    return UsersResponseFromJSONTyped(json, false);
}

export function UsersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': UsersResponseDataFromJSON(json['data']),
    };
}

export function UsersResponseToJSON(value?: UsersResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': UsersResponseDataToJSON(value['data']),
    };
}

