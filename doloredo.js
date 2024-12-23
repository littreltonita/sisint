function validateInput(input) {
  // Use a regular expression to check if the input contains only numeric characters
  const numericRegex = /^[0-9]+$/;
  return numericRegex.test(input);
}

// Example usage
console.log(validateInput("123")); // true
console.log(validateInput("abc")); // false
