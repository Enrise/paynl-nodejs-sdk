import { OrderApi } from '../../../src/connect/order/OrderApi';
import { ApiClient } from '../../../src';
import { FetchMock } from '../support/FetchMock';
import { mockClientOptions } from '../support/mockClientOptions';

const testOrderId = '00000000-1111-2222-3333-000000000000';

describe('OrderApi', () => {
    it('can send order:create', async () => {
        const clientMock = new ApiClient(mockClientOptions);

        FetchMock.mockResponse({
            status: 200,
            body: {
                id: '68ac5742-4223-812b-1225-4060087323de',
            },
        });

        const subject = new OrderApi(clientMock);

        const response = await subject.create({
            amount: {
                value: 1000,
                currency: 'EUR',
            },
        });

        expect(response.id).toBe('68ac5742-4223-812b-1225-4060087323de');
    });

    it('can get the order status', async () => {
        const clientMock = new ApiClient(mockClientOptions);

        FetchMock.mockResponse({
            status: 200,
            body: {
                id: testOrderId,
                status: {
                    code: 100,
                    action: 'PAID',
                },
            },
        });

        const subject = new OrderApi(clientMock);

        const response = await subject.status(testOrderId);

        expect(response.code).toBe(100);
        expect(response.action).toBe('PAID');
    });
});
