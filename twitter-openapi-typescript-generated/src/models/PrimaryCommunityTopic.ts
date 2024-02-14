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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PrimaryCommunityTopic
 */
export interface PrimaryCommunityTopic {
    /**
     * 
     * @type {string}
     * @memberof PrimaryCommunityTopic
     */
    topicId: string;
    /**
     * 
     * @type {string}
     * @memberof PrimaryCommunityTopic
     */
    topicName: string;
}

/**
 * Check if a given object implements the PrimaryCommunityTopic interface.
 */
export function instanceOfPrimaryCommunityTopic(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "topicId" in value;
    isInstance = isInstance && "topicName" in value;

    return isInstance;
}

export function PrimaryCommunityTopicFromJSON(json: any): PrimaryCommunityTopic {
    return PrimaryCommunityTopicFromJSONTyped(json, false);
}

export function PrimaryCommunityTopicFromJSONTyped(json: any, ignoreDiscriminator: boolean): PrimaryCommunityTopic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'topicId': json['topic_id'],
        'topicName': json['topic_name'],
    };
}

export function PrimaryCommunityTopicToJSON(value?: PrimaryCommunityTopic | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'topic_id': value.topicId,
        'topic_name': value.topicName,
    };
}

