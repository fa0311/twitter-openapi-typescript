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
import type { Tweet } from './Tweet';
import {
    TweetFromJSON,
    TweetFromJSONTyped,
    TweetToJSON,
} from './Tweet';
import type { TweetInterstitial } from './TweetInterstitial';
import {
    TweetInterstitialFromJSON,
    TweetInterstitialFromJSONTyped,
    TweetInterstitialToJSON,
} from './TweetInterstitial';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';

/**
 * 
 * @export
 * @interface TweetWithVisibilityResults
 */
export interface TweetWithVisibilityResults {
    /**
     * 
     * @type {TypeName}
     * @memberof TweetWithVisibilityResults
     */
    typename: TypeName;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TweetWithVisibilityResults
     */
    limitedActionResults?: { [key: string]: any; };
    /**
     * 
     * @type {Tweet}
     * @memberof TweetWithVisibilityResults
     */
    tweet: Tweet;
    /**
     * 
     * @type {TweetInterstitial}
     * @memberof TweetWithVisibilityResults
     */
    tweetInterstitial?: TweetInterstitial;
}

/**
 * Check if a given object implements the TweetWithVisibilityResults interface.
 */
export function instanceOfTweetWithVisibilityResults(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "typename" in value;
    isInstance = isInstance && "tweet" in value;

    return isInstance;
}

export function TweetWithVisibilityResultsFromJSON(json: any): TweetWithVisibilityResults {
    return TweetWithVisibilityResultsFromJSONTyped(json, false);
}

export function TweetWithVisibilityResultsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetWithVisibilityResults {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'limitedActionResults': !exists(json, 'limitedActionResults') ? undefined : json['limitedActionResults'],
        'tweet': TweetFromJSON(json['tweet']),
        'tweetInterstitial': !exists(json, 'tweetInterstitial') ? undefined : TweetInterstitialFromJSON(json['tweetInterstitial']),
    };
}

export function TweetWithVisibilityResultsToJSON(value?: TweetWithVisibilityResults | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
        'limitedActionResults': value.limitedActionResults,
        'tweet': TweetToJSON(value.tweet),
        'tweetInterstitial': TweetInterstitialToJSON(value.tweetInterstitial),
    };
}

