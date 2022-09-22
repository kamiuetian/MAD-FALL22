let obj_1 = {
  name: "kamran",
  class_std: "BSE",
  display: function () {
    console.log(name, class_std);
  },
};
delete obj_1.name;
console.log(obj_1);
obj_1["name"];
/**Alternate */
let obj_2 = new Object();
obj_2.name = "ali";

let Student = function (name, class_std) {
  this.name = name;
  this.class_std = class_std;
};
let std1 = new Student("ALi", "BCS");
let std2 = new Student("Atif", "BSE");
//console.log(std2.name);
