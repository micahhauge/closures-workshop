export function memoizedFactorial(): (num: number) => number {
  const cache: Record<number, number> = {};

  function factorial(num: number): number {
    if (num === 0) {
      return 1;
    }
    if (cache[num] !== undefined) {
      console.log(`Cache hit: ${num}`);
    } else {
      console.log(`Cache miss: ${num}`);
      cache[num] = num * factorial(num - 1);
    }

    return cache[num];
  }

  return factorial;
}
