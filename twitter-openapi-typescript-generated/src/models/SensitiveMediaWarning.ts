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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SensitiveMediaWarning
 */
export interface SensitiveMediaWarning {
    /**
     * 
     * @type {boolean}
     * @memberof SensitiveMediaWarning
     */
    adultContent: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SensitiveMediaWarning
     */
    graphicViolence: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof SensitiveMediaWarning
     */
    other: boolean;
}

/**
 * Check if a given object implements the SensitiveMediaWarning interface.
 */
export function instanceOfSensitiveMediaWarning(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "adultContent" in value;
    isInstance = isInstance && "graphicViolence" in value;
    isInstance = isInstance && "other" in value;

    return isInstance;
}

export function SensitiveMediaWarningFromJSON(json: any): SensitiveMediaWarning {
    return SensitiveMediaWarningFromJSONTyped(json, false);
}

export function SensitiveMediaWarningFromJSONTyped(json: any, ignoreDiscriminator: boolean): SensitiveMediaWarning {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adultContent': json['adult_content'],
        'graphicViolence': json['graphic_violence'],
        'other': json['other'],
    };
}

export function SensitiveMediaWarningToJSON(value?: SensitiveMediaWarning | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adult_content': value.adultContent,
        'graphic_violence': value.graphicViolence,
        'other': value.other,
    };
}
