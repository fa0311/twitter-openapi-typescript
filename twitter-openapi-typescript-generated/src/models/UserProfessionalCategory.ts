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
 * @interface UserProfessionalCategory
 */
export interface UserProfessionalCategory {
    /**
     * 
     * @type {string}
     * @memberof UserProfessionalCategory
     */
    iconName: string;
    /**
     * 
     * @type {number}
     * @memberof UserProfessionalCategory
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof UserProfessionalCategory
     */
    name: string;
}

/**
 * Check if a given object implements the UserProfessionalCategory interface.
 */
export function instanceOfUserProfessionalCategory(value: object): value is UserProfessionalCategory {
    if (!('iconName' in value) || value['iconName'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function UserProfessionalCategoryFromJSON(json: any): UserProfessionalCategory {
    return UserProfessionalCategoryFromJSONTyped(json, false);
}

export function UserProfessionalCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserProfessionalCategory {
    if (json == null) {
        return json;
    }
    return {
        
        'iconName': json['icon_name'],
        'id': json['id'],
        'name': json['name'],
    };
}

export function UserProfessionalCategoryToJSON(json: any): UserProfessionalCategory {
    return UserProfessionalCategoryToJSONTyped(json, false);
}

export function UserProfessionalCategoryToJSONTyped(value?: UserProfessionalCategory | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'icon_name': value['iconName'],
        'id': value['id'],
        'name': value['name'],
    };
}

