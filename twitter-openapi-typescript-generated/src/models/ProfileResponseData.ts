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
import type { UserResultByScreenName } from './UserResultByScreenName';
import {
    UserResultByScreenNameFromJSON,
    UserResultByScreenNameFromJSONTyped,
    UserResultByScreenNameToJSON,
} from './UserResultByScreenName';

/**
 * 
 * @export
 * @interface ProfileResponseData
 */
export interface ProfileResponseData {
    /**
     * 
     * @type {UserResultByScreenName}
     * @memberof ProfileResponseData
     */
    userResultByScreenName: UserResultByScreenName;
}

/**
 * Check if a given object implements the ProfileResponseData interface.
 */
export function instanceOfProfileResponseData(value: object): boolean {
    if (!('userResultByScreenName' in value)) return false;
    return true;
}

export function ProfileResponseDataFromJSON(json: any): ProfileResponseData {
    return ProfileResponseDataFromJSONTyped(json, false);
}

export function ProfileResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'userResultByScreenName': UserResultByScreenNameFromJSON(json['user_result_by_screen_name']),
    };
}

export function ProfileResponseDataToJSON(value?: ProfileResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_result_by_screen_name': UserResultByScreenNameToJSON(value['userResultByScreenName']),
    };
}

