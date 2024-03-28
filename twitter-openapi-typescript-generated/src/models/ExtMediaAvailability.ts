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
 * @interface ExtMediaAvailability
 */
export interface ExtMediaAvailability {
    /**
     * 
     * @type {string}
     * @memberof ExtMediaAvailability
     */
    reason?: string;
    /**
     * 
     * @type {string}
     * @memberof ExtMediaAvailability
     */
    status?: ExtMediaAvailabilityStatusEnum;
}


/**
 * @export
 */
export const ExtMediaAvailabilityStatusEnum = {
    Available: 'Available',
    Unavailable: 'Unavailable'
} as const;
export type ExtMediaAvailabilityStatusEnum = typeof ExtMediaAvailabilityStatusEnum[keyof typeof ExtMediaAvailabilityStatusEnum];


/**
 * Check if a given object implements the ExtMediaAvailability interface.
 */
export function instanceOfExtMediaAvailability(value: object): boolean {
    return true;
}

export function ExtMediaAvailabilityFromJSON(json: any): ExtMediaAvailability {
    return ExtMediaAvailabilityFromJSONTyped(json, false);
}

export function ExtMediaAvailabilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtMediaAvailability {
    if (json == null) {
        return json;
    }
    return {
        
        'reason': json['reason'] == null ? undefined : json['reason'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function ExtMediaAvailabilityToJSON(value?: ExtMediaAvailability | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'reason': value['reason'],
        'status': value['status'],
    };
}

