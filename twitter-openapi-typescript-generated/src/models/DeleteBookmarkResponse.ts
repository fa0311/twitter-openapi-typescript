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
import type { DeleteBookmarkResponseData } from './DeleteBookmarkResponseData';
import {
    DeleteBookmarkResponseDataFromJSON,
    DeleteBookmarkResponseDataFromJSONTyped,
    DeleteBookmarkResponseDataToJSON,
} from './DeleteBookmarkResponseData';

/**
 * 
 * @export
 * @interface DeleteBookmarkResponse
 */
export interface DeleteBookmarkResponse {
    /**
     * 
     * @type {DeleteBookmarkResponseData}
     * @memberof DeleteBookmarkResponse
     */
    data: DeleteBookmarkResponseData;
}

/**
 * Check if a given object implements the DeleteBookmarkResponse interface.
 */
export function instanceOfDeleteBookmarkResponse(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function DeleteBookmarkResponseFromJSON(json: any): DeleteBookmarkResponse {
    return DeleteBookmarkResponseFromJSONTyped(json, false);
}

export function DeleteBookmarkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteBookmarkResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': DeleteBookmarkResponseDataFromJSON(json['data']),
    };
}

export function DeleteBookmarkResponseToJSON(value?: DeleteBookmarkResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': DeleteBookmarkResponseDataToJSON(value['data']),
    };
}

