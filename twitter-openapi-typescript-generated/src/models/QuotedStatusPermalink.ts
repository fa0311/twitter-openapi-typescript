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
 * @interface QuotedStatusPermalink
 */
export interface QuotedStatusPermalink {
    /**
     * 
     * @type {string}
     * @memberof QuotedStatusPermalink
     */
    display: string;
    /**
     * 
     * @type {string}
     * @memberof QuotedStatusPermalink
     */
    expanded: string;
    /**
     * 
     * @type {string}
     * @memberof QuotedStatusPermalink
     */
    url: string;
}

/**
 * Check if a given object implements the QuotedStatusPermalink interface.
 */
export function instanceOfQuotedStatusPermalink(value: object): value is QuotedStatusPermalink {
    if (!('display' in value) || value['display'] === undefined) return false;
    if (!('expanded' in value) || value['expanded'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function QuotedStatusPermalinkFromJSON(json: any): QuotedStatusPermalink {
    return QuotedStatusPermalinkFromJSONTyped(json, false);
}

export function QuotedStatusPermalinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): QuotedStatusPermalink {
    if (json == null) {
        return json;
    }
    return {
        
        'display': json['display'],
        'expanded': json['expanded'],
        'url': json['url'],
    };
}

export function QuotedStatusPermalinkToJSON(json: any): QuotedStatusPermalink {
    return QuotedStatusPermalinkToJSONTyped(json, false);
}

export function QuotedStatusPermalinkToJSONTyped(value?: QuotedStatusPermalink | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'display': value['display'],
        'expanded': value['expanded'],
        'url': value['url'],
    };
}

