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

import type { Errors } from './Errors';
import {
    instanceOfErrors,
    ErrorsFromJSON,
    ErrorsFromJSONTyped,
    ErrorsToJSON,
} from './Errors';
import type { UsersResponse } from './UsersResponse';
import {
    instanceOfUsersResponse,
    UsersResponseFromJSON,
    UsersResponseFromJSONTyped,
    UsersResponseToJSON,
} from './UsersResponse';

/**
 * @type GetUsersByRestIds200Response
 * 
 * @export
 */
export type GetUsersByRestIds200Response = Errors | UsersResponse;

export function GetUsersByRestIds200ResponseFromJSON(json: any): GetUsersByRestIds200Response {
    return GetUsersByRestIds200ResponseFromJSONTyped(json, false);
}

export function GetUsersByRestIds200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetUsersByRestIds200Response {
    if (json == null) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...UsersResponseFromJSONTyped(json, true) };
}

export function GetUsersByRestIds200ResponseToJSON(value?: GetUsersByRestIds200Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfUsersResponse(value)) {
        return UsersResponseToJSON(value as UsersResponse);
    }

    return {};
}

