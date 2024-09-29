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
 * @interface Location
 */
export interface Location {
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    column: number;
    /**
     * 
     * @type {number}
     * @memberof Location
     */
    line: number;
}

/**
 * Check if a given object implements the Location interface.
 */
export function instanceOfLocation(value: object): value is Location {
    if (!('column' in value) || value['column'] === undefined) return false;
    if (!('line' in value) || value['line'] === undefined) return false;
    return true;
}

export function LocationFromJSON(json: any): Location {
    return LocationFromJSONTyped(json, false);
}

export function LocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Location {
    if (json == null) {
        return json;
    }
    return {
        
        'column': json['column'],
        'line': json['line'],
    };
}

export function LocationToJSON(value?: Location | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'column': value['column'],
        'line': value['line'],
    };
}

