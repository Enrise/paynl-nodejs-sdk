import {ApiResponse} from "./ApiResponse";

export class ApiError extends Error {
    constructor(apiResponse: ApiResponse) {
        super(apiResponse.http().statusText);
    }
}
