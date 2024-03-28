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
 * @interface CommunityUrlsPermalink
 */
export interface CommunityUrlsPermalink {
    /**
     * 
     * @type {string}
     * @memberof CommunityUrlsPermalink
     */
    url: string;
}

/**
 * Check if a given object implements the CommunityUrlsPermalink interface.
 */
export function instanceOfCommunityUrlsPermalink(value: object): boolean {
    if (!('url' in value)) return false;
    return true;
}

export function CommunityUrlsPermalinkFromJSON(json: any): CommunityUrlsPermalink {
    return CommunityUrlsPermalinkFromJSONTyped(json, false);
}

export function CommunityUrlsPermalinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommunityUrlsPermalink {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
    };
}

export function CommunityUrlsPermalinkToJSON(value?: CommunityUrlsPermalink | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'url': value['url'],
    };
}

