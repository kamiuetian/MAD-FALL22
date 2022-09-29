/**Classes in Javascript */
class Student {
  static uniName = "COMSATS";
  constructor(givenname, givenRegNo) {
    this._name = givenname;
    this.regNo = givenRegNo;
  }
  display() {
    console.log(`${this.name},${this.regNo}`);
  }
  static calculateworkinghour() {
    console.log("8 to 4");
  }
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }
}
let S1 = new Student("ALi", 030);
let S2 = new Student("Asim", 035);
S1.display();
S1.name = "KAmran";
console.log(S1.name);
Student.calculateworkinghour();
Student.uniName;
class MGT_Student extends Student {
  constructor(name, regno, intern) {
    super(name, regno);
    this.Internship = intern;
  }
}
class CS_Student extends Student {
  constructor(name, regno, fyp) {
    super(name, regno);
    this.FYP = fyp;
  }
  /* display() {
    console.log(`${this.FYP}`);
  } */
}
let cs_s1 = new CS_Student("kamran", 01, "RN APP");
cs_s1.display();
