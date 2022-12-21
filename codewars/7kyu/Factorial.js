// !5 это 1 * 2 * 3 * 4 * 5 = 120

const factorial = (n) => {
  return n === 0 ? 1 : n === 1 ? 1 : n * factorial(n - 1);
};
const result = factorial(5);
console.log(result);
