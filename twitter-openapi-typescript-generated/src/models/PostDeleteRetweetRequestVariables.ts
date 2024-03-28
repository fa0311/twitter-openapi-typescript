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
 * @interface PostDeleteRetweetRequestVariables
 */
export interface PostDeleteRetweetRequestVariables {
    /**
     * 
     * @type {boolean}
     * @memberof PostDeleteRetweetRequestVariables
     */
    darkRequest: boolean;
    /**
     * 
     * @type {string}
     * @memberof PostDeleteRetweetRequestVariables
     */
    sourceTweetId: string;
}

/**
 * Check if a given object implements the PostDeleteRetweetRequestVariables interface.
 */
export function instanceOfPostDeleteRetweetRequestVariables(value: object): boolean {
    if (!('darkRequest' in value)) return false;
    if (!('sourceTweetId' in value)) return false;
    return true;
}

export function PostDeleteRetweetRequestVariablesFromJSON(json: any): PostDeleteRetweetRequestVariables {
    return PostDeleteRetweetRequestVariablesFromJSONTyped(json, false);
}

export function PostDeleteRetweetRequestVariablesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostDeleteRetweetRequestVariables {
    if (json == null) {
        return json;
    }
    return {
        
        'darkRequest': json['dark_request'],
        'sourceTweetId': json['source_tweet_id'],
    };
}

export function PostDeleteRetweetRequestVariablesToJSON(value?: PostDeleteRetweetRequestVariables | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'dark_request': value['darkRequest'],
        'source_tweet_id': value['sourceTweetId'],
    };
}

