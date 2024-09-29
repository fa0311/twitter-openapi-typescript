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
 * @interface TopicContext
 */
export interface TopicContext {
    /**
     * 
     * @type {string}
     * @memberof TopicContext
     */
    description?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TopicContext
     */
    following?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TopicContext
     */
    iconUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof TopicContext
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TopicContext
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TopicContext
     */
    notInterested?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TopicContext
     */
    topicId?: string;
}

/**
 * Check if a given object implements the TopicContext interface.
 */
export function instanceOfTopicContext(value: object): value is TopicContext {
    return true;
}

export function TopicContextFromJSON(json: any): TopicContext {
    return TopicContextFromJSONTyped(json, false);
}

export function TopicContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): TopicContext {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'following': json['following'] == null ? undefined : json['following'],
        'iconUrl': json['icon_url'] == null ? undefined : json['icon_url'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'notInterested': json['not_interested'] == null ? undefined : json['not_interested'],
        'topicId': json['topic_id'] == null ? undefined : json['topic_id'],
    };
}

export function TopicContextToJSON(value?: TopicContext | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'following': value['following'],
        'icon_url': value['iconUrl'],
        'id': value['id'],
        'name': value['name'],
        'not_interested': value['notInterested'],
        'topic_id': value['topicId'],
    };
}

