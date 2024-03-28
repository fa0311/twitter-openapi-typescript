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
 * @interface OneFactorLoginEligibility
 */
export interface OneFactorLoginEligibility {
    /**
     * 
     * @type {string}
     * @memberof OneFactorLoginEligibility
     */
    fetchStatus: string;
}

/**
 * Check if a given object implements the OneFactorLoginEligibility interface.
 */
export function instanceOfOneFactorLoginEligibility(value: object): boolean {
    if (!('fetchStatus' in value)) return false;
    return true;
}

export function OneFactorLoginEligibilityFromJSON(json: any): OneFactorLoginEligibility {
    return OneFactorLoginEligibilityFromJSONTyped(json, false);
}

export function OneFactorLoginEligibilityFromJSONTyped(json: any, ignoreDiscriminator: boolean): OneFactorLoginEligibility {
    if (json == null) {
        return json;
    }
    return {
        
        'fetchStatus': json['fetchStatus'],
    };
}

export function OneFactorLoginEligibilityToJSON(value?: OneFactorLoginEligibility | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'fetchStatus': value['fetchStatus'],
    };
}

