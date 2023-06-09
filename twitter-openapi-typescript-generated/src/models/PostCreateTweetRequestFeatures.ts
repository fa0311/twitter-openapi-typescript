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
/**
 * 
 * @export
 * @interface PostCreateTweetRequestFeatures
 */
export interface PostCreateTweetRequestFeatures {
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    blueBusinessProfileImageShapeEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    freedomOfSpeechNotReachFetchEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    graphqlIsTranslatableRwebTweetIsTranslatableEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    interactiveTextEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    longformNotetweetsConsumptionEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    longformNotetweetsRichTextReadEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    responsiveWebEditTweetApiEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    responsiveWebEnhanceCardsEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    responsiveWebGraphqlExcludeDirectiveEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    responsiveWebGraphqlSkipUserProfileImageExtensionsEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    responsiveWebGraphqlTimelineNavigationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    responsiveWebTextConversationsEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    standardizedNudgesMisinfo: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    tweetAwardsWebTippingEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    tweetWithVisibilityResultsPreferGqlLimitedActionsPolicyEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    tweetypieUnmentionOptimizationEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    verifiedPhoneLabelEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    vibeApiEnabled: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PostCreateTweetRequestFeatures
     */
    viewCountsEverywhereApiEnabled: boolean;
}

/**
 * Check if a given object implements the PostCreateTweetRequestFeatures interface.
 */
export function instanceOfPostCreateTweetRequestFeatures(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "blueBusinessProfileImageShapeEnabled" in value;
    isInstance = isInstance && "freedomOfSpeechNotReachFetchEnabled" in value;
    isInstance = isInstance && "graphqlIsTranslatableRwebTweetIsTranslatableEnabled" in value;
    isInstance = isInstance && "interactiveTextEnabled" in value;
    isInstance = isInstance && "longformNotetweetsConsumptionEnabled" in value;
    isInstance = isInstance && "longformNotetweetsRichTextReadEnabled" in value;
    isInstance = isInstance && "responsiveWebEditTweetApiEnabled" in value;
    isInstance = isInstance && "responsiveWebEnhanceCardsEnabled" in value;
    isInstance = isInstance && "responsiveWebGraphqlExcludeDirectiveEnabled" in value;
    isInstance = isInstance && "responsiveWebGraphqlSkipUserProfileImageExtensionsEnabled" in value;
    isInstance = isInstance && "responsiveWebGraphqlTimelineNavigationEnabled" in value;
    isInstance = isInstance && "responsiveWebTextConversationsEnabled" in value;
    isInstance = isInstance && "standardizedNudgesMisinfo" in value;
    isInstance = isInstance && "tweetAwardsWebTippingEnabled" in value;
    isInstance = isInstance && "tweetWithVisibilityResultsPreferGqlLimitedActionsPolicyEnabled" in value;
    isInstance = isInstance && "tweetypieUnmentionOptimizationEnabled" in value;
    isInstance = isInstance && "verifiedPhoneLabelEnabled" in value;
    isInstance = isInstance && "vibeApiEnabled" in value;
    isInstance = isInstance && "viewCountsEverywhereApiEnabled" in value;

    return isInstance;
}

export function PostCreateTweetRequestFeaturesFromJSON(json: any): PostCreateTweetRequestFeatures {
    return PostCreateTweetRequestFeaturesFromJSONTyped(json, false);
}

export function PostCreateTweetRequestFeaturesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostCreateTweetRequestFeatures {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blueBusinessProfileImageShapeEnabled': json['blue_business_profile_image_shape_enabled'],
        'freedomOfSpeechNotReachFetchEnabled': json['freedom_of_speech_not_reach_fetch_enabled'],
        'graphqlIsTranslatableRwebTweetIsTranslatableEnabled': json['graphql_is_translatable_rweb_tweet_is_translatable_enabled'],
        'interactiveTextEnabled': json['interactive_text_enabled'],
        'longformNotetweetsConsumptionEnabled': json['longform_notetweets_consumption_enabled'],
        'longformNotetweetsRichTextReadEnabled': json['longform_notetweets_rich_text_read_enabled'],
        'responsiveWebEditTweetApiEnabled': json['responsive_web_edit_tweet_api_enabled'],
        'responsiveWebEnhanceCardsEnabled': json['responsive_web_enhance_cards_enabled'],
        'responsiveWebGraphqlExcludeDirectiveEnabled': json['responsive_web_graphql_exclude_directive_enabled'],
        'responsiveWebGraphqlSkipUserProfileImageExtensionsEnabled': json['responsive_web_graphql_skip_user_profile_image_extensions_enabled'],
        'responsiveWebGraphqlTimelineNavigationEnabled': json['responsive_web_graphql_timeline_navigation_enabled'],
        'responsiveWebTextConversationsEnabled': json['responsive_web_text_conversations_enabled'],
        'standardizedNudgesMisinfo': json['standardized_nudges_misinfo'],
        'tweetAwardsWebTippingEnabled': json['tweet_awards_web_tipping_enabled'],
        'tweetWithVisibilityResultsPreferGqlLimitedActionsPolicyEnabled': json['tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled'],
        'tweetypieUnmentionOptimizationEnabled': json['tweetypie_unmention_optimization_enabled'],
        'verifiedPhoneLabelEnabled': json['verified_phone_label_enabled'],
        'vibeApiEnabled': json['vibe_api_enabled'],
        'viewCountsEverywhereApiEnabled': json['view_counts_everywhere_api_enabled'],
    };
}

export function PostCreateTweetRequestFeaturesToJSON(value?: PostCreateTweetRequestFeatures | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blue_business_profile_image_shape_enabled': value.blueBusinessProfileImageShapeEnabled,
        'freedom_of_speech_not_reach_fetch_enabled': value.freedomOfSpeechNotReachFetchEnabled,
        'graphql_is_translatable_rweb_tweet_is_translatable_enabled': value.graphqlIsTranslatableRwebTweetIsTranslatableEnabled,
        'interactive_text_enabled': value.interactiveTextEnabled,
        'longform_notetweets_consumption_enabled': value.longformNotetweetsConsumptionEnabled,
        'longform_notetweets_rich_text_read_enabled': value.longformNotetweetsRichTextReadEnabled,
        'responsive_web_edit_tweet_api_enabled': value.responsiveWebEditTweetApiEnabled,
        'responsive_web_enhance_cards_enabled': value.responsiveWebEnhanceCardsEnabled,
        'responsive_web_graphql_exclude_directive_enabled': value.responsiveWebGraphqlExcludeDirectiveEnabled,
        'responsive_web_graphql_skip_user_profile_image_extensions_enabled': value.responsiveWebGraphqlSkipUserProfileImageExtensionsEnabled,
        'responsive_web_graphql_timeline_navigation_enabled': value.responsiveWebGraphqlTimelineNavigationEnabled,
        'responsive_web_text_conversations_enabled': value.responsiveWebTextConversationsEnabled,
        'standardized_nudges_misinfo': value.standardizedNudgesMisinfo,
        'tweet_awards_web_tipping_enabled': value.tweetAwardsWebTippingEnabled,
        'tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled': value.tweetWithVisibilityResultsPreferGqlLimitedActionsPolicyEnabled,
        'tweetypie_unmention_optimization_enabled': value.tweetypieUnmentionOptimizationEnabled,
        'verified_phone_label_enabled': value.verifiedPhoneLabelEnabled,
        'vibe_api_enabled': value.vibeApiEnabled,
        'view_counts_everywhere_api_enabled': value.viewCountsEverywhereApiEnabled,
    };
}

