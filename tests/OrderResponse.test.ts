import {OrderResponse} from "../src/connect/order/orderResponse";
import {ApiResponse} from "../src/connect/ApiResponse";

describe('OrderResponse', () => {
    it.todo('should return the order');

    it.todo('should throw an error if there is no order');

    it('should have the API response', () => {
        const apiResponse = new ApiResponse(new Response(':response:'));

        const subject = new OrderResponse(apiResponse);

        expect(subject.api()).toEqual(apiResponse);
    });

    it('should throw an error on nok status code', () => {
        const apiResponse = new ApiResponse(new Response(null, {status: 500}));

        const subject = new OrderResponse(apiResponse);

        expect(() => subject.order()).toThrow();
    });
});
