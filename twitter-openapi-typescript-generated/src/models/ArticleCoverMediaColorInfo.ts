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
import type { ArticleCoverMediaColorInfoPalette } from './ArticleCoverMediaColorInfoPalette';
import {
    ArticleCoverMediaColorInfoPaletteFromJSON,
    ArticleCoverMediaColorInfoPaletteFromJSONTyped,
    ArticleCoverMediaColorInfoPaletteToJSON,
    ArticleCoverMediaColorInfoPaletteToJSONTyped,
} from './ArticleCoverMediaColorInfoPalette';

/**
 * 
 * @export
 * @interface ArticleCoverMediaColorInfo
 */
export interface ArticleCoverMediaColorInfo {
    /**
     * 
     * @type {Array<ArticleCoverMediaColorInfoPalette>}
     * @memberof ArticleCoverMediaColorInfo
     */
    palette: Array<ArticleCoverMediaColorInfoPalette>;
}

/**
 * Check if a given object implements the ArticleCoverMediaColorInfo interface.
 */
export function instanceOfArticleCoverMediaColorInfo(value: object): value is ArticleCoverMediaColorInfo {
    if (!('palette' in value) || value['palette'] === undefined) return false;
    return true;
}

export function ArticleCoverMediaColorInfoFromJSON(json: any): ArticleCoverMediaColorInfo {
    return ArticleCoverMediaColorInfoFromJSONTyped(json, false);
}

export function ArticleCoverMediaColorInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleCoverMediaColorInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'palette': ((json['palette'] as Array<any>).map(ArticleCoverMediaColorInfoPaletteFromJSON)),
    };
}

export function ArticleCoverMediaColorInfoToJSON(json: any): ArticleCoverMediaColorInfo {
    return ArticleCoverMediaColorInfoToJSONTyped(json, false);
}

export function ArticleCoverMediaColorInfoToJSONTyped(value?: ArticleCoverMediaColorInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'palette': ((value['palette'] as Array<any>).map(ArticleCoverMediaColorInfoPaletteToJSON)),
    };
}

