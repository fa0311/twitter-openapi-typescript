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
import type { TweetUnion } from './TweetUnion';
import {
    TweetUnionFromJSON,
    TweetUnionFromJSONTyped,
    TweetUnionToJSON,
} from './TweetUnion';

/**
 * 
 * @export
 * @interface QuotedRefResult
 */
export interface QuotedRefResult {
    /**
     * 
     * @type {TweetUnion}
     * @memberof QuotedRefResult
     */
    result?: TweetUnion;
}

/**
 * Check if a given object implements the QuotedRefResult interface.
 */
export function instanceOfQuotedRefResult(value: object): value is QuotedRefResult {
    return true;
}

export function QuotedRefResultFromJSON(json: any): QuotedRefResult {
    return QuotedRefResultFromJSONTyped(json, false);
}

export function QuotedRefResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotedRefResult {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : TweetUnionFromJSON(json['result']),
    };
}

export function QuotedRefResultToJSON(value?: QuotedRefResult | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': TweetUnionToJSON(value['result']),
    };
}

