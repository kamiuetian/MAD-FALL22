/**
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 *
 * let
 * var
 * const
 */
let var_name;
var_name = 4;
var_name = "Helllo world";
var_name = [1, 2, 3];
var_name = { a: 1, b: 2 };
var_name = true;
const const_name = 50;
//const_name = 30;
/** Rules for variale names */
/*
DAta Types */
//console.log(typeof var_name);
let obj_a = { a: 1, b: 2 };
let obj_b = obj_a;
obj_b["a"] = 20;
//console.log("b" + obj_b["a"]);
//console.log("a" + obj_a["a"]);
/*Operators */
let a = 5;
let b = "5";
//console.log(a - b);
/**comparison */
console.log(a === b);
/*functions */
let func_name = function (a, b) {
  return a + b;
};
console.log(func_name);
/**function as argument */
let outer_func = function () {
  console.log("i am outer function");
  function abc() {
    console.log("i am innser abc function");
  }
  return abc;
};
let inner_func = function () {
  console.log("i am inner function");
};
let ret_func = outer_func(inner_func);
ret_func();
/**array */
let arr_a = [
  1,
  "a",
  true,
  [5, 6, 7],
  { a: 1 },
  function () {
    console.log("function");
  },
];
console.log(arr_a[5]());
