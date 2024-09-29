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
 * @interface TweetEditControlInitial
 */
export interface TweetEditControlInitial {
    /**
     * 
     * @type {Array<string>}
     * @memberof TweetEditControlInitial
     */
    editTweetIds: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TweetEditControlInitial
     */
    editableUntilMsecs: string;
    /**
     * 
     * @type {string}
     * @memberof TweetEditControlInitial
     */
    editsRemaining: string;
    /**
     * 
     * @type {boolean}
     * @memberof TweetEditControlInitial
     */
    isEditEligible: boolean;
}

/**
 * Check if a given object implements the TweetEditControlInitial interface.
 */
export function instanceOfTweetEditControlInitial(value: object): value is TweetEditControlInitial {
    if (!('editTweetIds' in value) || value['editTweetIds'] === undefined) return false;
    if (!('editableUntilMsecs' in value) || value['editableUntilMsecs'] === undefined) return false;
    if (!('editsRemaining' in value) || value['editsRemaining'] === undefined) return false;
    if (!('isEditEligible' in value) || value['isEditEligible'] === undefined) return false;
    return true;
}

export function TweetEditControlInitialFromJSON(json: any): TweetEditControlInitial {
    return TweetEditControlInitialFromJSONTyped(json, false);
}

export function TweetEditControlInitialFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetEditControlInitial {
    if (json == null) {
        return json;
    }
    return {
        
        'editTweetIds': json['edit_tweet_ids'],
        'editableUntilMsecs': json['editable_until_msecs'],
        'editsRemaining': json['edits_remaining'],
        'isEditEligible': json['is_edit_eligible'],
    };
}

export function TweetEditControlInitialToJSON(value?: TweetEditControlInitial | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'edit_tweet_ids': value['editTweetIds'],
        'editable_until_msecs': value['editableUntilMsecs'],
        'edits_remaining': value['editsRemaining'],
        'is_edit_eligible': value['isEditEligible'],
    };
}

