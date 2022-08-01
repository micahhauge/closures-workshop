import { calculateFactorial } from './util/calculateFactorial';

function memo(func: (n: number) => number) {
  const previousCalls: Record<number, number> = {};

  function memoizedFunction(n: number) {
    if (previousCalls[n] !== undefined) {
      console.log(`Returning cached value for fun(${n})`);
      return previousCalls[n];
    }

    console.log(`Calling expensive function with param ${n}`);
    const result = func(n);
    previousCalls[n] = result;
    return result;
  }

  return memoizedFunction;
}

const memoizedFactorial = memo(calculateFactorial);

console.log(memoizedFactorial(10));
console.log(memoizedFactorial(10));
console.log(memoizedFactorial(13));
console.log(memoizedFactorial(10));
console.log(memoizedFactorial(10));
console.log(memoizedFactorial(13));
console.log(memoizedFactorial(10));
