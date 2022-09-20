/**Objects */
const obj_1 = {
  name: "kamran",
  age: 30,
  display: function () {
    console.log(name, age);
  },
};
/** */
const obj_2 = new Object();
obj_2.name = "ALi";
obj_2.age = "26";
obj_2.age = 20;
delete obj_2.age;
console.log(obj_2);
/**Object constructor */
function Student(name, reg) {
  this.name = name;
  this.reg = reg;
  display = function () {
    console.log(this.name, this.reg);
  };
}
/**Object creation */
let std1 = new Student("ali", 01);
let std2 = new Student("Asim", 10);
//console.log(std1.name);

/**
 *
 * Arrow Functions
 */
/**Arrow */
/***function hello(){
 * } */
const hello = () => {
  console.log("Hello World");
};
hello();
/**Arrow with single arg */
/* const hello_single = (name) => {
  console.log("Hello World from ", name);
};
hello_single("Kamran"); */

/**Arrow with returna nd args */
/* const sum = (a, b) => a + b;
console.log(sum(10, 20)); */
/**REturn object from arrow
 * Expected Output: {a:a}
 * Actual Output:
 */

/* const obj_return = (a) => {
  return { a };
};
console.log(obj_return(2)); */
/**REst Operator */
const sum_ind = (...args) => {
  args.reduce((prev, curr) => prev + curr);
};
sum_ind(2, 4, 4, 5, 5, 5, 5);
/** Spread Operator */
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
arr2[0] = "modified";
console.log(arr1[0]);
