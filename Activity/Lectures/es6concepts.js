/* function sum(a, b) {
  return a + b;
} */
/**Arrow Function */
/* let sum = (a, b) => {
  return a + b;
}; */
/**Single argument  */
let single_arg = (a) => {
  console.log(a);
};
/** single return statement */
/* let sum = (a, b) => a + b;
 */ /**
 *
 */
let sum = (a, b) => {
  return { a, b };
};
/**rest Operator ... */
let sum_ind = (...args) => {
  console.log(args);
};
sum_ind(1, 2, 3, 4, 5);
/**spread Operator ... */
arr2 = arr;
let arr = [1, 2, 3];
let arr2 = [...arr];
arr2[0] = 50;
console.log(arr[0]);
