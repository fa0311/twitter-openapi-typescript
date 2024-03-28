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
import type { FollowResponseData } from './FollowResponseData';
import {
    FollowResponseDataFromJSON,
    FollowResponseDataFromJSONTyped,
    FollowResponseDataToJSON,
} from './FollowResponseData';

/**
 * 
 * @export
 * @interface FollowResponse
 */
export interface FollowResponse {
    /**
     * 
     * @type {FollowResponseData}
     * @memberof FollowResponse
     */
    data: FollowResponseData;
}

/**
 * Check if a given object implements the FollowResponse interface.
 */
export function instanceOfFollowResponse(value: object): boolean {
    if (!('data' in value)) return false;
    return true;
}

export function FollowResponseFromJSON(json: any): FollowResponse {
    return FollowResponseFromJSONTyped(json, false);
}

export function FollowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FollowResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': FollowResponseDataFromJSON(json['data']),
    };
}

export function FollowResponseToJSON(value?: FollowResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': FollowResponseDataToJSON(value['data']),
    };
}

