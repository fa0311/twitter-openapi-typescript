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

import { exists, mapValues } from '../runtime';
import type { UserProfessionalCategory } from './UserProfessionalCategory';
import {
    UserProfessionalCategoryFromJSON,
    UserProfessionalCategoryFromJSONTyped,
    UserProfessionalCategoryToJSON,
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
export function instanceOfUserProfessional(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "professionalType" in value;
    isInstance = isInstance && "restId" in value;

    return isInstance;
}

export function UserProfessionalFromJSON(json: any): UserProfessional {
    return UserProfessionalFromJSONTyped(json, false);
}

export function UserProfessionalFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfessional {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': ((json['category'] as Array<any>).map(UserProfessionalCategoryFromJSON)),
        'professionalType': json['professional_type'],
        'restId': json['rest_id'],
    };
}

export function UserProfessionalToJSON(value?: UserProfessional | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': ((value.category as Array<any>).map(UserProfessionalCategoryToJSON)),
        'professional_type': value.professionalType,
        'rest_id': value.restId,
    };
}
