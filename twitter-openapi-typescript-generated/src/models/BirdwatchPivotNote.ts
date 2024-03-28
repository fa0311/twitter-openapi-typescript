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
/**
 * 
 * @export
 * @interface BirdwatchPivotNote
 */
export interface BirdwatchPivotNote {
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivotNote
     */
    restId: string;
}

/**
 * Check if a given object implements the BirdwatchPivotNote interface.
 */
export function instanceOfBirdwatchPivotNote(value: object): boolean {
    if (!('restId' in value)) return false;
    return true;
}

export function BirdwatchPivotNoteFromJSON(json: any): BirdwatchPivotNote {
    return BirdwatchPivotNoteFromJSONTyped(json, false);
}

export function BirdwatchPivotNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): BirdwatchPivotNote {
    if (json == null) {
        return json;
    }
    return {
        
        'restId': json['rest_id'],
    };
}

export function BirdwatchPivotNoteToJSON(value?: BirdwatchPivotNote | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'rest_id': value['restId'],
    };
}

