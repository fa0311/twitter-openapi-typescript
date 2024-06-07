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
 * @interface ArticleMetadata
 */
export interface ArticleMetadata {
    /**
     * 
     * @type {number}
     * @memberof ArticleMetadata
     */
    firstPublishedAtSecs: number;
}

/**
 * Check if a given object implements the ArticleMetadata interface.
 */
export function instanceOfArticleMetadata(value: object): boolean {
    if (!('firstPublishedAtSecs' in value)) return false;
    return true;
}

export function ArticleMetadataFromJSON(json: any): ArticleMetadata {
    return ArticleMetadataFromJSONTyped(json, false);
}

export function ArticleMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticleMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'firstPublishedAtSecs': json['first_published_at_secs'],
    };
}

export function ArticleMetadataToJSON(value?: ArticleMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'first_published_at_secs': value['firstPublishedAtSecs'],
    };
}

