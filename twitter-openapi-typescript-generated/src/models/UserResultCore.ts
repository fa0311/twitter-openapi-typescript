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
 * @interface UserResultCore
 */
export interface UserResultCore {
    /**
     * 
     * @type {UserResults}
     * @memberof UserResultCore
     */
    userResults: UserResults;
}

/**
 * Check if a given object implements the UserResultCore interface.
 */
export function instanceOfUserResultCore(value: object): boolean {
    if (!('userResults' in value)) return false;
    return true;
}

export function UserResultCoreFromJSON(json: any): UserResultCore {
    return UserResultCoreFromJSONTyped(json, false);
}

export function UserResultCoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResultCore {
    if (json == null) {
        return json;
    }
    return {
        
        'userResults': UserResultsFromJSON(json['user_results']),
    };
}

export function UserResultCoreToJSON(value?: UserResultCore | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user_results': UserResultsToJSON(value['userResults']),
    };
}

