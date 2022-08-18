function outerFunction() {
  const outerValue = 'I am outside';

  function innerFunction() {
    console.log(outerValue); // ✅ logs "I am outside"
  }

  innerFunction();
}

outerFunction();
