const Manager = require("../lib/manager.js");

describe("Manager", () => {
  it("should create new manager", () => {
    const newManager = new Manager();
    expect(typeof newManager).toBe("object");
  });
  it("should have name", () => {
    const name = "Aiden";
    const newManager = new Manager(name);
    expect(newManager.name).toBe(name);
  });
  it("should have id", () => {
    const id = 1;
    const newManager = new Manager("Aiden", 1);
    expect(newManager.id).toBe(id);
  });
  it("should have email", () => {
    const email = "aiden@gmail.com";
    const newManager = new Manager("Aiden", 1, "aiden@gmail.com");
    expect(newManager.email).toBe(email);
  });
  it("should have office number", () => {
    const officeNum = 2;
    const newManager = new Manager("Aiden", 1, "aiden@gmail.com", 2);
    expect(newManager.officeNumber).toBe(officeNum);
  });
  it("should be able to get name", () => {
    const newManager = new Manager("Aiden", 1, "aiden@gmail.com", 2);
    expect(newManager.getName()).toBe(newManager.name);
  });
  it("should be able to get id", () => {
    const newManager = new Manager("Aiden", 1, "aiden@gmail.com", 2);
    expect(newManager.getId()).toBe(newManager.id);
  });
  it("should be able to get email", () => {
    const newManager = new Manager("Aiden", 1, "aiden@gmail.com", 2);
    expect(newManager.getEmail()).toBe(newManager.email);
  });
  it("should get office number", () => {
    const newManager = new Manager("Aiden", 1, "aiden@gmail.com", 2);
    const office = 2;
    expect(newManager.getOffice()).toBe(office);
  });
  it("should have role", () => {
    const role = "Manager";
    const newManager = new Manager("Aiden");
    expect(newManager.getRole()).toBe(role);
  });
});
