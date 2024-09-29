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
 * @interface BirdwatchPivotFooter
 */
export interface BirdwatchPivotFooter {
    /**
     * 
     * @type {Array<BirdwatchEntity>}
     * @memberof BirdwatchPivotFooter
     */
    entities: Array<BirdwatchEntity>;
    /**
     * 
     * @type {string}
     * @memberof BirdwatchPivotFooter
     */
    text: string;
}

/**
 * Check if a given object implements the BirdwatchPivotFooter interface.
 */
export function instanceOfBirdwatchPivotFooter(value: object): value is BirdwatchPivotFooter {
    if (!('entities' in value) || value['entities'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function BirdwatchPivotFooterFromJSON(json: any): BirdwatchPivotFooter {
    return BirdwatchPivotFooterFromJSONTyped(json, false);
}

export function BirdwatchPivotFooterFromJSONTyped(json: any, ignoreDiscriminator: boolean): BirdwatchPivotFooter {
    if (json == null) {
        return json;
    }
    return {
        
        'entities': ((json['entities'] as Array<any>).map(BirdwatchEntityFromJSON)),
        'text': json['text'],
    };
}

export function BirdwatchPivotFooterToJSON(value?: BirdwatchPivotFooter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entities': ((value['entities'] as Array<any>).map(BirdwatchEntityToJSON)),
        'text': value['text'],
    };
}

