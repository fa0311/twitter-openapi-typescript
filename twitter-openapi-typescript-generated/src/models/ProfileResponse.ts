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
import type { ProfileResponseData } from './ProfileResponseData';
import {
    ProfileResponseDataFromJSON,
    ProfileResponseDataFromJSONTyped,
    ProfileResponseDataToJSON,
} from './ProfileResponseData';

/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {ProfileResponseData}
     * @memberof ProfileResponse
     */
    data: ProfileResponseData;
}

/**
 * Check if a given object implements the ProfileResponse interface.
 */
export function instanceOfProfileResponse(value: object): value is ProfileResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ProfileResponseFromJSON(json: any): ProfileResponse {
    return ProfileResponseFromJSONTyped(json, false);
}

export function ProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ProfileResponseDataFromJSON(json['data']),
    };
}

export function ProfileResponseToJSON(value?: ProfileResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': ProfileResponseDataToJSON(value['data']),
    };
}

