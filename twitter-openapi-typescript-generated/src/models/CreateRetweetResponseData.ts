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
import type { CreateRetweetResponseResult } from './CreateRetweetResponseResult';
import {
    CreateRetweetResponseResultFromJSON,
    CreateRetweetResponseResultFromJSONTyped,
    CreateRetweetResponseResultToJSON,
} from './CreateRetweetResponseResult';

/**
 * 
 * @export
 * @interface CreateRetweetResponseData
 */
export interface CreateRetweetResponseData {
    /**
     * 
     * @type {CreateRetweetResponseResult}
     * @memberof CreateRetweetResponseData
     */
    createRetweet: CreateRetweetResponseResult;
}

/**
 * Check if a given object implements the CreateRetweetResponseData interface.
 */
export function instanceOfCreateRetweetResponseData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "createRetweet" in value;

    return isInstance;
}

export function CreateRetweetResponseDataFromJSON(json: any): CreateRetweetResponseData {
    return CreateRetweetResponseDataFromJSONTyped(json, false);
}

export function CreateRetweetResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRetweetResponseData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createRetweet': CreateRetweetResponseResultFromJSON(json['create_retweet']),
    };
}

export function CreateRetweetResponseDataToJSON(value?: CreateRetweetResponseData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create_retweet': CreateRetweetResponseResultToJSON(value.createRetweet),
    };
}

