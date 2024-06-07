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
 * @interface UserLegacyExtendedProfileBirthdate
 */
export interface UserLegacyExtendedProfileBirthdate {
    /**
     * 
     * @type {number}
     * @memberof UserLegacyExtendedProfileBirthdate
     */
    day: number;
    /**
     * 
     * @type {number}
     * @memberof UserLegacyExtendedProfileBirthdate
     */
    month: number;
    /**
     * 
     * @type {string}
     * @memberof UserLegacyExtendedProfileBirthdate
     */
    visibility: UserLegacyExtendedProfileBirthdateVisibilityEnum;
    /**
     * 
     * @type {number}
     * @memberof UserLegacyExtendedProfileBirthdate
     */
    year: number;
    /**
     * 
     * @type {string}
     * @memberof UserLegacyExtendedProfileBirthdate
     */
    yearVisibility: UserLegacyExtendedProfileBirthdateYearVisibilityEnum;
}


/**
 * @export
 */
export const UserLegacyExtendedProfileBirthdateVisibilityEnum = {
    Self: 'Self',
    Public: 'Public',
    MutualFollow: 'MutualFollow',
    Followers: 'Followers',
    Following: 'Following'
} as const;
export type UserLegacyExtendedProfileBirthdateVisibilityEnum = typeof UserLegacyExtendedProfileBirthdateVisibilityEnum[keyof typeof UserLegacyExtendedProfileBirthdateVisibilityEnum];

/**
 * @export
 */
export const UserLegacyExtendedProfileBirthdateYearVisibilityEnum = {
    Self: 'Self',
    Public: 'Public',
    MutualFollow: 'MutualFollow',
    Followers: 'Followers',
    Following: 'Following'
} as const;
export type UserLegacyExtendedProfileBirthdateYearVisibilityEnum = typeof UserLegacyExtendedProfileBirthdateYearVisibilityEnum[keyof typeof UserLegacyExtendedProfileBirthdateYearVisibilityEnum];


/**
 * Check if a given object implements the UserLegacyExtendedProfileBirthdate interface.
 */
export function instanceOfUserLegacyExtendedProfileBirthdate(value: object): boolean {
    if (!('day' in value)) return false;
    if (!('month' in value)) return false;
    if (!('visibility' in value)) return false;
    if (!('year' in value)) return false;
    if (!('yearVisibility' in value)) return false;
    return true;
}

export function UserLegacyExtendedProfileBirthdateFromJSON(json: any): UserLegacyExtendedProfileBirthdate {
    return UserLegacyExtendedProfileBirthdateFromJSONTyped(json, false);
}

export function UserLegacyExtendedProfileBirthdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLegacyExtendedProfileBirthdate {
    if (json == null) {
        return json;
    }
    return {
        
        'day': json['day'],
        'month': json['month'],
        'visibility': json['visibility'],
        'year': json['year'],
        'yearVisibility': json['year_visibility'],
    };
}

export function UserLegacyExtendedProfileBirthdateToJSON(value?: UserLegacyExtendedProfileBirthdate | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'day': value['day'],
        'month': value['month'],
        'visibility': value['visibility'],
        'year': value['year'],
        'year_visibility': value['yearVisibility'],
    };
}

