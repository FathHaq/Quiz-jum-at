function faktorial(input) {
  for (var i = input - 1; i >= 1; i--) {
    input *= i;
  }
  return input;
}
console.log(faktorial(4));