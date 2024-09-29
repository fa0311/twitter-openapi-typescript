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
import type { TopicContext } from './TopicContext';
import {
    TopicContextFromJSON,
    TopicContextFromJSONTyped,
    TopicContextToJSON,
} from './TopicContext';
import type { SocialContextUnionType } from './SocialContextUnionType';
import {
    SocialContextUnionTypeFromJSON,
    SocialContextUnionTypeFromJSONTyped,
    SocialContextUnionTypeToJSON,
} from './SocialContextUnionType';

/**
 * 
 * @export
 * @interface TimelineTopicContext
 */
export interface TimelineTopicContext {
    /**
     * 
     * @type {string}
     * @memberof TimelineTopicContext
     */
    functionalityType?: TimelineTopicContextFunctionalityTypeEnum;
    /**
     * 
     * @type {TopicContext}
     * @memberof TimelineTopicContext
     */
    topic?: TopicContext;
    /**
     * 
     * @type {SocialContextUnionType}
     * @memberof TimelineTopicContext
     */
    type?: SocialContextUnionType;
}


/**
 * @export
 */
export const TimelineTopicContextFunctionalityTypeEnum = {
    Basic: 'Basic'
} as const;
export type TimelineTopicContextFunctionalityTypeEnum = typeof TimelineTopicContextFunctionalityTypeEnum[keyof typeof TimelineTopicContextFunctionalityTypeEnum];


/**
 * Check if a given object implements the TimelineTopicContext interface.
 */
export function instanceOfTimelineTopicContext(value: object): value is TimelineTopicContext {
    return true;
}

export function TimelineTopicContextFromJSON(json: any): TimelineTopicContext {
    return TimelineTopicContextFromJSONTyped(json, false);
}

export function TimelineTopicContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTopicContext {
    if (json == null) {
        return json;
    }
    return {
        
        'functionalityType': json['functionalityType'] == null ? undefined : json['functionalityType'],
        'topic': json['topic'] == null ? undefined : TopicContextFromJSON(json['topic']),
        'type': json['type'] == null ? undefined : SocialContextUnionTypeFromJSON(json['type']),
    };
}

export function TimelineTopicContextToJSON(value?: TimelineTopicContext | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'functionalityType': value['functionalityType'],
        'topic': TopicContextToJSON(value['topic']),
        'type': SocialContextUnionTypeToJSON(value['type']),
    };
}

