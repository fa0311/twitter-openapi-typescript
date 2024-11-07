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
import type { BookmarksResponseData } from './BookmarksResponseData';
import {
    BookmarksResponseDataFromJSON,
    BookmarksResponseDataFromJSONTyped,
    BookmarksResponseDataToJSON,
} from './BookmarksResponseData';
import type { ErrorResponse } from './ErrorResponse';
import {
    ErrorResponseFromJSON,
    ErrorResponseFromJSONTyped,
    ErrorResponseToJSON,
} from './ErrorResponse';

/**
 * 
 * @export
 * @interface BookmarksResponse
 */
export interface BookmarksResponse {
    /**
     * 
     * @type {BookmarksResponseData}
     * @memberof BookmarksResponse
     */
    data?: BookmarksResponseData;
    /**
     * 
     * @type {Array<ErrorResponse>}
     * @memberof BookmarksResponse
     */
    errors?: Array<ErrorResponse>;
}

/**
 * Check if a given object implements the BookmarksResponse interface.
 */
export function instanceOfBookmarksResponse(value: object): value is BookmarksResponse {
    return true;
}

export function BookmarksResponseFromJSON(json: any): BookmarksResponse {
    return BookmarksResponseFromJSONTyped(json, false);
}

export function BookmarksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookmarksResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : BookmarksResponseDataFromJSON(json['data']),
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
    };
}

export function BookmarksResponseToJSON(value?: BookmarksResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': BookmarksResponseDataToJSON(value['data']),
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(ErrorResponseToJSON)),
    };
}

