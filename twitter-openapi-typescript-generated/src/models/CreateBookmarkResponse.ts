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
    CreateBookmarkResponseDataToJSONTyped,
} from './CreateBookmarkResponseData';
import type { ErrorResponse } from './ErrorResponse';
import {
    ErrorResponseFromJSON,
    ErrorResponseFromJSONTyped,
    ErrorResponseToJSON,
    ErrorResponseToJSONTyped,
} from './ErrorResponse';

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
    /**
     * 
     * @type {Array<ErrorResponse>}
     * @memberof CreateBookmarkResponse
     */
    errors?: Array<ErrorResponse>;
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
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
    };
}

export function CreateBookmarkResponseToJSON(json: any): CreateBookmarkResponse {
    return CreateBookmarkResponseToJSONTyped(json, false);
}

export function CreateBookmarkResponseToJSONTyped(value?: CreateBookmarkResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': CreateBookmarkResponseDataToJSON(value['data']),
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(ErrorResponseToJSON)),
    };
}

