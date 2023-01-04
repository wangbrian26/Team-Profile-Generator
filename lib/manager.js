const Employee = require("./employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    console.log("Manager");
    return "Manager";
  }
}

module.exports = Manager;
