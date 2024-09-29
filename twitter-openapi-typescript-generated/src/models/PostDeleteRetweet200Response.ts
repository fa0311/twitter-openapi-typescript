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

import type { DeleteRetweetResponse } from './DeleteRetweetResponse';
import {
    instanceOfDeleteRetweetResponse,
    DeleteRetweetResponseFromJSON,
    DeleteRetweetResponseFromJSONTyped,
    DeleteRetweetResponseToJSON,
} from './DeleteRetweetResponse';
import type { Errors } from './Errors';
import {
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';

/**
 * @type PostDeleteRetweet200Response
 * 
 * @export
 */
export type PostDeleteRetweet200Response = DeleteRetweetResponse | Errors;

export function PostDeleteRetweet200ResponseFromJSON(json: any): PostDeleteRetweet200Response {
    return PostDeleteRetweet200ResponseFromJSONTyped(json, false);
}

export function PostDeleteRetweet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostDeleteRetweet200Response {
    if (json == null) {
        return json;
    }
    if (instanceOfDeleteRetweetResponse(json)) {
        return DeleteRetweetResponseFromJSONTyped(json, true);
    }
    if (instanceOfErrors(json)) {
        return ErrorsFromJSONTyped(json, true);
    }

    return {} as any;
}

export function PostDeleteRetweet200ResponseToJSON(value?: PostDeleteRetweet200Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfDeleteRetweetResponse(value)) {
        return DeleteRetweetResponseToJSON(value as DeleteRetweetResponse);
    }
    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }

    return {};
}

