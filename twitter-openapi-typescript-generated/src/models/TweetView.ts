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
 * @interface TweetView
 */
export interface TweetView {
    /**
     * 
     * @type {string}
     * @memberof TweetView
     */
    count?: string;
    /**
     * 
     * @type {string}
     * @memberof TweetView
     */
    state: TweetViewStateEnum;
}


/**
 * @export
 */
export const TweetViewStateEnum = {
    Enabled: 'Enabled',
    EnabledWithCount: 'EnabledWithCount'
} as const;
export type TweetViewStateEnum = typeof TweetViewStateEnum[keyof typeof TweetViewStateEnum];


/**
 * Check if a given object implements the TweetView interface.
 */
export function instanceOfTweetView(value: object): value is TweetView {
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function TweetViewFromJSON(json: any): TweetView {
    return TweetViewFromJSONTyped(json, false);
}

export function TweetViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetView {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'state': json['state'],
    };
}

export function TweetViewToJSON(value?: TweetView | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'state': value['state'],
    };
}

