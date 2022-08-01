function once(func: () => void): () => void {
  let alreadyCalled = false;

  return () => {
    if (alreadyCalled) {
      console.log('Already called');
      return;
    }

    func();
    alreadyCalled = true;
  };
}

const sayHello = () => console.log('hello');
const sayHelloOnce = once(sayHello);

sayHelloOnce(); // 'hello'
sayHelloOnce(); // ERROR: Already called.
sayHelloOnce(); // ERROR: Already called.
sayHelloOnce(); // ERROR: Already called.
sayHelloOnce(); // ERROR: Already called.
