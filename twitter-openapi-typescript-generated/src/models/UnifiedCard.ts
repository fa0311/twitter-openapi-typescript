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
 * @interface UnifiedCard
 */
export interface UnifiedCard {
    /**
     * 
     * @type {string}
     * @memberof UnifiedCard
     */
    cardFetchState: UnifiedCardCardFetchStateEnum;
}


/**
 * @export
 */
export const UnifiedCardCardFetchStateEnum = {
    NoCard: 'NoCard'
} as const;
export type UnifiedCardCardFetchStateEnum = typeof UnifiedCardCardFetchStateEnum[keyof typeof UnifiedCardCardFetchStateEnum];


/**
 * Check if a given object implements the UnifiedCard interface.
 */
export function instanceOfUnifiedCard(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "cardFetchState" in value;

    return isInstance;
}

export function UnifiedCardFromJSON(json: any): UnifiedCard {
    return UnifiedCardFromJSONTyped(json, false);
}

export function UnifiedCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnifiedCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardFetchState': json['card_fetch_state'],
    };
}

export function UnifiedCardToJSON(value?: UnifiedCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'card_fetch_state': value.cardFetchState,
    };
}

