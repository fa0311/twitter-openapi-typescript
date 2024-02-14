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
import type { TweetCardLegacyBindingValue } from './TweetCardLegacyBindingValue';
import {
    TweetCardLegacyBindingValueFromJSON,
    TweetCardLegacyBindingValueFromJSONTyped,
    TweetCardLegacyBindingValueToJSON,
} from './TweetCardLegacyBindingValue';
import type { TweetCardPlatformData } from './TweetCardPlatformData';
import {
    TweetCardPlatformDataFromJSON,
    TweetCardPlatformDataFromJSONTyped,
    TweetCardPlatformDataToJSON,
} from './TweetCardPlatformData';
import type { UserResults } from './UserResults';
import {
    UserResultsFromJSON,
    UserResultsFromJSONTyped,
    UserResultsToJSON,
} from './UserResults';

/**
 * 
 * @export
 * @interface TweetCardLegacy
 */
export interface TweetCardLegacy {
    /**
     * 
     * @type {Array<TweetCardLegacyBindingValue>}
     * @memberof TweetCardLegacy
     */
    bindingValues: Array<TweetCardLegacyBindingValue>;
    /**
     * 
     * @type {TweetCardPlatformData}
     * @memberof TweetCardLegacy
     */
    cardPlatform?: TweetCardPlatformData;
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
    /**
     * 
     * @type {Array<UserResults>}
     * @memberof TweetCardLegacy
     */
    userRefsResults?: Array<UserResults>;
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
        
        'bindingValues': ((json['binding_values'] as Array<any>).map(TweetCardLegacyBindingValueFromJSON)),
        'cardPlatform': !exists(json, 'card_platform') ? undefined : TweetCardPlatformDataFromJSON(json['card_platform']),
        'name': json['name'],
        'url': json['url'],
        'userRefsResults': !exists(json, 'user_refs_results') ? undefined : ((json['user_refs_results'] as Array<any>).map(UserResultsFromJSON)),
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
        
        'binding_values': ((value.bindingValues as Array<any>).map(TweetCardLegacyBindingValueToJSON)),
        'card_platform': TweetCardPlatformDataToJSON(value.cardPlatform),
        'name': value.name,
        'url': value.url,
        'user_refs_results': value.userRefsResults === undefined ? undefined : ((value.userRefsResults as Array<any>).map(UserResultsToJSON)),
    };
}

