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
import type { UrtEndpointOptions } from './UrtEndpointOptions';
import {
    UrtEndpointOptionsFromJSON,
    UrtEndpointOptionsFromJSONTyped,
    UrtEndpointOptionsToJSON,
    UrtEndpointOptionsToJSONTyped,
} from './UrtEndpointOptions';

/**
 * 
 * @export
 * @interface SocialContextLandingUrl
 */
export interface SocialContextLandingUrl {
    /**
     * 
     * @type {string}
     * @memberof SocialContextLandingUrl
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof SocialContextLandingUrl
     */
    urlType?: SocialContextLandingUrlUrlTypeEnum;
    /**
     * 
     * @type {UrtEndpointOptions}
     * @memberof SocialContextLandingUrl
     */
    urtEndpointOptions?: UrtEndpointOptions;
}


/**
 * @export
 */
export const SocialContextLandingUrlUrlTypeEnum = {
    DeepLink: 'DeepLink',
    UrtEndpoint: 'UrtEndpoint',
    ExternalUrl: 'ExternalUrl'
} as const;
export type SocialContextLandingUrlUrlTypeEnum = typeof SocialContextLandingUrlUrlTypeEnum[keyof typeof SocialContextLandingUrlUrlTypeEnum];


/**
 * Check if a given object implements the SocialContextLandingUrl interface.
 */
export function instanceOfSocialContextLandingUrl(value: object): value is SocialContextLandingUrl {
    return true;
}

export function SocialContextLandingUrlFromJSON(json: any): SocialContextLandingUrl {
    return SocialContextLandingUrlFromJSONTyped(json, false);
}

export function SocialContextLandingUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): SocialContextLandingUrl {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'] == null ? undefined : json['url'],
        'urlType': json['urlType'] == null ? undefined : json['urlType'],
        'urtEndpointOptions': json['urtEndpointOptions'] == null ? undefined : UrtEndpointOptionsFromJSON(json['urtEndpointOptions']),
    };
}

export function SocialContextLandingUrlToJSON(json: any): SocialContextLandingUrl {
    return SocialContextLandingUrlToJSONTyped(json, false);
}

export function SocialContextLandingUrlToJSONTyped(value?: SocialContextLandingUrl | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
        'urlType': value['urlType'],
        'urtEndpointOptions': UrtEndpointOptionsToJSON(value['urtEndpointOptions']),
    };
}

