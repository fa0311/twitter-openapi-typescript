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
import type { TweetCardLegacyBindingValuesInner } from './TweetCardLegacyBindingValuesInner';
import {
    TweetCardLegacyBindingValuesInnerFromJSON,
    TweetCardLegacyBindingValuesInnerFromJSONTyped,
    TweetCardLegacyBindingValuesInnerToJSON,
} from './TweetCardLegacyBindingValuesInner';

/**
 * 
 * @export
 * @interface TweetCardLegacy
 */
export interface TweetCardLegacy {
    /**
     * 
     * @type {Array<TweetCardLegacyBindingValuesInner>}
     * @memberof TweetCardLegacy
     */
    bindingValues: Array<TweetCardLegacyBindingValuesInner>;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacy
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TweetCardLegacy
     */
    url: string;
}

/**
 * Check if a given object implements the TweetCardLegacy interface.
 */
export function instanceOfTweetCardLegacy(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "bindingValues" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function TweetCardLegacyFromJSON(json: any): TweetCardLegacy {
    return TweetCardLegacyFromJSONTyped(json, false);
}

export function TweetCardLegacyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCardLegacy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bindingValues': ((json['binding_values'] as Array<any>).map(TweetCardLegacyBindingValuesInnerFromJSON)),
        'name': json['name'],
        'url': json['url'],
    };
}

export function TweetCardLegacyToJSON(value?: TweetCardLegacy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'binding_values': ((value.bindingValues as Array<any>).map(TweetCardLegacyBindingValuesInnerToJSON)),
        'name': value.name,
        'url': value.url,
    };
}

