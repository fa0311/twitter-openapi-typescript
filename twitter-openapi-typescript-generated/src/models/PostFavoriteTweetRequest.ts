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
import type { PostCreateRetweetRequestVariables } from './PostCreateRetweetRequestVariables';
import {
    PostCreateRetweetRequestVariablesFromJSON,
    PostCreateRetweetRequestVariablesFromJSONTyped,
    PostCreateRetweetRequestVariablesToJSON,
} from './PostCreateRetweetRequestVariables';

/**
 * 
 * @export
 * @interface PostFavoriteTweetRequest
 */
export interface PostFavoriteTweetRequest {
    /**
     * 
     * @type {string}
     * @memberof PostFavoriteTweetRequest
     */
    queryId: string;
    /**
     * 
     * @type {PostCreateRetweetRequestVariables}
     * @memberof PostFavoriteTweetRequest
     */
    variables: PostCreateRetweetRequestVariables;
}

/**
 * Check if a given object implements the PostFavoriteTweetRequest interface.
 */
export function instanceOfPostFavoriteTweetRequest(value: object): boolean {
    if (!('queryId' in value)) return false;
    if (!('variables' in value)) return false;
    return true;
}

export function PostFavoriteTweetRequestFromJSON(json: any): PostFavoriteTweetRequest {
    return PostFavoriteTweetRequestFromJSONTyped(json, false);
}

export function PostFavoriteTweetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostFavoriteTweetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'queryId': json['queryId'],
        'variables': PostCreateRetweetRequestVariablesFromJSON(json['variables']),
    };
}

export function PostFavoriteTweetRequestToJSON(value?: PostFavoriteTweetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'queryId': value['queryId'],
        'variables': PostCreateRetweetRequestVariablesToJSON(value['variables']),
    };
}

