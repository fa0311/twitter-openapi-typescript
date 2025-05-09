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
import type { NotificationsTimelineData } from './NotificationsTimelineData';
import {
    NotificationsTimelineDataFromJSON,
    NotificationsTimelineDataFromJSONTyped,
    NotificationsTimelineDataToJSON,
    NotificationsTimelineDataToJSONTyped,
} from './NotificationsTimelineData';
import type { ErrorResponse } from './ErrorResponse';
import {
    ErrorResponseFromJSON,
    ErrorResponseFromJSONTyped,
    ErrorResponseToJSON,
    ErrorResponseToJSONTyped,
} from './ErrorResponse';

/**
 * 
 * @export
 * @interface NotificationsTimelineResponse
 */
export interface NotificationsTimelineResponse {
    /**
     * 
     * @type {NotificationsTimelineData}
     * @memberof NotificationsTimelineResponse
     */
    data: NotificationsTimelineData;
    /**
     * 
     * @type {Array<ErrorResponse>}
     * @memberof NotificationsTimelineResponse
     */
    errors?: Array<ErrorResponse>;
}

/**
 * Check if a given object implements the NotificationsTimelineResponse interface.
 */
export function instanceOfNotificationsTimelineResponse(value: object): value is NotificationsTimelineResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function NotificationsTimelineResponseFromJSON(json: any): NotificationsTimelineResponse {
    return NotificationsTimelineResponseFromJSONTyped(json, false);
}

export function NotificationsTimelineResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationsTimelineResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': NotificationsTimelineDataFromJSON(json['data']),
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(ErrorResponseFromJSON)),
    };
}

export function NotificationsTimelineResponseToJSON(json: any): NotificationsTimelineResponse {
    return NotificationsTimelineResponseToJSONTyped(json, false);
}

export function NotificationsTimelineResponseToJSONTyped(value?: NotificationsTimelineResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': NotificationsTimelineDataToJSON(value['data']),
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(ErrorResponseToJSON)),
    };
}

