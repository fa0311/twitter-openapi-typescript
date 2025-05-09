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

import type { TimelineCommunity } from './TimelineCommunity';
import {
    instanceOfTimelineCommunity,
    TimelineCommunityFromJSON,
    TimelineCommunityFromJSONTyped,
    TimelineCommunityToJSON,
} from './TimelineCommunity';
import type { TimelineMessagePrompt } from './TimelineMessagePrompt';
import {
    instanceOfTimelineMessagePrompt,
    TimelineMessagePromptFromJSON,
    TimelineMessagePromptFromJSONTyped,
    TimelineMessagePromptToJSON,
} from './TimelineMessagePrompt';
import type { TimelineNotification } from './TimelineNotification';
import {
    instanceOfTimelineNotification,
    TimelineNotificationFromJSON,
    TimelineNotificationFromJSONTyped,
    TimelineNotificationToJSON,
} from './TimelineNotification';
import type { TimelinePrompt } from './TimelinePrompt';
import {
    instanceOfTimelinePrompt,
    TimelinePromptFromJSON,
    TimelinePromptFromJSONTyped,
    TimelinePromptToJSON,
} from './TimelinePrompt';
import type { TimelineTimelineCursor } from './TimelineTimelineCursor';
import {
    instanceOfTimelineTimelineCursor,
    TimelineTimelineCursorFromJSON,
    TimelineTimelineCursorFromJSONTyped,
    TimelineTimelineCursorToJSON,
} from './TimelineTimelineCursor';
import type { TimelineTombstone } from './TimelineTombstone';
import {
    instanceOfTimelineTombstone,
    TimelineTombstoneFromJSON,
    TimelineTombstoneFromJSONTyped,
    TimelineTombstoneToJSON,
} from './TimelineTombstone';
import type { TimelineTrend } from './TimelineTrend';
import {
    instanceOfTimelineTrend,
    TimelineTrendFromJSON,
    TimelineTrendFromJSONTyped,
    TimelineTrendToJSON,
} from './TimelineTrend';
import type { TimelineTweet } from './TimelineTweet';
import {
    instanceOfTimelineTweet,
    TimelineTweetFromJSON,
    TimelineTweetFromJSONTyped,
    TimelineTweetToJSON,
} from './TimelineTweet';
import type { TimelineUser } from './TimelineUser';
import {
    instanceOfTimelineUser,
    TimelineUserFromJSON,
    TimelineUserFromJSONTyped,
    TimelineUserToJSON,
} from './TimelineUser';

/**
 * @type ItemContentUnion
 * 
 * @export
 */
export type ItemContentUnion = { typename: 'TimelineCommunity' } & TimelineCommunity | { typename: 'TimelineMessagePrompt' } & TimelineMessagePrompt | { typename: 'TimelineNotification' } & TimelineNotification | { typename: 'TimelinePrompt' } & TimelinePrompt | { typename: 'TimelineTimelineCursor' } & TimelineTimelineCursor | { typename: 'TimelineTombstone' } & TimelineTombstone | { typename: 'TimelineTrend' } & TimelineTrend | { typename: 'TimelineTweet' } & TimelineTweet | { typename: 'TimelineUser' } & TimelineUser;

export function ItemContentUnionFromJSON(json: any): ItemContentUnion {
    return ItemContentUnionFromJSONTyped(json, false);
}

export function ItemContentUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemContentUnion {
    if (json == null) {
        return json;
    }
    switch (json['__typename']) {
        case 'TimelineCommunity':
            return Object.assign({}, TimelineCommunityFromJSONTyped(json, true), { typename: 'TimelineCommunity' } as const);
        case 'TimelineMessagePrompt':
            return Object.assign({}, TimelineMessagePromptFromJSONTyped(json, true), { typename: 'TimelineMessagePrompt' } as const);
        case 'TimelineNotification':
            return Object.assign({}, TimelineNotificationFromJSONTyped(json, true), { typename: 'TimelineNotification' } as const);
        case 'TimelinePrompt':
            return Object.assign({}, TimelinePromptFromJSONTyped(json, true), { typename: 'TimelinePrompt' } as const);
        case 'TimelineTimelineCursor':
            return Object.assign({}, TimelineTimelineCursorFromJSONTyped(json, true), { typename: 'TimelineTimelineCursor' } as const);
        case 'TimelineTombstone':
            return Object.assign({}, TimelineTombstoneFromJSONTyped(json, true), { typename: 'TimelineTombstone' } as const);
        case 'TimelineTrend':
            return Object.assign({}, TimelineTrendFromJSONTyped(json, true), { typename: 'TimelineTrend' } as const);
        case 'TimelineTweet':
            return Object.assign({}, TimelineTweetFromJSONTyped(json, true), { typename: 'TimelineTweet' } as const);
        case 'TimelineUser':
            return Object.assign({}, TimelineUserFromJSONTyped(json, true), { typename: 'TimelineUser' } as const);
        default:
            throw new Error(`No variant of ItemContentUnion exists with 'typename=${json['typename']}'`);
    }
}

export function ItemContentUnionToJSON(json: any): any {
    return ItemContentUnionToJSONTyped(json, false);
}

export function ItemContentUnionToJSONTyped(value?: ItemContentUnion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['typename']) {
        case 'TimelineCommunity':
            return Object.assign({}, TimelineCommunityToJSON(value), { typename: 'TimelineCommunity' } as const);
        case 'TimelineMessagePrompt':
            return Object.assign({}, TimelineMessagePromptToJSON(value), { typename: 'TimelineMessagePrompt' } as const);
        case 'TimelineNotification':
            return Object.assign({}, TimelineNotificationToJSON(value), { typename: 'TimelineNotification' } as const);
        case 'TimelinePrompt':
            return Object.assign({}, TimelinePromptToJSON(value), { typename: 'TimelinePrompt' } as const);
        case 'TimelineTimelineCursor':
            return Object.assign({}, TimelineTimelineCursorToJSON(value), { typename: 'TimelineTimelineCursor' } as const);
        case 'TimelineTombstone':
            return Object.assign({}, TimelineTombstoneToJSON(value), { typename: 'TimelineTombstone' } as const);
        case 'TimelineTrend':
            return Object.assign({}, TimelineTrendToJSON(value), { typename: 'TimelineTrend' } as const);
        case 'TimelineTweet':
            return Object.assign({}, TimelineTweetToJSON(value), { typename: 'TimelineTweet' } as const);
        case 'TimelineUser':
            return Object.assign({}, TimelineUserToJSON(value), { typename: 'TimelineUser' } as const);
        default:
            throw new Error(`No variant of ItemContentUnion exists with 'typename=${value['typename']}'`);
    }

}

