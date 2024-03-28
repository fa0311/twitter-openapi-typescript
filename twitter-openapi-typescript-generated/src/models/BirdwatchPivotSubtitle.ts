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
import type { BirdwatchEntity } from './BirdwatchEntity';
import {
    BirdwatchEntityFromJSON,
    BirdwatchEntityFromJSONTyped,
    BirdwatchEntityToJSON,
} from './BirdwatchEntity';

/**
 * 
 * @export
 * @interface BirdwatchPivotSubtitle
 */
export interface BirdwatchPivotSubtitle {
    /**
     * 
     * @type {Array<BirdwatchEntity>}
     * @memberof BirdwatchPivotSubtitle
     */
    entities: Array<BirdwatchEntity>;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivotSubtitle
     */
    text: string;
}

/**
 * Check if a given object implements the BirdwatchPivotSubtitle interface.
 */
export function instanceOfBirdwatchPivotSubtitle(value: object): boolean {
    if (!('entities' in value)) return false;
    if (!('text' in value)) return false;
    return true;
}

export function BirdwatchPivotSubtitleFromJSON(json: any): BirdwatchPivotSubtitle {
    return BirdwatchPivotSubtitleFromJSONTyped(json, false);
}

export function BirdwatchPivotSubtitleFromJSONTyped(json: any, ignoreDiscriminator: boolean): BirdwatchPivotSubtitle {
    if (json == null) {
        return json;
    }
    return {
        
        'entities': ((json['entities'] as Array<any>).map(BirdwatchEntityFromJSON)),
        'text': json['text'],
    };
}

export function BirdwatchPivotSubtitleToJSON(value?: BirdwatchPivotSubtitle | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entities': ((value['entities'] as Array<any>).map(BirdwatchEntityToJSON)),
        'text': value['text'],
    };
}

