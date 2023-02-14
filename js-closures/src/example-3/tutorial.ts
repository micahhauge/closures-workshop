import { expensiveFunction } from '../util/expensive-function';

function memo(func: (n: number) => number) {

}

const memoizedExpensiveFunction = memo(expensiveFunction);

memoizedExpensiveFunction(10); // Calling expensive function func(10)
memoizedExpensiveFunction(10); // Returning cached value for func(10)
memoizedExpensiveFunction(13); // Calling expensive function func(13)
memoizedExpensiveFunction(13); // Returning cached value for func(13)
