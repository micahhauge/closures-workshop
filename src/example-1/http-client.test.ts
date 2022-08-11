import { createHttpClient } from './http-client';

const jwt = 'header.payload.signature';
const url = 'https://www.who-uses-vim.com';

describe('createHttpClient', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('logs on a GET request', () => {
    const client = createHttpClient(jwt);

    client.get(url);

    expect(console.log).toHaveBeenCalledWith(
      'HTTP GET Request: URL: https://www.who-uses-vim.com, JWT: header.payload.signature'
    );
  });

  xit('logs on a POST request', () => {
    const client = createHttpClient(jwt);

    client.post(url, 'fake-body');

    expect(console.log).toHaveBeenCalledWith(
      'HTTP POST Request: URL: https://www.who-uses-vim.com, JWT: header.payload.signature, Body: fake-body'
    );
  });

  xit('logs on a PUT request', () => {
    const client = createHttpClient(jwt);

    client.put(url, 'fake-body');

    expect(console.log).toHaveBeenCalledWith(
      'HTTP PUT Request: URL: https://www.who-uses-vim.com, JWT: header.payload.signature, Body: fake-body'
    );
  });
});
