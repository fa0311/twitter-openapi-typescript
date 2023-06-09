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

import { exists, mapValues } from '../runtime';
import type { TweetFavoritersResponseData } from './TweetFavoritersResponseData';
import {
    TweetFavoritersResponseDataFromJSON,
    TweetFavoritersResponseDataFromJSONTyped,
    TweetFavoritersResponseDataToJSON,
} from './TweetFavoritersResponseData';

/**
 * 
 * @export
 * @interface TweetFavoritersResponse
 */
export interface TweetFavoritersResponse {
    /**
     * 
     * @type {TweetFavoritersResponseData}
     * @memberof TweetFavoritersResponse
     */
    data: TweetFavoritersResponseData;
}

/**
 * Check if a given object implements the TweetFavoritersResponse interface.
 */
export function instanceOfTweetFavoritersResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;

    return isInstance;
}

export function TweetFavoritersResponseFromJSON(json: any): TweetFavoritersResponse {
    return TweetFavoritersResponseFromJSONTyped(json, false);
}

export function TweetFavoritersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetFavoritersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': TweetFavoritersResponseDataFromJSON(json['data']),
    };
}

export function TweetFavoritersResponseToJSON(value?: TweetFavoritersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': TweetFavoritersResponseDataToJSON(value.data),
    };
}

