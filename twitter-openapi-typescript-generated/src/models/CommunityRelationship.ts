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
import type { CommunityActions } from './CommunityActions';
import {
    CommunityActionsFromJSON,
    CommunityActionsFromJSONTyped,
    CommunityActionsToJSON,
    CommunityActionsToJSONTyped,
} from './CommunityActions';

/**
 * 
 * @export
 * @interface CommunityRelationship
 */
export interface CommunityRelationship {
    /**
     * 
     * @type {CommunityActions}
     * @memberof CommunityRelationship
     */
    actions: CommunityActions;
    /**
     * 
     * @type {string}
     * @memberof CommunityRelationship
     */
    id: string;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof CommunityRelationship
     */
    moderationState: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof CommunityRelationship
     */
    restId: string;
}

/**
 * Check if a given object implements the CommunityRelationship interface.
 */
export function instanceOfCommunityRelationship(value: object): value is CommunityRelationship {
    if (!('actions' in value) || value['actions'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('moderationState' in value) || value['moderationState'] === undefined) return false;
    if (!('restId' in value) || value['restId'] === undefined) return false;
    return true;
}

export function CommunityRelationshipFromJSON(json: any): CommunityRelationship {
    return CommunityRelationshipFromJSONTyped(json, false);
}

export function CommunityRelationshipFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityRelationship {
    if (json == null) {
        return json;
    }
    return {
        
        'actions': CommunityActionsFromJSON(json['actions']),
        'id': json['id'],
        'moderationState': json['moderation_state'],
        'restId': json['rest_id'],
    };
}

export function CommunityRelationshipToJSON(json: any): CommunityRelationship {
    return CommunityRelationshipToJSONTyped(json, false);
}

export function CommunityRelationshipToJSONTyped(value?: CommunityRelationship | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'actions': CommunityActionsToJSON(value['actions']),
        'id': value['id'],
        'moderation_state': value['moderationState'],
        'rest_id': value['restId'],
    };
}
