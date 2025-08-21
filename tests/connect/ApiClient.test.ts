import {ApiClient} from "../../src/connect";
import {ApiRequest} from "../../src/connect/ApiRequest";
import {FetchMock} from "./support/FetchMock";
import {mockClientOptions} from "./support/mockClientOptions";

describe('Client', () => {
    it('should be able to do a request', async () => {
        const client = new ApiClient(mockClientOptions);

        const testRequest = new ApiRequest('orders', client.getOptions());

        FetchMock.mockResponse({status: 200, url: 'https://test.local/v1/orders'});

        const result = await client.request(testRequest);

        expect(result.http().url).toBe('https://test.local/v1/orders');
        expect(result.http().status).toBe(200);
    });
});
