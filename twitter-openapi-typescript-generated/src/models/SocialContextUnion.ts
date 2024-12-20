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

import type { TimelineGeneralContext } from './TimelineGeneralContext';
import {
    instanceOfTimelineGeneralContext,
    TimelineGeneralContextFromJSON,
    TimelineGeneralContextFromJSONTyped,
    TimelineGeneralContextToJSON,
} from './TimelineGeneralContext';
import type { TimelineTopicContext } from './TimelineTopicContext';
import {
    instanceOfTimelineTopicContext,
    TimelineTopicContextFromJSON,
    TimelineTopicContextFromJSONTyped,
    TimelineTopicContextToJSON,
} from './TimelineTopicContext';

/**
 * @type SocialContextUnion
 * 
 * @export
 */
export type SocialContextUnion = { type: 'TimelineGeneralContext' } & TimelineGeneralContext | { type: 'TimelineTopicContext' } & TimelineTopicContext;

export function SocialContextUnionFromJSON(json: any): SocialContextUnion {
    return SocialContextUnionFromJSONTyped(json, false);
}

export function SocialContextUnionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialContextUnion {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'TimelineGeneralContext':
            return Object.assign({}, TimelineGeneralContextFromJSONTyped(json, true), { type: 'TimelineGeneralContext' } as const);
        case 'TimelineTopicContext':
            return Object.assign({}, TimelineTopicContextFromJSONTyped(json, true), { type: 'TimelineTopicContext' } as const);
        default:
            throw new Error(`No variant of SocialContextUnion exists with 'type=${json['type']}'`);
    }
}

export function SocialContextUnionToJSON(json: any): any {
    return SocialContextUnionToJSONTyped(json, false);
}

export function SocialContextUnionToJSONTyped(value?: SocialContextUnion | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'TimelineGeneralContext':
            return Object.assign({}, TimelineGeneralContextToJSON(value), { type: 'TimelineGeneralContext' } as const);
        case 'TimelineTopicContext':
            return Object.assign({}, TimelineTopicContextToJSON(value), { type: 'TimelineTopicContext' } as const);
        default:
            throw new Error(`No variant of SocialContextUnion exists with 'type=${value['type']}'`);
    }

}

