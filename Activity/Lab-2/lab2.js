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
