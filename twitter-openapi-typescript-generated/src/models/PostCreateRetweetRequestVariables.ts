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
/**
 * 
 * @export
 * @interface PostCreateRetweetRequestVariables
 */
export interface PostCreateRetweetRequestVariables {
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateRetweetRequestVariables
     */
    darkRequest: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostCreateRetweetRequestVariables
     */
    tweetId: string;
}

/**
 * Check if a given object implements the PostCreateRetweetRequestVariables interface.
 */
export function instanceOfPostCreateRetweetRequestVariables(value: object): value is PostCreateRetweetRequestVariables {
    if (!('darkRequest' in value) || value['darkRequest'] === undefined) return false;
    if (!('tweetId' in value) || value['tweetId'] === undefined) return false;
    return true;
}

export function PostCreateRetweetRequestVariablesFromJSON(json: any): PostCreateRetweetRequestVariables {
    return PostCreateRetweetRequestVariablesFromJSONTyped(json, false);
}

export function PostCreateRetweetRequestVariablesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateRetweetRequestVariables {
    if (json == null) {
        return json;
    }
    return {
        
        'darkRequest': json['dark_request'],
        'tweetId': json['tweet_id'],
    };
}

export function PostCreateRetweetRequestVariablesToJSON(json: any): PostCreateRetweetRequestVariables {
    return PostCreateRetweetRequestVariablesToJSONTyped(json, false);
}

export function PostCreateRetweetRequestVariablesToJSONTyped(value?: PostCreateRetweetRequestVariables | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'dark_request': value['darkRequest'],
        'tweet_id': value['tweetId'],
    };
}

