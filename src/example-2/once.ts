type Void = () => void;

function once(func: Void): Void {
  let alreadyCalled = false;

  return () => {
    if (alreadyCalled) {
      console.log('Already called');
      return;
    }

    alreadyCalled = true;
    return func();
  };
}

const sayHello = once(() => console.log('hello'));

sayHello(); // 'hello'
sayHello(); // Already called.
sayHello(); // Already called.
