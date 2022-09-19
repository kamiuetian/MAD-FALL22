/**Variables
 *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables
 */

/**Loosely defined vs strongly defined*/
let var_name; //declaration
//var_name = 20; //initialization
//var_name = "hello world";
//var_name=[1,2,3]
//var_name = { 1: 1, 2: "2" };
//var_name = function () {};
//var_name = true;
//console.log(var_name);
/**
 * Arrays
 */
let my_arr_num = [1, 2, 3];
let my_arr_str = ["1", "2", "3"];
//console.log(my_arr_num[1]);
/**
 * Objects
 */
let my_obj = { name: "ALi", age: 30 };
//console.log(my_obj["name"]);
/*Operators
 * */
let a = "10";
let b = "20";
let result = a - b;
//console.log(result);
/**Comparison */
let c = "10";
let d = 10;
console.log(c === d);
/**Primitive  */
let obj_a = { a: 1, b: 2 };
let obj_b = obj_a;
obj_b["a"] = 5;
//console.log("b= " + obj_b["a"]);
//console.log("a= " + obj_a["a"]);
/**Conditions
 *
 */
if (a == b) {
} else if (a > b) {
} else {
}

/**
 *
 * Functions
 */
/* let func_b = function (a, b) {
  return a + b;
};
let func_a = func_b; */
//console.log(func_a(5, 10));
/**
 *
 * Function as argument
 */
/* function inner_func(a, b) {
  return a / b;
}

function outer_func(a, b) {
  function divider(a, b) {
    return a / b;
  }
  if (b == 0) return "division by zero is no";
  else divider(a, b);

  return my_func;
}

let ret_func = outer_func(inner_func);
console.log(ret_func(10, 0)); */

let arr_a = [
  1,
  "abc",
  { a: 1 },
  function () {
    return "a function";
  },
  ["d", "e", "f"],
];
console.log(arr_a[4][1]);
arr_a.length;
