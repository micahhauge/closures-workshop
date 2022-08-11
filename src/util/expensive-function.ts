export function expensiveFunction(n: number) {
  let value = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n; l++) {
          value += i + j + k + l;
        }
      }
    }
  }

  return value;
}
