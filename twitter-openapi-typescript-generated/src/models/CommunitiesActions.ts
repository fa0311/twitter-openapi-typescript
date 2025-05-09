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
 * @interface CommunitiesActions
 */
export interface CommunitiesActions {
    /**
     * 
     * @type {boolean}
     * @memberof CommunitiesActions
     */
    create: boolean;
}

/**
 * Check if a given object implements the CommunitiesActions interface.
 */
export function instanceOfCommunitiesActions(value: object): value is CommunitiesActions {
    if (!('create' in value) || value['create'] === undefined) return false;
    return true;
}

export function CommunitiesActionsFromJSON(json: any): CommunitiesActions {
    return CommunitiesActionsFromJSONTyped(json, false);
}

export function CommunitiesActionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunitiesActions {
    if (json == null) {
        return json;
    }
    return {
        
        'create': json['create'],
    };
}

export function CommunitiesActionsToJSON(json: any): CommunitiesActions {
    return CommunitiesActionsToJSONTyped(json, false);
}

export function CommunitiesActionsToJSONTyped(value?: CommunitiesActions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'create': value['create'],
    };
}

