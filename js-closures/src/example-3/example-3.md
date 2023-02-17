## Example 3: Memoization with Closure

Memoization is an optimization technique that caches the result of an expensive calculation so that if that method is called again with the same params, it will return the cached value instead of recalculating.

In this last example, we're going to be working with an expensive function called `expensiveFunction`. You worry about what's happening in there, just know that it takes a while to compute. So, we want to limit the number of times we call it by adding a caching layer between it and the caller. Let's call that method `memo`.

Here's our wishful coding:

```ts
import { expensiveFunction } from '../util/expensive-function';

function memo(func: (n: number) => number) {
  // TODO
}

const memoizedExpensiveFunction = memo(expensiveFunction);

memoizedExpensiveFunction(10); // Calling expensive function func(10)
memoizedExpensiveFunction(10); // Returning cached value for func(10)
memoizedExpensiveFunction(13); // Calling expensive function func(13)
memoizedExpensiveFunction(13); // Returning cached value for func(13)
```

The easiest thing to do is to return a function that calls `func` regardless:

```ts
function memo(func: (n: number) => number) {
  function memoizedFunction(n: number) {
    return func(n);
  }

  return memoizedFunction;
}
```

Next, build the caching layer in the outer scope so that it can be reused between calls. The cache will be an object where each key is the param to the expensive function and the value is the result:

```ts
function memo(func: (n: number) => number) {
  const cache: Record<number, number> = {};

  function memoizedFunction(n: number) {
    return func(n);
  }

  return memoizedFunction;
}
```

Next, save the param and result of `func(n)` to the cache so it can be reused later:

```ts
function memo(func: (n: number) => number) {
  const cache: Record<number, number> = {};

  function memoizedFunction(n: number) {
    const result = func(n);
    cache[n] = result;

    return result;
  }

  return memoizedFunction;
}
```

Now here's the magic again. We want to check if `n` is in the cache and if so, then we'll return it. That way we don't have to recompute it again.

```ts
function memo(func: (n: number) => number) {
  const cache: Record<number, number> = {};

  function memoizedFunction(n: number) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    const result = func(n);
    cache[n] = result;

    return result;
  }

  return memoizedFunction;
}
```

Lastly, let's add some logs so we can see what's going on:

```ts
function memo(func: (n: number) => number) {
  const cache: Record<number, number> = {};

  function memoizedFunction(n: number) {
    if (cache[n] !== undefined) {
      console.log(`Returning cached value for func(${n})`);
      return cache[n];
    }

    console.log(`Calling expensive function func(${n})`);
    const result = func(n);
    cache[n] = result;

    return result;
  }

  return memoizedFunction;
}
```

To DRY some things up, our final code will look like this:

```ts
function memo(func: (n: number) => number) {
  const cache: Record<number, number> = {};

  function memoizedFunction(n: number) {
    if (cache[n] !== undefined) {
      console.log(`Returning cached value for func(${n})`);
    } else {
      console.log(`Calling expensive function func(${n})`);
      cache[n] = func(n);
    }

    return cache[n];
  }

  return memoizedFunction;
}
```

Run the wishful code from the beginning

```bash
yarn example-3
```

and you should get this

```ts
const memoizedExpensiveFunction = memo(expensiveFunction);

memoizedExpensiveFunction(10); // Calling expensive function func(10)
memoizedExpensiveFunction(10); // Returning cached value for func(10)
memoizedExpensiveFunction(13); // Calling expensive function func(13)
memoizedExpensiveFunction(13); // Returning cached value for func(13)
```