## Example 2: Turning Up the Heat 🔥

Understanding that you can reference variables in the outer scope from an inner scope is pretty simple to grasp. Let's heat this up a little, how would you solve this problem:

Create a function called `once` that takes a function and that function can only be invoked one time, if you call it more than once it doesn't do anything.

Here's what that means:

```ts
const sayHello = once(() => console.log('hello'));

sayHello(); // hello
sayHello(); // Already called
sayHello(); // Already called
```

Maybe you're thinking _"Well I could create a function that stores a count and any time I call it, I'd increment the count. It would print hello if the count is zero and log an error if it's >= 1"_.

Will that work without closure? No. But why? 

Because the count will get reset every time you call the method... so you have to use closure.

Start with this:

```ts
type VoidFn = () => void;

function once(func: VoidFn): VoidFn {

}
```

Start easy and setup a closure that always calls `func`:

```ts
type VoidFn = () => void;

function once(func: VoidFn): VoidFn {
  function inner() {
    func();
  }

  return inner;
}
```

Now instead of a count, use a boolean in the outer scope (you'll see why in a second):

```ts
type VoidFn = () => void;

function once(func: VoidFn): VoidFn {
  let alreadyCalled = false;

  function inner() {
    func();
  }

  return inner;
}
```

Time for the closure magic: an instance of `once` is, rightfully so, only declared once and assigned to a variable (see the wishful coding example above if you forgot) but it returns a function that will invoke `func`. That returned method is where we can add the logic for making sure that `func` is only called once.

```ts
type VoidFn = () => void;

function once(func: VoidFn): VoidFn {
  let alreadyCalled = false;

  function inner() {
    if (alreadyCalled) {
      console.log('Already called');
      return;
    }

    alreadyCalled = true;
    func();
  }

  return inner;
}
```

Run it with

```bash
yarn example-2
```

and see that the example works!

```ts
const sayHello = once(() => console.log('hello'));

sayHello(); // hello
sayHello(); // Already called
sayHello(); // Already called
```