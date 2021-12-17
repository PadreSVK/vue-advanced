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
    AuthResult,
    AuthResultFromJSON,
    AuthResultToJSON,
    RegistrationResponse,
    RegistrationResponseFromJSON,
    RegistrationResponseToJSON,
    UserLogin,
    UserLoginFromJSON,
    UserLoginToJSON,
    UserRegistration,
    UserRegistrationFromJSON,
    UserRegistrationToJSON,
} from '../models';

export interface LoginRequest {
    userLogin?: UserLogin;
}

export interface RegisterRequest {
    userRegistration?: UserRegistration;
}

/**
 * 
 */
export class AuthManagementApi extends runtime.BaseAPI {

    /**
     */
    async loginRaw(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<AuthResult>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/AuthManagement/Login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserLoginToJSON(requestParameters.userLogin),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthResultFromJSON(jsonValue));
    }

    /**
     */
    async login(requestParameters: LoginRequest, initOverrides?: RequestInit): Promise<AuthResult> {
        const response = await this.loginRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async registerRaw(requestParameters: RegisterRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RegistrationResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/AuthManagement/Register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserRegistrationToJSON(requestParameters.userRegistration),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationResponseFromJSON(jsonValue));
    }

    /**
     */
    async register(requestParameters: RegisterRequest, initOverrides?: RequestInit): Promise<RegistrationResponse> {
        const response = await this.registerRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
