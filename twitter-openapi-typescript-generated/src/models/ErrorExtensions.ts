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
import type { Tracing } from './Tracing';
import {
    TracingFromJSON,
    TracingFromJSONTyped,
    TracingToJSON,
    TracingToJSONTyped,
} from './Tracing';

/**
 * 
 * @export
 * @interface ErrorExtensions
 */
export interface ErrorExtensions {
    /**
     * 
     * @type {number}
     * @memberof ErrorExtensions
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorExtensions
     */
    kind: string;
    /**
     * 
     * @type {string}
     * @memberof ErrorExtensions
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof ErrorExtensions
     */
    retryAfter?: number;
    /**
     * 
     * @type {string}
     * @memberof ErrorExtensions
     */
    source: string;
    /**
     * 
     * @type {Tracing}
     * @memberof ErrorExtensions
     */
    tracing: Tracing;
}

/**
 * Check if a given object implements the ErrorExtensions interface.
 */
export function instanceOfErrorExtensions(value: object): value is ErrorExtensions {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('kind' in value) || value['kind'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('source' in value) || value['source'] === undefined) return false;
    if (!('tracing' in value) || value['tracing'] === undefined) return false;
    return true;
}

export function ErrorExtensionsFromJSON(json: any): ErrorExtensions {
    return ErrorExtensionsFromJSONTyped(json, false);
}

export function ErrorExtensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorExtensions {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'kind': json['kind'],
        'name': json['name'],
        'retryAfter': json['retry_after'] == null ? undefined : json['retry_after'],
        'source': json['source'],
        'tracing': TracingFromJSON(json['tracing']),
    };
}

export function ErrorExtensionsToJSON(json: any): ErrorExtensions {
    return ErrorExtensionsToJSONTyped(json, false);
}

export function ErrorExtensionsToJSONTyped(value?: ErrorExtensions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'kind': value['kind'],
        'name': value['name'],
        'retry_after': value['retryAfter'],
        'source': value['source'],
        'tracing': TracingToJSON(value['tracing']),
    };
}

