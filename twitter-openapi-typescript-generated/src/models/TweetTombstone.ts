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
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';

/**
 * 
 * @export
 * @interface TweetTombstone
 */
export interface TweetTombstone {
    [key: string]: any | any;
    /**
     * 
     * @type {TypeName}
     * @memberof TweetTombstone
     */
    typename?: TypeName;
}

/**
 * Check if a given object implements the TweetTombstone interface.
 */
export function instanceOfTweetTombstone(value: object): boolean {
    return true;
}

export function TweetTombstoneFromJSON(json: any): TweetTombstone {
    return TweetTombstoneFromJSONTyped(json, false);
}

export function TweetTombstoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetTombstone {
    if (json == null) {
        return json;
    }
    return {
        
            ...json,
        'typename': json['__typename'] == null ? undefined : TypeNameFromJSON(json['__typename']),
    };
}

export function TweetTombstoneToJSON(value?: TweetTombstone | null): any {
    if (value == null) {
        return value;
    }
    return {
        
            ...value,
        '__typename': TypeNameToJSON(value['typename']),
    };
}

