const Employee = require("./employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    console.log(`${this.school}`);
    return this.school;
  }

  getRole() {
    console.log("Intern");
    return "Intern";
  }
}

module.exports = Intern;
