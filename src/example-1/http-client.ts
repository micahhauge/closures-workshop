/**
 * Problem:
 * Write the implementation for createHttpClient that memoizes a JWT.
 * The client can make GET, POST, and PUT calls.
 * 
 * Each request will accept a url as the first parameter and the POST
 * and PUT requests will take a second parameter called body that will
 * be a string.
 * 
 * Here's some example code:
 * 
 * const myHttpClient = createHttpClient('header.payload.signature');

 * myHttpClient.get('https://www.who-uses-vim.com');
 * myHttpClient.post('https://www.who-uses-vim.com', 'Micah');
 * myHttpClient.put('https://www.who-uses-vim.com', 'Micah');
 */

type HttpClient = {
  get: (url: string) => void;
  post: (url: string, body: string) => void;
  put: (url: string, body: string) => void;
};

export function createHttpClient(jwt: string): HttpClient {

}
