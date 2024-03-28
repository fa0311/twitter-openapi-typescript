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
 * @interface SelfThread
 */
export interface SelfThread {
    /**
     * 
     * @type {string}
     * @memberof SelfThread
     */
    idStr: string;
}

/**
 * Check if a given object implements the SelfThread interface.
 */
export function instanceOfSelfThread(value: object): boolean {
    if (!('idStr' in value)) return false;
    return true;
}

export function SelfThreadFromJSON(json: any): SelfThread {
    return SelfThreadFromJSONTyped(json, false);
}

export function SelfThreadFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfThread {
    if (json == null) {
        return json;
    }
    return {
        
        'idStr': json['id_str'],
    };
}

export function SelfThreadToJSON(value?: SelfThread | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id_str': value['idStr'],
    };
}

