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
 * @interface Callback
 */
export interface Callback {
    /**
     * 
     * @type {string}
     * @memberof Callback
     */
    endpoint: string;
}

/**
 * Check if a given object implements the Callback interface.
 */
export function instanceOfCallback(value: object): boolean {
    if (!('endpoint' in value)) return false;
    return true;
}

export function CallbackFromJSON(json: any): Callback {
    return CallbackFromJSONTyped(json, false);
}

export function CallbackFromJSONTyped(json: any, ignoreDiscriminator: boolean): Callback {
    if (json == null) {
        return json;
    }
    return {
        
        'endpoint': json['endpoint'],
    };
}

export function CallbackToJSON(value?: Callback | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'endpoint': value['endpoint'],
    };
}

