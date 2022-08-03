function calculateFactorial(num: number): number {
  if (num === 0) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}

export { calculateFactorial };
