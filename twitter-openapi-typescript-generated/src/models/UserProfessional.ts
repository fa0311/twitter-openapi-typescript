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
import type { UserProfessionalCategory } from './UserProfessionalCategory';
import {
    UserProfessionalCategoryFromJSON,
    UserProfessionalCategoryFromJSONTyped,
    UserProfessionalCategoryToJSON,
    UserProfessionalCategoryToJSONTyped,
} from './UserProfessionalCategory';

/**
 * 
 * @export
 * @interface UserProfessional
 */
export interface UserProfessional {
    /**
     * 
     * @type {Array<UserProfessionalCategory>}
     * @memberof UserProfessional
     */
    category: Array<UserProfessionalCategory>;
    /**
     * 
     * @type {string}
     * @memberof UserProfessional
     */
    professionalType: UserProfessionalProfessionalTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof UserProfessional
     */
    restId: string;
}


/**
 * @export
 */
export const UserProfessionalProfessionalTypeEnum = {
    Business: 'Business',
    Creator: 'Creator'
} as const;
export type UserProfessionalProfessionalTypeEnum = typeof UserProfessionalProfessionalTypeEnum[keyof typeof UserProfessionalProfessionalTypeEnum];


/**
 * Check if a given object implements the UserProfessional interface.
 */
export function instanceOfUserProfessional(value: object): value is UserProfessional {
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('professionalType' in value) || value['professionalType'] === undefined) return false;
    if (!('restId' in value) || value['restId'] === undefined) return false;
    return true;
}

export function UserProfessionalFromJSON(json: any): UserProfessional {
    return UserProfessionalFromJSONTyped(json, false);
}

export function UserProfessionalFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfessional {
    if (json == null) {
        return json;
    }
    return {
        
        'category': ((json['category'] as Array<any>).map(UserProfessionalCategoryFromJSON)),
        'professionalType': json['professional_type'],
        'restId': json['rest_id'],
    };
}

export function UserProfessionalToJSON(json: any): UserProfessional {
    return UserProfessionalToJSONTyped(json, false);
}

export function UserProfessionalToJSONTyped(value?: UserProfessional | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'category': ((value['category'] as Array<any>).map(UserProfessionalCategoryToJSON)),
        'professional_type': value['professionalType'],
        'rest_id': value['restId'],
    };
}

