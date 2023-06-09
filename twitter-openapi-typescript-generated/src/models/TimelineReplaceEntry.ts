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
import type { InstructionType } from './InstructionType';
import {
    InstructionTypeFromJSON,
    InstructionTypeFromJSONTyped,
    InstructionTypeToJSON,
} from './InstructionType';
import type { TimelineAddEntry } from './TimelineAddEntry';
import {
    TimelineAddEntryFromJSON,
    TimelineAddEntryFromJSONTyped,
    TimelineAddEntryToJSON,
} from './TimelineAddEntry';

/**
 * 
 * @export
 * @interface TimelineReplaceEntry
 */
export interface TimelineReplaceEntry {
    /**
     * 
     * @type {TimelineAddEntry}
     * @memberof TimelineReplaceEntry
     */
    entry: TimelineAddEntry;
    /**
     * 
     * @type {string}
     * @memberof TimelineReplaceEntry
     */
    entryIdToReplace: string;
    /**
     * 
     * @type {InstructionType}
     * @memberof TimelineReplaceEntry
     */
    type: InstructionType;
}

/**
 * Check if a given object implements the TimelineReplaceEntry interface.
 */
export function instanceOfTimelineReplaceEntry(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entry" in value;
    isInstance = isInstance && "entryIdToReplace" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function TimelineReplaceEntryFromJSON(json: any): TimelineReplaceEntry {
    return TimelineReplaceEntryFromJSONTyped(json, false);
}

export function TimelineReplaceEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimelineReplaceEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entry': TimelineAddEntryFromJSON(json['entry']),
        'entryIdToReplace': json['entry_id_to_replace'],
        'type': InstructionTypeFromJSON(json['type']),
    };
}

export function TimelineReplaceEntryToJSON(value?: TimelineReplaceEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entry': TimelineAddEntryToJSON(value.entry),
        'entry_id_to_replace': value.entryIdToReplace,
        'type': InstructionTypeToJSON(value.type),
    };
}

