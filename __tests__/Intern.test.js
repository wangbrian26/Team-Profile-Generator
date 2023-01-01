const Intern = require("../lib/intern.js");

describe("Intern", () => {
  it("should create new intern", () => {
    const newIntern = new Intern();
    expect(typeof newIntern).toBe("object");
  });
  it("should have name", () => {
    const name = "Aiden";
    const newIntern = new Intern(name);
    expect(newIntern.name).toBe(name);
  });
  it("should have id", () => {
    const id = 1;
    const newIntern = new Intern("Aiden", 1);
    expect(newIntern.id).toBe(id);
  });
  it("should have email", () => {
    const email = "aiden@gmail.com";
    const newIntern = new Intern("Aiden", 1, "aiden@gmail.com");
    expect(newIntern.email).toBe(email);
  });
  it("should have school", () => {
    const school = "UCSB";
    const newIntern = new Intern("Aiden", 1, "aiden@gmail.com", "UCSB");
    expect(newIntern.school).toBe(school);
  });
  it("should be able to get name", () => {
    const newIntern = new Intern("Aiden", 1, "aiden@gmail.com", "UCSB");
    expect(newIntern.getName()).toBe(newIntern.name);
  });
  it("should be able to get id", () => {
    const newIntern = new Intern("Aiden", 1, "aiden@gmail.com", "UCSB");
    expect(newIntern.getId()).toBe(newIntern.id);
  });
  it("should be able to get email", () => {
    const newIntern = new Intern("Aiden", 1, "aiden@gmail.com", "UCSB");
    expect(newIntern.getEmail()).toBe(newIntern.email);
  });
  it("should be able to get school", () => {
    const newIntern = new Intern("Aiden", 1, "aiden@gmail.com", "UCSB");
    expect(newIntern.getSchool()).toBe(newIntern.school);
  });
  it("should have role", () => {
    const role = "Intern";
    const newIntern = new Intern("Aiden");
    expect(newIntern.getRole()).toBe(role);
  });
});
