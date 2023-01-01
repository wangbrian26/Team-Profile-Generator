const Emloyee = require("./employee.js");

class Manager extends Emloyee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    console.log("Manager");
    return "Manager";
  }
}

module.exports = Manager;
