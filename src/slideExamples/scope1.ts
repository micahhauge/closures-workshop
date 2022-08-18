// Function scope
function printName() {
  const name = 'micah';
  console.log(name); // ✅ logs "micah"
}

printName();
console.log(name); // 💥 ReferenceError: name is not defined




