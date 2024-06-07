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

import type { CreateBookmarkResponse } from './CreateBookmarkResponse';
import {
    instanceOfCreateBookmarkResponse,
    CreateBookmarkResponseFromJSON,
    CreateBookmarkResponseFromJSONTyped,
    CreateBookmarkResponseToJSON,
} from './CreateBookmarkResponse';
import type { Errors } from './Errors';
import {
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';

/**
 * @type PostCreateBookmark200Response
 * 
 * @export
 */
export type PostCreateBookmark200Response = CreateBookmarkResponse | Errors;

export function PostCreateBookmark200ResponseFromJSON(json: any): PostCreateBookmark200Response {
    return PostCreateBookmark200ResponseFromJSONTyped(json, false);
}

export function PostCreateBookmark200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateBookmark200Response {
    if (json == null) {
        return json;
    }
    return { ...CreateBookmarkResponseFromJSONTyped(json, true), ...ErrorsFromJSONTyped(json, true) };
}

export function PostCreateBookmark200ResponseToJSON(value?: PostCreateBookmark200Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfCreateBookmarkResponse(value)) {
        return CreateBookmarkResponseToJSON(value as CreateBookmarkResponse);
    }
    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }

    return {};
}

