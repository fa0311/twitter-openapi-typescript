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
import type { UrtEndpointRequestParams } from './UrtEndpointRequestParams';
import {
    UrtEndpointRequestParamsFromJSON,
    UrtEndpointRequestParamsFromJSONTyped,
    UrtEndpointRequestParamsToJSON,
    UrtEndpointRequestParamsToJSONTyped,
} from './UrtEndpointRequestParams';

/**
 * 
 * @export
 * @interface UrtEndpointOptions
 */
export interface UrtEndpointOptions {
    /**
     * 
     * @type {Array<UrtEndpointRequestParams>}
     * @memberof UrtEndpointOptions
     */
    requestParams: Array<UrtEndpointRequestParams>;
    /**
     * 
     * @type {string}
     * @memberof UrtEndpointOptions
     */
    title: string;
}

/**
 * Check if a given object implements the UrtEndpointOptions interface.
 */
export function instanceOfUrtEndpointOptions(value: object): value is UrtEndpointOptions {
    if (!('requestParams' in value) || value['requestParams'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function UrtEndpointOptionsFromJSON(json: any): UrtEndpointOptions {
    return UrtEndpointOptionsFromJSONTyped(json, false);
}

export function UrtEndpointOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UrtEndpointOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'requestParams': ((json['requestParams'] as Array<any>).map(UrtEndpointRequestParamsFromJSON)),
        'title': json['title'],
    };
}

export function UrtEndpointOptionsToJSON(json: any): UrtEndpointOptions {
    return UrtEndpointOptionsToJSONTyped(json, false);
}

export function UrtEndpointOptionsToJSONTyped(value?: UrtEndpointOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'requestParams': ((value['requestParams'] as Array<any>).map(UrtEndpointRequestParamsToJSON)),
        'title': value['title'],
    };
}

