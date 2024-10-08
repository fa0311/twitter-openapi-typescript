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
 * @interface ErrorsData
 */
export interface ErrorsData {
    /**
     * 
     * @type {string}
     * @memberof ErrorsData
     */
    user?: string;
}

/**
 * Check if a given object implements the ErrorsData interface.
 */
export function instanceOfErrorsData(value: object): value is ErrorsData {
    return true;
}

export function ErrorsDataFromJSON(json: any): ErrorsData {
    return ErrorsDataFromJSONTyped(json, false);
}

export function ErrorsDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorsData {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'] == null ? undefined : json['user'],
    };
}

export function ErrorsDataToJSON(value?: ErrorsData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'user': value['user'],
    };
}

