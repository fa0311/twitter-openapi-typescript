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
    InstructionTypeToJSONTyped,
} from './InstructionType';
import type { TimelineAddEntry } from './TimelineAddEntry';
import {
    TimelineAddEntryFromJSON,
    TimelineAddEntryFromJSONTyped,
    TimelineAddEntryToJSON,
    TimelineAddEntryToJSONTyped,
} from './TimelineAddEntry';

/**
 * 
 * @export
 * @interface TimelinePinEntry
 */
export interface TimelinePinEntry {
    /**
     * 
     * @type {TimelineAddEntry}
     * @memberof TimelinePinEntry
     */
    entry: TimelineAddEntry;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelinePinEntry
     */
    type: InstructionType;
}



/**
 * Check if a given object implements the TimelinePinEntry interface.
 */
export function instanceOfTimelinePinEntry(value: object): value is TimelinePinEntry {
    if (!('entry' in value) || value['entry'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function TimelinePinEntryFromJSON(json: any): TimelinePinEntry {
    return TimelinePinEntryFromJSONTyped(json, false);
}

export function TimelinePinEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelinePinEntry {
    if (json == null) {
        return json;
    }
    return {
        
        'entry': TimelineAddEntryFromJSON(json['entry']),
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelinePinEntryToJSON(json: any): TimelinePinEntry {
    return TimelinePinEntryToJSONTyped(json, false);
}

export function TimelinePinEntryToJSONTyped(value?: TimelinePinEntry | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'entry': TimelineAddEntryToJSON(value['entry']),
        'type': InstructionTypeToJSON(value['type']),
    };
}

