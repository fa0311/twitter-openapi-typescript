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
import type { InstructionUnion } from './InstructionUnion';
import {
    InstructionUnionFromJSON,
    InstructionUnionFromJSONTyped,
    InstructionUnionToJSON,
} from './InstructionUnion';

/**
 * 
 * @export
 * @interface Timeline
 */
export interface Timeline {
    /**
     * 
     * @type {Array<InstructionUnion>}
     * @memberof Timeline
     */
    instructions: Array<InstructionUnion>;
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Timeline
     */
    metadata?: { [key: string]: any; };
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof Timeline
     */
    responseObjects?: { [key: string]: any; };
}

/**
 * Check if a given object implements the Timeline interface.
 */
export function instanceOfTimeline(value: object): boolean {
    if (!('instructions' in value)) return false;
    return true;
}

export function TimelineFromJSON(json: any): Timeline {
    return TimelineFromJSONTyped(json, false);
}

export function TimelineFromJSONTyped(json: any, ignoreDiscriminator: boolean): Timeline {
    if (json == null) {
        return json;
    }
    return {
        
        'instructions': ((json['instructions'] as Array<any>).map(InstructionUnionFromJSON)),
        'metadata': json['metadata'] == null ? undefined : json['metadata'],
        'responseObjects': json['responseObjects'] == null ? undefined : json['responseObjects'],
    };
}

export function TimelineToJSON(value?: Timeline | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'instructions': ((value['instructions'] as Array<any>).map(InstructionUnionToJSON)),
        'metadata': value['metadata'],
        'responseObjects': value['responseObjects'],
    };
}

