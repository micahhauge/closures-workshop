export function createHttpClient(jwt: string) {
  function get(url: string) {
    console.log(`HTTP GET Request: URL: ${url}, JWT: ${jwt}`);
  }

  function post(url: string, body: string) {
    console.log(`HTTP POST Request: URL: ${url}, JWT: ${jwt}, Body: ${body}`);
  }

  function put(url: string, body: string) {
    console.log(`HTTP PUT Request: URL: ${url}, JWT: ${jwt}, Body: ${body}`);
  }

  return { get, post, put };
}
