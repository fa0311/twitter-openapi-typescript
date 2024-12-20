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
import type { DeleteTweetResponseData } from './DeleteTweetResponseData';
import {
    DeleteTweetResponseDataFromJSON,
    DeleteTweetResponseDataFromJSONTyped,
    DeleteTweetResponseDataToJSON,
    DeleteTweetResponseDataToJSONTyped,
} from './DeleteTweetResponseData';
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
 * @interface DeleteTweetResponse
 */
export interface DeleteTweetResponse {
    /**
     * 
     * @type {DeleteTweetResponseData}
     * @memberof DeleteTweetResponse
     */
    data: DeleteTweetResponseData;
    /**
     * 
     * @type {Array<ErrorResponse>}
     * @memberof DeleteTweetResponse
     */
    errors?: Array<ErrorResponse>;
}

/**
 * Check if a given object implements the DeleteTweetResponse interface.
 */
export function instanceOfDeleteTweetResponse(value: object): value is DeleteTweetResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function DeleteTweetResponseFromJSON(json: any): DeleteTweetResponse {
    return DeleteTweetResponseFromJSONTyped(json, false);
}

export function DeleteTweetResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTweetResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': DeleteTweetResponseDataFromJSON(json['data']),
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
    };
}

export function DeleteTweetResponseToJSON(json: any): DeleteTweetResponse {
    return DeleteTweetResponseToJSONTyped(json, false);
}

export function DeleteTweetResponseToJSONTyped(value?: DeleteTweetResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': DeleteTweetResponseDataToJSON(value['data']),
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(ErrorResponseToJSON)),
    };
}

