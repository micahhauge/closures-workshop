// Run this file with "yarn nestedScope"
function outer() {
  let count = 0;

  function increment() {
    count++;
  }

  return increment;
}

const createdIncrement = outer();
createdIncrement();
createdIncrement();
