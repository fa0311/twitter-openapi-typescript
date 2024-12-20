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

import type { User } from './User';
import {
    instanceOfUser,
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';
import type { UserUnavailable } from './UserUnavailable';
import {
    instanceOfUserUnavailable,
    UserUnavailableFromJSON,
    UserUnavailableFromJSONTyped,
    UserUnavailableToJSON,
} from './UserUnavailable';

/**
 * @type UserUnion
 * 
 * @export
 */
export type UserUnion = { typename: 'User' } & User | { typename: 'UserUnavailable' } & UserUnavailable;

export function UserUnionFromJSON(json: any): UserUnion {
    return UserUnionFromJSONTyped(json, false);
}

export function UserUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserUnion {
    if (json == null) {
        return json;
    }
    switch (json['__typename']) {
        case 'User':
            return Object.assign({}, UserFromJSONTyped(json, true), { typename: 'User' } as const);
        case 'UserUnavailable':
            return Object.assign({}, UserUnavailableFromJSONTyped(json, true), { typename: 'UserUnavailable' } as const);
        default:
            throw new Error(`No variant of UserUnion exists with 'typename=${json['typename']}'`);
    }
}

export function UserUnionToJSON(json: any): any {
    return UserUnionToJSONTyped(json, false);
}

export function UserUnionToJSONTyped(value?: UserUnion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['typename']) {
        case 'User':
            return Object.assign({}, UserToJSON(value), { typename: 'User' } as const);
        case 'UserUnavailable':
            return Object.assign({}, UserUnavailableToJSON(value), { typename: 'UserUnavailable' } as const);
        default:
            throw new Error(`No variant of UserUnion exists with 'typename=${value['typename']}'`);
    }

}

