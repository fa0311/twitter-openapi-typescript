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
 * @interface UrtEndpointRequestParams
 */
export interface UrtEndpointRequestParams {
    /**
     * 
     * @type {string}
     * @memberof UrtEndpointRequestParams
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof UrtEndpointRequestParams
     */
    value: string;
}

/**
 * Check if a given object implements the UrtEndpointRequestParams interface.
 */
export function instanceOfUrtEndpointRequestParams(value: object): boolean {
    if (!('key' in value)) return false;
    if (!('value' in value)) return false;
    return true;
}

export function UrtEndpointRequestParamsFromJSON(json: any): UrtEndpointRequestParams {
    return UrtEndpointRequestParamsFromJSONTyped(json, false);
}

export function UrtEndpointRequestParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UrtEndpointRequestParams {
    if (json == null) {
        return json;
    }
    return {
        
        'key': json['key'],
        'value': json['value'],
    };
}

export function UrtEndpointRequestParamsToJSON(value?: UrtEndpointRequestParams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'key': value['key'],
        'value': value['value'],
    };
}

