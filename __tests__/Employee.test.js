const Employee = require("../lib/employee.js");

describe("Employee", () => {
  it("should create new employee", () => {
    const newEmployee = new Employee();
    expect(typeof newEmployee).toBe("object");
  });
  it("should have name", () => {
    const name = "Aiden";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
  });
  it("should have id", () => {
    const id = 1;
    const newEmployee = new Employee("Aiden", 1);
    expect(newEmployee.id).toBe(id);
  });
  it("should have email", () => {
    const email = "aiden@gmail.com";
    const newEmployee = new Employee("Aiden", 1, "aiden@gmail.com");
    expect(newEmployee.email).toBe(email);
  });
  it("should be able to get name", () => {
    const newEmployee = new Employee("Aiden", 1, "aiden@gmail.com");
    expect(newEmployee.getName()).toBe(newEmployee.name);
  });
  it("should be able to get id", () => {
    const newEmployee = new Employee("Aiden", 1, "aiden@gmail.com");
    expect(newEmployee.getId()).toBe(newEmployee.id);
  });
  it("should be able to get email", () => {
    const newEmployee = new Employee("Aiden", 1, "aiden@gmail.com");
    expect(newEmployee.getEmail()).toBe(newEmployee.email);
  });
  it("should be able to get role", () => {
    const role = "Employee";
    const newEmployee = new Employee("Aiden");
    expect(newEmployee.getRole()).toBe(role);
  });
});
