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
 * @interface TweetCardPlatformAudience
 */
export interface TweetCardPlatformAudience {
    /**
     * 
     * @type {string}
     * @memberof TweetCardPlatformAudience
     */
    name: TweetCardPlatformAudienceNameEnum;
}


/**
 * @export
 */
export const TweetCardPlatformAudienceNameEnum = {
    Production: 'production'
} as const;
export type TweetCardPlatformAudienceNameEnum = typeof TweetCardPlatformAudienceNameEnum[keyof typeof TweetCardPlatformAudienceNameEnum];


/**
 * Check if a given object implements the TweetCardPlatformAudience interface.
 */
export function instanceOfTweetCardPlatformAudience(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TweetCardPlatformAudienceFromJSON(json: any): TweetCardPlatformAudience {
    return TweetCardPlatformAudienceFromJSONTyped(json, false);
}

export function TweetCardPlatformAudienceFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetCardPlatformAudience {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function TweetCardPlatformAudienceToJSON(value?: TweetCardPlatformAudience | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

