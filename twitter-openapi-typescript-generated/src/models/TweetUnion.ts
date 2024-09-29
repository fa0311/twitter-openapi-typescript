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

import type { Tweet } from './Tweet';
import {
    instanceOfTweet,
    TweetFromJSON,
    TweetFromJSONTyped,
    TweetToJSON,
} from './Tweet';
import type { TweetTombstone } from './TweetTombstone';
import {
    instanceOfTweetTombstone,
    TweetTombstoneFromJSON,
    TweetTombstoneFromJSONTyped,
    TweetTombstoneToJSON,
} from './TweetTombstone';
import type { TweetUnavailable } from './TweetUnavailable';
import {
    instanceOfTweetUnavailable,
    TweetUnavailableFromJSON,
    TweetUnavailableFromJSONTyped,
    TweetUnavailableToJSON,
} from './TweetUnavailable';
import type { TweetWithVisibilityResults } from './TweetWithVisibilityResults';
import {
    instanceOfTweetWithVisibilityResults,
    TweetWithVisibilityResultsFromJSON,
    TweetWithVisibilityResultsFromJSONTyped,
    TweetWithVisibilityResultsToJSON,
} from './TweetWithVisibilityResults';

/**
 * @type TweetUnion
 * 
 * @export
 */
export type TweetUnion = { typename: 'Tweet' } & Tweet | { typename: 'TweetTombstone' } & TweetTombstone | { typename: 'TweetUnavailable' } & TweetUnavailable | { typename: 'TweetWithVisibilityResults' } & TweetWithVisibilityResults;

export function TweetUnionFromJSON(json: any): TweetUnion {
    return TweetUnionFromJSONTyped(json, false);
}

export function TweetUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetUnion {
    if (json == null) {
        return json;
    }
    switch (json['__typename']) {
        case 'Tweet':
            return Object.assign({}, TweetFromJSONTyped(json, true), { typename: 'Tweet' } as const);
        case 'TweetTombstone':
            return Object.assign({}, TweetTombstoneFromJSONTyped(json, true), { typename: 'TweetTombstone' } as const);
        case 'TweetUnavailable':
            return Object.assign({}, TweetUnavailableFromJSONTyped(json, true), { typename: 'TweetUnavailable' } as const);
        case 'TweetWithVisibilityResults':
            return Object.assign({}, TweetWithVisibilityResultsFromJSONTyped(json, true), { typename: 'TweetWithVisibilityResults' } as const);
        default:
            throw new Error(`No variant of TweetUnion exists with 'typename=${json['typename']}'`);
    }
}

export function TweetUnionToJSON(value?: TweetUnion | null): any {
    if (value == null) {
        return value;
    }
    switch (value['typename']) {
        case 'Tweet':
            return TweetToJSON(value);
        case 'TweetTombstone':
            return TweetTombstoneToJSON(value);
        case 'TweetUnavailable':
            return TweetUnavailableToJSON(value);
        case 'TweetWithVisibilityResults':
            return TweetWithVisibilityResultsToJSON(value);
        default:
            throw new Error(`No variant of TweetUnion exists with 'typename=${value['typename']}'`);
    }

}

