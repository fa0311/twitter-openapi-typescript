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
import type { CreateBookmarkResponseData } from './CreateBookmarkResponseData';
import {
    CreateBookmarkResponseDataFromJSON,
    CreateBookmarkResponseDataFromJSONTyped,
    CreateBookmarkResponseDataToJSON,
} from './CreateBookmarkResponseData';

/**
 * 
 * @export
 * @interface CreateBookmarkResponse
 */
export interface CreateBookmarkResponse {
    /**
     * 
     * @type {CreateBookmarkResponseData}
     * @memberof CreateBookmarkResponse
     */
    data: CreateBookmarkResponseData;
}

/**
 * Check if a given object implements the CreateBookmarkResponse interface.
 */
export function instanceOfCreateBookmarkResponse(value: object): value is CreateBookmarkResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CreateBookmarkResponseFromJSON(json: any): CreateBookmarkResponse {
    return CreateBookmarkResponseFromJSONTyped(json, false);
}

export function CreateBookmarkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateBookmarkResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': CreateBookmarkResponseDataFromJSON(json['data']),
    };
}

export function CreateBookmarkResponseToJSON(value?: CreateBookmarkResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': CreateBookmarkResponseDataToJSON(value['data']),
    };
}

