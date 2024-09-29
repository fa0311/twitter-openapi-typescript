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
import type { TextEntity } from './TextEntity';
import {
    TextEntityFromJSON,
    TextEntityFromJSONTyped,
    TextEntityToJSON,
} from './TextEntity';

/**
 * 
 * @export
 * @interface Text
 */
export interface Text {
    /**
     * 
     * @type {Array<TextEntity>}
     * @memberof Text
     */
    entities: Array<TextEntity>;
    /**
     * 
     * @type {string}
     * @memberof Text
     */
    text: string;
}

/**
 * Check if a given object implements the Text interface.
 */
export function instanceOfText(value: object): value is Text {
    if (!('entities' in value) || value['entities'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    return true;
}

export function TextFromJSON(json: any): Text {
    return TextFromJSONTyped(json, false);
}

export function TextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Text {
    if (json == null) {
        return json;
    }
    return {
        
        'entities': ((json['entities'] as Array<any>).map(TextEntityFromJSON)),
        'text': json['text'],
    };
}

export function TextToJSON(value?: Text | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'entities': ((value['entities'] as Array<any>).map(TextEntityToJSON)),
        'text': value['text'],
    };
}

