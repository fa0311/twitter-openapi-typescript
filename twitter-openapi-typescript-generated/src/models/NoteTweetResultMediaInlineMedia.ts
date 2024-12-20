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
 * @interface NoteTweetResultMediaInlineMedia
 */
export interface NoteTweetResultMediaInlineMedia {
    /**
     * 
     * @type {number}
     * @memberof NoteTweetResultMediaInlineMedia
     */
    index: number;
    /**
     * 
     * @type {string}
     * @memberof NoteTweetResultMediaInlineMedia
     */
    mediaId: string;
}

/**
 * Check if a given object implements the NoteTweetResultMediaInlineMedia interface.
 */
export function instanceOfNoteTweetResultMediaInlineMedia(value: object): value is NoteTweetResultMediaInlineMedia {
    if (!('index' in value) || value['index'] === undefined) return false;
    if (!('mediaId' in value) || value['mediaId'] === undefined) return false;
    return true;
}

export function NoteTweetResultMediaInlineMediaFromJSON(json: any): NoteTweetResultMediaInlineMedia {
    return NoteTweetResultMediaInlineMediaFromJSONTyped(json, false);
}

export function NoteTweetResultMediaInlineMediaFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteTweetResultMediaInlineMedia {
    if (json == null) {
        return json;
    }
    return {
        
        'index': json['index'],
        'mediaId': json['media_id'],
    };
}

export function NoteTweetResultMediaInlineMediaToJSON(json: any): NoteTweetResultMediaInlineMedia {
    return NoteTweetResultMediaInlineMediaToJSONTyped(json, false);
}

export function NoteTweetResultMediaInlineMediaToJSONTyped(value?: NoteTweetResultMediaInlineMedia | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'index': value['index'],
        'media_id': value['mediaId'],
    };
}

