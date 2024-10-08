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
import type { FavoriteTweet } from './FavoriteTweet';
import {
    FavoriteTweetFromJSON,
    FavoriteTweetFromJSONTyped,
    FavoriteTweetToJSON,
} from './FavoriteTweet';

/**
 * 
 * @export
 * @interface FavoriteTweetResponseData
 */
export interface FavoriteTweetResponseData {
    /**
     * 
     * @type {FavoriteTweet}
     * @memberof FavoriteTweetResponseData
     */
    data: FavoriteTweet;
}

/**
 * Check if a given object implements the FavoriteTweetResponseData interface.
 */
export function instanceOfFavoriteTweetResponseData(value: object): value is FavoriteTweetResponseData {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function FavoriteTweetResponseDataFromJSON(json: any): FavoriteTweetResponseData {
    return FavoriteTweetResponseDataFromJSONTyped(json, false);
}

export function FavoriteTweetResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): FavoriteTweetResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'data': FavoriteTweetFromJSON(json['data']),
    };
}

export function FavoriteTweetResponseDataToJSON(value?: FavoriteTweetResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'data': FavoriteTweetToJSON(value['data']),
    };
}

