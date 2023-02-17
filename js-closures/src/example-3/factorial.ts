/**
 * Problem:
 * Write the implementation for memoizedFactorial that returns a memoized version of factorial.
 * It can be invoked many times and it will cache previous calculations to avoid recalculating.
 *
 * Factorial Algorithm
 * 1! = 1
 * 2! = 2  = 1 * 2
 * 3! = 6  = 1 * 2 * 3
 * 4! = 24 = 1 * 2 * 3 * 4
 *
 * Example Code:
 * const f = memoizedFactorial();
 *
 * f(5); // Since the method hasn't been invoked before, there will be a cache miss for 5, 4, 3, 2, and 1
 *
 * f(10); // Cache miss for 10, 9, 8, 7, and 6 but a cache hit for 5
 */

export function memoizedFactorial(): (num: number) => number {

}

const f = memoizedFactorial();
f(5);
f(10);
