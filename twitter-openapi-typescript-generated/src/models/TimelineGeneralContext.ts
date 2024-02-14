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
import type { SocialContextLandingUrl } from './SocialContextLandingUrl';
import {
    SocialContextLandingUrlFromJSON,
    SocialContextLandingUrlFromJSONTyped,
    SocialContextLandingUrlToJSON,
} from './SocialContextLandingUrl';
import type { SocialContextUnionType } from './SocialContextUnionType';
import {
    SocialContextUnionTypeFromJSON,
    SocialContextUnionTypeFromJSONTyped,
    SocialContextUnionTypeToJSON,
} from './SocialContextUnionType';

/**
 * 
 * @export
 * @interface TimelineGeneralContext
 */
export interface TimelineGeneralContext {
    /**
     * 
     * @type {string}
     * @memberof TimelineGeneralContext
     */
    contextType?: TimelineGeneralContextContextTypeEnum;
    /**
     * 
     * @type {SocialContextLandingUrl}
     * @memberof TimelineGeneralContext
     */
    landingUrl?: SocialContextLandingUrl;
    /**
     * 
     * @type {string}
     * @memberof TimelineGeneralContext
     */
    text?: string;
    /**
     * 
     * @type {SocialContextUnionType}
     * @memberof TimelineGeneralContext
     */
    type?: SocialContextUnionType;
}


/**
 * @export
 */
export const TimelineGeneralContextContextTypeEnum = {
    Follow: 'Follow',
    Pin: 'Pin',
    Like: 'Like',
    Location: 'Location',
    Sparkle: 'Sparkle',
    Conversation: 'Conversation',
    List: 'List'
} as const;
export type TimelineGeneralContextContextTypeEnum = typeof TimelineGeneralContextContextTypeEnum[keyof typeof TimelineGeneralContextContextTypeEnum];


/**
 * Check if a given object implements the TimelineGeneralContext interface.
 */
export function instanceOfTimelineGeneralContext(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimelineGeneralContextFromJSON(json: any): TimelineGeneralContext {
    return TimelineGeneralContextFromJSONTyped(json, false);
}

export function TimelineGeneralContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineGeneralContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contextType': !exists(json, 'contextType') ? undefined : json['contextType'],
        'landingUrl': !exists(json, 'landingUrl') ? undefined : SocialContextLandingUrlFromJSON(json['landingUrl']),
        'text': !exists(json, 'text') ? undefined : json['text'],
        'type': !exists(json, 'type') ? undefined : SocialContextUnionTypeFromJSON(json['type']),
    };
}

export function TimelineGeneralContextToJSON(value?: TimelineGeneralContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contextType': value.contextType,
        'landingUrl': SocialContextLandingUrlToJSON(value.landingUrl),
        'text': value.text,
        'type': SocialContextUnionTypeToJSON(value.type),
    };
}

