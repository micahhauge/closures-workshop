let myName = 'Micah';

function createSayName() {
  const nameToSay = myName;

  function sayName() {
    console.log(nameToSay);
  }

  return sayName;
}

const sayName = createSayName();
sayName();
// myName.name = 'test';
sayName();
