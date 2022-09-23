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
/* let sum_ind = (...args) => {
  console.log(args);
};
sum_ind(1, 2, 3, 4, 5); */
/**spread Operator ... */
/* arr2 = arr;
let arr = [1, 2, 3];
let arr2 = [...arr];
arr2[0] = 50;
console.log(arr[0]); */
let assign_ex = () => {
  return [1, 2, 3];
};

/* let [a, b, c] = assign_ex(); */
//let arr_a = [1, , 3];
//console.log(arr_a.length);
//console.log(arr_a[1]);
/* result="a="+a+""
console.log(`a=${a},b=${b},c=${c}`); */
/* let scores = [90, 60, 80];
for (let score of scores.e) {
  console.log(score);
} */
class Student {
  constructor(name, classStd) {
    this._name = name;
    this.classStd = classStd;
  }
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }
  display() {
    console.log(this._name, this.classStd);
  }
}
let std1 = new Student("Kamran", "BCS");
console.log(std1.name);

let example=`hello
i am `
