// Block Scope
if (1 === 1) {
  const name = 'micah';
  console.log(name); // ✅ logs "micah"
}

console.log(name); // 💥 ReferenceError: name is not defined



