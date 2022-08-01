function makeAdder(numberToAdd: number) {
  function add(y: number) {
    return numberToAdd + y;
  }

  return add;
}

const add5 = makeAdder(5);

// const add10 = makeAdder(10);

// console.log(add5(2)); // 7
// console.log(add10(2)); // 12
