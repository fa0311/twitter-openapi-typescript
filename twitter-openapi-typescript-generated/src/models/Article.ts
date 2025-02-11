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
import type { ArticleResults } from './ArticleResults';
import {
    ArticleResultsFromJSON,
    ArticleResultsFromJSONTyped,
    ArticleResultsToJSON,
    ArticleResultsToJSONTyped,
} from './ArticleResults';

/**
 * 
 * @export
 * @interface Article
 */
export interface Article {
    /**
     * 
     * @type {ArticleResults}
     * @memberof Article
     */
    articleResults: ArticleResults;
}

/**
 * Check if a given object implements the Article interface.
 */
export function instanceOfArticle(value: object): value is Article {
    if (!('articleResults' in value) || value['articleResults'] === undefined) return false;
    return true;
}

export function ArticleFromJSON(json: any): Article {
    return ArticleFromJSONTyped(json, false);
}

export function ArticleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Article {
    if (json == null) {
        return json;
    }
    return {
        
        'articleResults': ArticleResultsFromJSON(json['article_results']),
    };
}

export function ArticleToJSON(json: any): Article {
    return ArticleToJSONTyped(json, false);
}

export function ArticleToJSONTyped(value?: Article | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'article_results': ArticleResultsToJSON(value['articleResults']),
    };
}

