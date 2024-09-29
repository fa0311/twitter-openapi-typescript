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
import type { HomeTimelineHome } from './HomeTimelineHome';
import {
    HomeTimelineHomeFromJSON,
    HomeTimelineHomeFromJSONTyped,
    HomeTimelineHomeToJSON,
} from './HomeTimelineHome';

/**
 * 
 * @export
 * @interface HomeTimelineResponseData
 */
export interface HomeTimelineResponseData {
    /**
     * 
     * @type {HomeTimelineHome}
     * @memberof HomeTimelineResponseData
     */
    home: HomeTimelineHome;
}

/**
 * Check if a given object implements the HomeTimelineResponseData interface.
 */
export function instanceOfHomeTimelineResponseData(value: object): value is HomeTimelineResponseData {
    if (!('home' in value) || value['home'] === undefined) return false;
    return true;
}

export function HomeTimelineResponseDataFromJSON(json: any): HomeTimelineResponseData {
    return HomeTimelineResponseDataFromJSONTyped(json, false);
}

export function HomeTimelineResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): HomeTimelineResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'home': HomeTimelineHomeFromJSON(json['home']),
    };
}

export function HomeTimelineResponseDataToJSON(value?: HomeTimelineResponseData | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'home': HomeTimelineHomeToJSON(value['home']),
    };
}

