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
import type { ContentItemType } from './ContentItemType';
import {
    ContentItemTypeFromJSON,
    ContentItemTypeFromJSONTyped,
    ContentItemTypeToJSON,
} from './ContentItemType';
import type { Highlight } from './Highlight';
import {
    HighlightFromJSON,
    HighlightFromJSONTyped,
    HighlightToJSON,
} from './Highlight';
import type { ItemResult } from './ItemResult';
import {
    ItemResultFromJSON,
    ItemResultFromJSONTyped,
    ItemResultToJSON,
} from './ItemResult';
import type { SocialContextUnion } from './SocialContextUnion';
import {
    SocialContextUnionFromJSON,
    SocialContextUnionFromJSONTyped,
    SocialContextUnionToJSON,
} from './SocialContextUnion';
import type { TypeName } from './TypeName';
import {
    TypeNameFromJSON,
    TypeNameFromJSONTyped,
    TypeNameToJSON,
} from './TypeName';

/**
 * 
 * @export
 * @interface TimelineTweet
 */
export interface TimelineTweet {
    /**
     * 
     * @type {TypeName}
     * @memberof TimelineTweet
     */
    typename: TypeName;
    /**
     * 
     * @type {Highlight}
     * @memberof TimelineTweet
     */
    highlights?: Highlight;
    /**
     * 
     * @type {ContentItemType}
     * @memberof TimelineTweet
     */
    itemType: ContentItemType;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TimelineTweet
     */
    promotedMetadata?: { [key: string]: any; };
    /**
     * 
     * @type {SocialContextUnion}
     * @memberof TimelineTweet
     */
    socialContext?: SocialContextUnion;
    /**
     * 
     * @type {string}
     * @memberof TimelineTweet
     */
    tweetDisplayType: string;
    /**
     * 
     * @type {ItemResult}
     * @memberof TimelineTweet
     */
    tweetResults: ItemResult;
}

/**
 * Check if a given object implements the TimelineTweet interface.
 */
export function instanceOfTimelineTweet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "typename" in value;
    isInstance = isInstance && "itemType" in value;
    isInstance = isInstance && "tweetDisplayType" in value;
    isInstance = isInstance && "tweetResults" in value;

    return isInstance;
}

export function TimelineTweetFromJSON(json: any): TimelineTweet {
    return TimelineTweetFromJSONTyped(json, false);
}

export function TimelineTweetFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTweet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'typename': TypeNameFromJSON(json['__typename']),
        'highlights': !exists(json, 'highlights') ? undefined : HighlightFromJSON(json['highlights']),
        'itemType': ContentItemTypeFromJSON(json['itemType']),
        'promotedMetadata': !exists(json, 'promotedMetadata') ? undefined : json['promotedMetadata'],
        'socialContext': !exists(json, 'socialContext') ? undefined : SocialContextUnionFromJSON(json['socialContext']),
        'tweetDisplayType': json['tweetDisplayType'],
        'tweetResults': ItemResultFromJSON(json['tweet_results']),
    };
}

export function TimelineTweetToJSON(value?: TimelineTweet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '__typename': TypeNameToJSON(value.typename),
        'highlights': HighlightToJSON(value.highlights),
        'itemType': ContentItemTypeToJSON(value.itemType),
        'promotedMetadata': value.promotedMetadata,
        'socialContext': SocialContextUnionToJSON(value.socialContext),
        'tweetDisplayType': value.tweetDisplayType,
        'tweet_results': ItemResultToJSON(value.tweetResults),
    };
}

