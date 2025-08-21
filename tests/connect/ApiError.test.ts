import {ApiError} from "../../src/connect/ApiError";
import {ApiResponse} from "../../src/connect/ApiResponse";

describe('ApiError', () => {
    it('should stringify message', () => {
        const subject = new ApiError(new ApiResponse(new Response(null, {statusText: ':statusText:'})));

        expect(subject.toString()).toEqual('Error: :statusText:');
    });
});
