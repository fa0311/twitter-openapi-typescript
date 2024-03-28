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
 * @interface MediaOriginalInfoFocusRect
 */
export interface MediaOriginalInfoFocusRect {
    /**
     * 
     * @type {number}
     * @memberof MediaOriginalInfoFocusRect
     */
    h: number;
    /**
     * 
     * @type {number}
     * @memberof MediaOriginalInfoFocusRect
     */
    w: number;
    /**
     * 
     * @type {number}
     * @memberof MediaOriginalInfoFocusRect
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof MediaOriginalInfoFocusRect
     */
    y: number;
}

/**
 * Check if a given object implements the MediaOriginalInfoFocusRect interface.
 */
export function instanceOfMediaOriginalInfoFocusRect(value: object): boolean {
    if (!('h' in value)) return false;
    if (!('w' in value)) return false;
    if (!('x' in value)) return false;
    if (!('y' in value)) return false;
    return true;
}

export function MediaOriginalInfoFocusRectFromJSON(json: any): MediaOriginalInfoFocusRect {
    return MediaOriginalInfoFocusRectFromJSONTyped(json, false);
}

export function MediaOriginalInfoFocusRectFromJSONTyped(json: any, ignoreDiscriminator: boolean): MediaOriginalInfoFocusRect {
    if (json == null) {
        return json;
    }
    return {
        
        'h': json['h'],
        'w': json['w'],
        'x': json['x'],
        'y': json['y'],
    };
}

export function MediaOriginalInfoFocusRectToJSON(value?: MediaOriginalInfoFocusRect | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'h': value['h'],
        'w': value['w'],
        'x': value['x'],
        'y': value['y'],
    };
}

