// Run this file with "yarn counter"

function createCounter(initialCount: number) {
  let count = initialCount;

  function increment() {
    count++;
    console.log(`Counter is now ${count}`);
  }

  function decrement() {
    count--;
    console.log(`Counter is now ${count}`);
  }

  function getValue() {
    return count;
  }

  return {
    increment,
    decrement,
    getValue,
  };
}

const ageCounter = createCounter(30);
const numberOfKidsCounter = createCounter(0);

ageCounter.increment();
numberOfKidsCounter.increment();
ageCounter.increment();
ageCounter.increment();
numberOfKidsCounter.increment();
ageCounter.increment();
numberOfKidsCounter.decrement();
