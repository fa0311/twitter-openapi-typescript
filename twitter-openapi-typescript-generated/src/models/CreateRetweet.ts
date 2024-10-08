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
import type { Retweet } from './Retweet';
import {
    RetweetFromJSON,
    RetweetFromJSONTyped,
    RetweetToJSON,
} from './Retweet';

/**
 * 
 * @export
 * @interface CreateRetweet
 */
export interface CreateRetweet {
    /**
     * 
     * @type {Retweet}
     * @memberof CreateRetweet
     */
    result: Retweet;
}

/**
 * Check if a given object implements the CreateRetweet interface.
 */
export function instanceOfCreateRetweet(value: object): value is CreateRetweet {
    if (!('result' in value) || value['result'] === undefined) return false;
    return true;
}

export function CreateRetweetFromJSON(json: any): CreateRetweet {
    return CreateRetweetFromJSONTyped(json, false);
}

export function CreateRetweetFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRetweet {
    if (json == null) {
        return json;
    }
    return {
        
        'result': RetweetFromJSON(json['result']),
    };
}

export function CreateRetweetToJSON(value?: CreateRetweet | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': RetweetToJSON(value['result']),
    };
}

