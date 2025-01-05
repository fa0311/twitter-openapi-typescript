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


/**
 * 
 * @export
 */
export const TypeName = {
    TimelineTweet: 'TimelineTweet',
    TimelineTimelineItem: 'TimelineTimelineItem',
    TimelineUser: 'TimelineUser',
    TimelineTimelineCursor: 'TimelineTimelineCursor',
    TweetWithVisibilityResults: 'TweetWithVisibilityResults',
    ContextualTweetInterstitial: 'ContextualTweetInterstitial',
    TimelineTimelineModule: 'TimelineTimelineModule',
    TweetTombstone: 'TweetTombstone',
    TimelinePrompt: 'TimelinePrompt',
    TimelineMessagePrompt: 'TimelineMessagePrompt',
    TimelineCommunity: 'TimelineCommunity',
    TweetUnavailable: 'TweetUnavailable',
    TweetPreviewDisplay: 'TweetPreviewDisplay',
    Tweet: 'Tweet',
    User: 'User',
    UserUnavailable: 'UserUnavailable',
    Community: 'Community',
    CommunityDeleteActionUnavailable: 'CommunityDeleteActionUnavailable',
    CommunityJoinAction: 'CommunityJoinAction',
    CommunityJoinActionUnavailable: 'CommunityJoinActionUnavailable',
    CommunityLeaveActionUnavailable: 'CommunityLeaveActionUnavailable',
    CommunityTweetPinActionUnavailable: 'CommunityTweetPinActionUnavailable',
    CommunityTweetUnpinActionUnavailable: 'CommunityTweetUnpinActionUnavailable',
    CommunityInvitesUnavailable: 'CommunityInvitesUnavailable',
    CommunityJoinRequestsUnavailable: 'CommunityJoinRequestsUnavailable',
    ApiImage: 'ApiImage'
} as const;
export type TypeName = typeof TypeName[keyof typeof TypeName];


export function instanceOfTypeName(value: any): boolean {
    for (const key in TypeName) {
        if (Object.prototype.hasOwnProperty.call(TypeName, key)) {
            if (TypeName[key as keyof typeof TypeName] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TypeNameFromJSON(json: any): TypeName {
    return TypeNameFromJSONTyped(json, false);
}

export function TypeNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypeName {
    return json as TypeName;
}

export function TypeNameToJSON(value?: TypeName | null): any {
    return value as any;
}

export function TypeNameToJSONTyped(value: any, ignoreDiscriminator: boolean): TypeName {
    return value as TypeName;
}

