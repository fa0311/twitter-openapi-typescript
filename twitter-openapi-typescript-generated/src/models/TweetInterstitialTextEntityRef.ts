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
 * @interface TweetInterstitialTextEntityRef
 */
export interface TweetInterstitialTextEntityRef {
    /**
     * 
     * @type {string}
     * @memberof TweetInterstitialTextEntityRef
     */
    type: TweetInterstitialTextEntityRefTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof TweetInterstitialTextEntityRef
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof TweetInterstitialTextEntityRef
     */
    urlType: TweetInterstitialTextEntityRefUrlTypeEnum;
}


/**
 * @export
 */
export const TweetInterstitialTextEntityRefTypeEnum = {
    TimelineUrl: 'TimelineUrl'
} as const;
export type TweetInterstitialTextEntityRefTypeEnum = typeof TweetInterstitialTextEntityRefTypeEnum[keyof typeof TweetInterstitialTextEntityRefTypeEnum];

/**
 * @export
 */
export const TweetInterstitialTextEntityRefUrlTypeEnum = {
    ExternalUrl: 'ExternalUrl'
} as const;
export type TweetInterstitialTextEntityRefUrlTypeEnum = typeof TweetInterstitialTextEntityRefUrlTypeEnum[keyof typeof TweetInterstitialTextEntityRefUrlTypeEnum];


/**
 * Check if a given object implements the TweetInterstitialTextEntityRef interface.
 */
export function instanceOfTweetInterstitialTextEntityRef(value: object): value is TweetInterstitialTextEntityRef {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('urlType' in value) || value['urlType'] === undefined) return false;
    return true;
}

export function TweetInterstitialTextEntityRefFromJSON(json: any): TweetInterstitialTextEntityRef {
    return TweetInterstitialTextEntityRefFromJSONTyped(json, false);
}

export function TweetInterstitialTextEntityRefFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetInterstitialTextEntityRef {
    if (json == null) {
        return json;
    }
    return {
        
        'type': json['type'],
        'url': json['url'],
        'urlType': json['urlType'],
    };
}

export function TweetInterstitialTextEntityRefToJSON(json: any): TweetInterstitialTextEntityRef {
    return TweetInterstitialTextEntityRefToJSONTyped(json, false);
}

export function TweetInterstitialTextEntityRefToJSONTyped(value?: TweetInterstitialTextEntityRef | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'type': value['type'],
        'url': value['url'],
        'urlType': value['urlType'],
    };
}

