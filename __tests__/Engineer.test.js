const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
  it("should create new engineer", () => {
    const newEngineer = new Engineer();
    expect(typeof newEngineer).toBe("object");
  });
  it("should have name", () => {
    const name = "Aiden";
    const newEngineer = new Engineer(name);
    expect(newEngineer.name).toBe(name);
  });
  it("should have id", () => {
    const id = 1;
    const newEngineer = new Engineer("Aiden", 1);
    expect(newEngineer.id).toBe(id);
  });
  it("should have email", () => {
    const email = "aiden@gmail.com";
    const newEngineer = new Engineer("Aiden", 1, "aiden@gmail.com");
    expect(newEngineer.email).toBe(email);
  });
  it("should have gitHub", () => {
    const gitHub = "github.com/aiden";
    const newEngineer = new Engineer(
      "Aiden",
      1,
      "aiden@gmail.com",
      "github.com/aiden"
    );
    expect(newEngineer.github).toBe(gitHub);
  });
  it("should be able to get name", () => {
    const newEngineer = new Engineer(
      "Aiden",
      1,
      "aiden@gmail.com",
      "github.com/aiden"
    );
    expect(newEngineer.getName()).toBe(newEngineer.name);
  });
  it("should be able to get id", () => {
    const newEngineer = new Engineer(
      "Aiden",
      1,
      "aiden@gmail.com",
      "github.com/aiden"
    );
    expect(newEngineer.getId()).toBe(newEngineer.id);
  });
  it("should be able to get email", () => {
    const newEngineer = new Engineer(
      "Aiden",
      1,
      "aiden@gmail.com",
      "github.com/aiden"
    );
    expect(newEngineer.getEmail()).toBe(newEngineer.email);
  });
  it("should be able to get gitHub", () => {
    const newEngineer = new Engineer(
      "Aiden",
      1,
      "aiden@gmail.com",
      "github.com/aiden"
    );
    expect(newEngineer.getGithub()).toBe(newEngineer.github);
  });
  it("should have role", () => {
    const role = "Engineer";
    const newEngineer = new Engineer("Aiden");
    expect(newEngineer.getRole()).toBe(role);
  });
});
