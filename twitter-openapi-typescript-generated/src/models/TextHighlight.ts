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
 * @interface TextHighlight
 */
export interface TextHighlight {
    /**
     * 
     * @type {number}
     * @memberof TextHighlight
     */
    endIndex: number;
    /**
     * 
     * @type {number}
     * @memberof TextHighlight
     */
    startIndex: number;
}

/**
 * Check if a given object implements the TextHighlight interface.
 */
export function instanceOfTextHighlight(value: object): value is TextHighlight {
    if (!('endIndex' in value) || value['endIndex'] === undefined) return false;
    if (!('startIndex' in value) || value['startIndex'] === undefined) return false;
    return true;
}

export function TextHighlightFromJSON(json: any): TextHighlight {
    return TextHighlightFromJSONTyped(json, false);
}

export function TextHighlightFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextHighlight {
    if (json == null) {
        return json;
    }
    return {
        
        'endIndex': json['endIndex'],
        'startIndex': json['startIndex'],
    };
}

export function TextHighlightToJSON(json: any): TextHighlight {
    return TextHighlightToJSONTyped(json, false);
}

export function TextHighlightToJSONTyped(value?: TextHighlight | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'endIndex': value['endIndex'],
        'startIndex': value['startIndex'],
    };
}

