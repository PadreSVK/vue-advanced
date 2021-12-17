/* tslint:disable */
/* eslint-disable */
/**
 * RestApi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    EmployeeData,
    EmployeeDataFromJSON,
    EmployeeDataToJSON,
} from '../models';

export interface ApiEmployeeDataGetRequest {
    aFrom?: string;
    aTo?: string;
}

/**
 * 
 */
export class EmployeeDataApi extends runtime.BaseAPI {

    /**
     */
    async apiEmployeeDataGetRaw(requestParameters: ApiEmployeeDataGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<EmployeeData>>> {
        const queryParameters: any = {};

        if (requestParameters.aFrom !== undefined) {
            queryParameters['aFrom'] = requestParameters.aFrom;
        }

        if (requestParameters.aTo !== undefined) {
            queryParameters['aTo'] = requestParameters.aTo;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/EmployeeData`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(EmployeeDataFromJSON));
    }

    /**
     */
    async apiEmployeeDataGet(requestParameters: ApiEmployeeDataGetRequest, initOverrides?: RequestInit): Promise<Array<EmployeeData>> {
        const response = await this.apiEmployeeDataGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
