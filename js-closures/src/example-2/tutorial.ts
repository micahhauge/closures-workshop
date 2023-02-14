type Void = () => void;

function once(func: Void): Void {

}

const sayHello = once(() => console.log('hello'));

sayHello(); // 'hello'
sayHello(); // Already called.
sayHello(); // Already called.
