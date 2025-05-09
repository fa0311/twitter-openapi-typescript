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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
    TypeNameToJSONTyped,
} from './TypeName';
import type { SocialContextUnion } from './SocialContextUnion';
import {
    SocialContextUnionFromJSON,
    SocialContextUnionFromJSONTyped,
    SocialContextUnionToJSON,
    SocialContextUnionToJSONTyped,
} from './SocialContextUnion';
import type { UserResults } from './UserResults';
import {
    UserResultsFromJSON,
    UserResultsFromJSONTyped,
    UserResultsToJSON,
    UserResultsToJSONTyped,
} from './UserResults';
import type { ContentItemType } from './ContentItemType';
import {
    ContentItemTypeFromJSON,
    ContentItemTypeFromJSONTyped,
    ContentItemTypeToJSON,
    ContentItemTypeToJSONTyped,
} from './ContentItemType';

/**
 * 
 * @export
 * @interface TimelineUser
 */
export interface TimelineUser {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineUser
     */
    typename: TypeName;
    /**
     * 
     * @type {ContentItemType}
     * @memberof TimelineUser
     */
    itemType: ContentItemType;
    /**
     * 
     * @type {SocialContextUnion}
     * @memberof TimelineUser
     */
    socialContext?: SocialContextUnion;
    /**
     * 
     * @type {string}
     * @memberof TimelineUser
     */
    userDisplayType: TimelineUserUserDisplayTypeEnum;
    /**
     * 
     * @type {UserResults}
     * @memberof TimelineUser
     */
    userResults: UserResults;
}


/**
 * @export
 */
export const TimelineUserUserDisplayTypeEnum = {
    User: 'User',
    UserDetailed: 'UserDetailed',
    SubscribableUser: 'SubscribableUser',
    UserConcise: 'UserConcise'
} as const;
export type TimelineUserUserDisplayTypeEnum = typeof TimelineUserUserDisplayTypeEnum[keyof typeof TimelineUserUserDisplayTypeEnum];


/**
 * Check if a given object implements the TimelineUser interface.
 */
export function instanceOfTimelineUser(value: object): value is TimelineUser {
    if (!('typename' in value) || value['typename'] === undefined) return false;
    if (!('itemType' in value) || value['itemType'] === undefined) return false;
    if (!('userDisplayType' in value) || value['userDisplayType'] === undefined) return false;
    if (!('userResults' in value) || value['userResults'] === undefined) return false;
    return true;
}

export function TimelineUserFromJSON(json: any): TimelineUser {
    return TimelineUserFromJSONTyped(json, false);
}

export function TimelineUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineUser {
    if (json == null) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'itemType': ContentItemTypeFromJSON(json['itemType']),
        'socialContext': json['socialContext'] == null ? undefined : SocialContextUnionFromJSON(json['socialContext']),
        'userDisplayType': json['userDisplayType'],
        'userResults': UserResultsFromJSON(json['user_results']),
    };
}

export function TimelineUserToJSON(json: any): TimelineUser {
    return TimelineUserToJSONTyped(json, false);
}

export function TimelineUserToJSONTyped(value?: TimelineUser | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        '__typename': TypeNameToJSON(value['typename']),
        'itemType': ContentItemTypeToJSON(value['itemType']),
        'socialContext': SocialContextUnionToJSON(value['socialContext']),
        'userDisplayType': value['userDisplayType'],
        'user_results': UserResultsToJSON(value['userResults']),
    };
}

