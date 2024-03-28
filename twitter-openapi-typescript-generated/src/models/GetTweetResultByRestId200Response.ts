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
import type { TweetResultByRestIdResponse } from './TweetResultByRestIdResponse';
import {
    instanceOfTweetResultByRestIdResponse,
    TweetResultByRestIdResponseFromJSON,
    TweetResultByRestIdResponseFromJSONTyped,
    TweetResultByRestIdResponseToJSON,
} from './TweetResultByRestIdResponse';

/**
 * @type GetTweetResultByRestId200Response
 * 
 * @export
 */
export type GetTweetResultByRestId200Response = Errors | TweetResultByRestIdResponse;

export function GetTweetResultByRestId200ResponseFromJSON(json: any): GetTweetResultByRestId200Response {
    return GetTweetResultByRestId200ResponseFromJSONTyped(json, false);
}

export function GetTweetResultByRestId200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTweetResultByRestId200Response {
    if (json == null) {
        return json;
    }
    return { ...ErrorsFromJSONTyped(json, true), ...TweetResultByRestIdResponseFromJSONTyped(json, true) };
}

export function GetTweetResultByRestId200ResponseToJSON(value?: GetTweetResultByRestId200Response | null): any {
    if (value == null) {
        return value;
    }

    if (instanceOfErrors(value)) {
        return ErrorsToJSON(value as Errors);
    }
    if (instanceOfTweetResultByRestIdResponse(value)) {
        return TweetResultByRestIdResponseToJSON(value as TweetResultByRestIdResponse);
    }

    return {};
}

