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
/**
 * 
 * @export
 * @interface TweetLegacyScopes
 */
export interface TweetLegacyScopes {
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacyScopes
     */
    followers: boolean;
}

/**
 * Check if a given object implements the TweetLegacyScopes interface.
 */
export function instanceOfTweetLegacyScopes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "followers" in value;

    return isInstance;
}

export function TweetLegacyScopesFromJSON(json: any): TweetLegacyScopes {
    return TweetLegacyScopesFromJSONTyped(json, false);
}

export function TweetLegacyScopesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetLegacyScopes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'followers': json['followers'],
    };
}

export function TweetLegacyScopesToJSON(value?: TweetLegacyScopes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'followers': value.followers,
    };
}

