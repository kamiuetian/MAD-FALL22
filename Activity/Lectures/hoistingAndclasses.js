/**Static methods */

class Employee {
  static company = "COMSATS";
  constructor(name, salary) {
    this._name = name;
    this._salary = salary;
  }
  get name() {
    return this._name;
  }
  set name(givenname) {
    this._name = givenname;
  }
  display() {
    return `${this._name} has salary ${this._salary} `;
  }
  static dutyHour() {
    return `duty hours from 8 to 4`;
  }
}

class Teacher extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this._department = department;
  }
  /* display() {
    //return `${this._name} has department ${this._department} `;
  } */
}
let E1 = new Employee("Ali", 20, 000);
/* console.log(E1.dislay());
console.log(Employee.dutyHour());
console.log(Employee.company); */
let T1 = new Teacher("ALi", 20000, "CS");
//console.log(T1.display());

/**Hoisting */
console.log(`before declaration: ${a}`);

let a;
console.log(`after declaration: ${a}`);
a = 30;
console.log(`after initialization: ${a}`);
