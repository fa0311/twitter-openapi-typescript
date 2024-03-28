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
import type { Entities } from './Entities';
import {
    EntitiesFromJSON,
    EntitiesFromJSONTyped,
    EntitiesToJSON,
} from './Entities';
import type { ExtendedEntities } from './ExtendedEntities';
import {
    ExtendedEntitiesFromJSON,
    ExtendedEntitiesFromJSONTyped,
    ExtendedEntitiesToJSON,
} from './ExtendedEntities';
import type { ItemResult } from './ItemResult';
import {
    ItemResultFromJSON,
    ItemResultFromJSONTyped,
    ItemResultToJSON,
} from './ItemResult';
import type { QuotedStatusPermalink } from './QuotedStatusPermalink';
import {
    QuotedStatusPermalinkFromJSON,
    QuotedStatusPermalinkFromJSONTyped,
    QuotedStatusPermalinkToJSON,
} from './QuotedStatusPermalink';
import type { SelfThread } from './SelfThread';
import {
    SelfThreadFromJSON,
    SelfThreadFromJSONTyped,
    SelfThreadToJSON,
} from './SelfThread';
import type { TweetLegacyScopes } from './TweetLegacyScopes';
import {
    TweetLegacyScopesFromJSON,
    TweetLegacyScopesFromJSONTyped,
    TweetLegacyScopesToJSON,
} from './TweetLegacyScopes';

/**
 * 
 * @export
 * @interface TweetLegacy
 */
export interface TweetLegacy {
    /**
     * 
     * @type {number}
     * @memberof TweetLegacy
     */
    bookmarkCount: number;
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacy
     */
    bookmarked: boolean;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TweetLegacy
     */
    conversationControl?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    conversationIdStr: string;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    createdAt: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof TweetLegacy
     */
    displayTextRange: Array<number>;
    /**
     * 
     * @type {Entities}
     * @memberof TweetLegacy
     */
    entities: Entities;
    /**
     * 
     * @type {ExtendedEntities}
     * @memberof TweetLegacy
     */
    extendedEntities?: ExtendedEntities;
    /**
     * 
     * @type {number}
     * @memberof TweetLegacy
     */
    favoriteCount: number;
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacy
     */
    favorited: boolean;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    fullText: string;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    idStr: string;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    inReplyToScreenName?: string;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    inReplyToStatusIdStr?: string;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    inReplyToUserIdStr?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacy
     */
    isQuoteStatus: boolean;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    lang: string;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    limitedActions?: TweetLegacyLimitedActionsEnum;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof TweetLegacy
     */
    place?: { [key: string]: any; };
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacy
     */
    possiblySensitive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacy
     */
    possiblySensitiveEditable?: boolean;
    /**
     * 
     * @type {number}
     * @memberof TweetLegacy
     */
    quoteCount: number;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    quotedStatusIdStr?: string;
    /**
     * 
     * @type {QuotedStatusPermalink}
     * @memberof TweetLegacy
     */
    quotedStatusPermalink?: QuotedStatusPermalink;
    /**
     * 
     * @type {number}
     * @memberof TweetLegacy
     */
    replyCount: number;
    /**
     * 
     * @type {number}
     * @memberof TweetLegacy
     */
    retweetCount: number;
    /**
     * 
     * @type {boolean}
     * @memberof TweetLegacy
     */
    retweeted: boolean;
    /**
     * 
     * @type {ItemResult}
     * @memberof TweetLegacy
     */
    retweetedStatusResult?: ItemResult;
    /**
     * 
     * @type {TweetLegacyScopes}
     * @memberof TweetLegacy
     */
    scopes?: TweetLegacyScopes;
    /**
     * 
     * @type {SelfThread}
     * @memberof TweetLegacy
     */
    selfThread?: SelfThread;
    /**
     * 
     * @type {string}
     * @memberof TweetLegacy
     */
    userIdStr: string;
}


/**
 * @export
 */
export const TweetLegacyLimitedActionsEnum = {
    LimitedReplies: 'limited_replies',
    NonCompliant: 'non_compliant',
    DynamicProductAd: 'dynamic_product_ad',
    StaleTweet: 'stale_tweet',
    CommunityTweetNonMemberPublicCommunity: 'community_tweet_non_member_public_community',
    CommunityTweetNonMemberClosedCommunity: 'community_tweet_non_member_closed_community'
} as const;
export type TweetLegacyLimitedActionsEnum = typeof TweetLegacyLimitedActionsEnum[keyof typeof TweetLegacyLimitedActionsEnum];


/**
 * Check if a given object implements the TweetLegacy interface.
 */
export function instanceOfTweetLegacy(value: object): boolean {
    if (!('bookmarkCount' in value)) return false;
    if (!('bookmarked' in value)) return false;
    if (!('conversationIdStr' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('displayTextRange' in value)) return false;
    if (!('entities' in value)) return false;
    if (!('favoriteCount' in value)) return false;
    if (!('favorited' in value)) return false;
    if (!('fullText' in value)) return false;
    if (!('idStr' in value)) return false;
    if (!('isQuoteStatus' in value)) return false;
    if (!('lang' in value)) return false;
    if (!('quoteCount' in value)) return false;
    if (!('replyCount' in value)) return false;
    if (!('retweetCount' in value)) return false;
    if (!('retweeted' in value)) return false;
    if (!('userIdStr' in value)) return false;
    return true;
}

export function TweetLegacyFromJSON(json: any): TweetLegacy {
    return TweetLegacyFromJSONTyped(json, false);
}

export function TweetLegacyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TweetLegacy {
    if (json == null) {
        return json;
    }
    return {
        
        'bookmarkCount': json['bookmark_count'],
        'bookmarked': json['bookmarked'],
        'conversationControl': json['conversation_control'] == null ? undefined : json['conversation_control'],
        'conversationIdStr': json['conversation_id_str'],
        'createdAt': json['created_at'],
        'displayTextRange': json['display_text_range'],
        'entities': EntitiesFromJSON(json['entities']),
        'extendedEntities': json['extended_entities'] == null ? undefined : ExtendedEntitiesFromJSON(json['extended_entities']),
        'favoriteCount': json['favorite_count'],
        'favorited': json['favorited'],
        'fullText': json['full_text'],
        'idStr': json['id_str'],
        'inReplyToScreenName': json['in_reply_to_screen_name'] == null ? undefined : json['in_reply_to_screen_name'],
        'inReplyToStatusIdStr': json['in_reply_to_status_id_str'] == null ? undefined : json['in_reply_to_status_id_str'],
        'inReplyToUserIdStr': json['in_reply_to_user_id_str'] == null ? undefined : json['in_reply_to_user_id_str'],
        'isQuoteStatus': json['is_quote_status'],
        'lang': json['lang'],
        'limitedActions': json['limited_actions'] == null ? undefined : json['limited_actions'],
        'place': json['place'] == null ? undefined : json['place'],
        'possiblySensitive': json['possibly_sensitive'] == null ? undefined : json['possibly_sensitive'],
        'possiblySensitiveEditable': json['possibly_sensitive_editable'] == null ? undefined : json['possibly_sensitive_editable'],
        'quoteCount': json['quote_count'],
        'quotedStatusIdStr': json['quoted_status_id_str'] == null ? undefined : json['quoted_status_id_str'],
        'quotedStatusPermalink': json['quoted_status_permalink'] == null ? undefined : QuotedStatusPermalinkFromJSON(json['quoted_status_permalink']),
        'replyCount': json['reply_count'],
        'retweetCount': json['retweet_count'],
        'retweeted': json['retweeted'],
        'retweetedStatusResult': json['retweeted_status_result'] == null ? undefined : ItemResultFromJSON(json['retweeted_status_result']),
        'scopes': json['scopes'] == null ? undefined : TweetLegacyScopesFromJSON(json['scopes']),
        'selfThread': json['self_thread'] == null ? undefined : SelfThreadFromJSON(json['self_thread']),
        'userIdStr': json['user_id_str'],
    };
}

export function TweetLegacyToJSON(value?: TweetLegacy | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'bookmark_count': value['bookmarkCount'],
        'bookmarked': value['bookmarked'],
        'conversation_control': value['conversationControl'],
        'conversation_id_str': value['conversationIdStr'],
        'created_at': value['createdAt'],
        'display_text_range': value['displayTextRange'],
        'entities': EntitiesToJSON(value['entities']),
        'extended_entities': ExtendedEntitiesToJSON(value['extendedEntities']),
        'favorite_count': value['favoriteCount'],
        'favorited': value['favorited'],
        'full_text': value['fullText'],
        'id_str': value['idStr'],
        'in_reply_to_screen_name': value['inReplyToScreenName'],
        'in_reply_to_status_id_str': value['inReplyToStatusIdStr'],
        'in_reply_to_user_id_str': value['inReplyToUserIdStr'],
        'is_quote_status': value['isQuoteStatus'],
        'lang': value['lang'],
        'limited_actions': value['limitedActions'],
        'place': value['place'],
        'possibly_sensitive': value['possiblySensitive'],
        'possibly_sensitive_editable': value['possiblySensitiveEditable'],
        'quote_count': value['quoteCount'],
        'quoted_status_id_str': value['quotedStatusIdStr'],
        'quoted_status_permalink': QuotedStatusPermalinkToJSON(value['quotedStatusPermalink']),
        'reply_count': value['replyCount'],
        'retweet_count': value['retweetCount'],
        'retweeted': value['retweeted'],
        'retweeted_status_result': ItemResultToJSON(value['retweetedStatusResult']),
        'scopes': TweetLegacyScopesToJSON(value['scopes']),
        'self_thread': SelfThreadToJSON(value['selfThread']),
        'user_id_str': value['userIdStr'],
    };
}

