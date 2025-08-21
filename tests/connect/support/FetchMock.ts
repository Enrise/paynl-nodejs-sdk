type MockResponseOptions = {
    url?: string,
    status?: number,
    statusText?: string,
    headers?: Headers;
    body?: object;
}

export class FetchMock {
    static mockResponse(options: MockResponseOptions): void {
        const body = options.body ? JSON.stringify(options.body) : null;

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ...options,
                json: () => Promise.resolve(body),
            } as Response),
        );
    }
}
