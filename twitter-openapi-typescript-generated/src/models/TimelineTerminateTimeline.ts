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
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
} from './InstructionType';

/**
 * 
 * @export
 * @interface TimelineTerminateTimeline
 */
export interface TimelineTerminateTimeline {
    /**
     * 
     * @type {string}
     * @memberof TimelineTerminateTimeline
     */
    direction: TimelineTerminateTimelineDirectionEnum;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineTerminateTimeline
     */
    type: InstructionType;
}


/**
 * @export
 */
export const TimelineTerminateTimelineDirectionEnum = {
    Top: 'Top',
    Bottom: 'Bottom',
    TopAndBottom: 'TopAndBottom'
} as const;
export type TimelineTerminateTimelineDirectionEnum = typeof TimelineTerminateTimelineDirectionEnum[keyof typeof TimelineTerminateTimelineDirectionEnum];


/**
 * Check if a given object implements the TimelineTerminateTimeline interface.
 */
export function instanceOfTimelineTerminateTimeline(value: object): boolean {
    if (!('direction' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function TimelineTerminateTimelineFromJSON(json: any): TimelineTerminateTimeline {
    return TimelineTerminateTimelineFromJSONTyped(json, false);
}

export function TimelineTerminateTimelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineTerminateTimeline {
    if (json == null) {
        return json;
    }
    return {
        
        'direction': json['direction'],
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineTerminateTimelineToJSON(value?: TimelineTerminateTimeline | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'direction': value['direction'],
        'type': InstructionTypeToJSON(value['type']),
    };
}

