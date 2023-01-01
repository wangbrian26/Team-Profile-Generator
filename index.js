const inquirer = require("inquirer");
const fs = require("fs");
const { Employee, Manager, Intern, Engineer } = require("./lib");

const { prompt } = inquirer;

let teamMembers = [];
let managerName = "";

function createManager() {
  managerName = "";
  teamMembers = [];
  prompt([
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the team manager's ID number?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the team manager's email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "managerOffice",
    },
  ]).then((answers) => {
    const newManager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerOffice
    );
    managerName = answers.managerName;
    teamMembers.push(newManager);
  });
}

function createEmployee() {
  prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "employeeName",
    },
    {
      type: "input",
      message: "What is the employee's ID number?",
      name: "employeeId",
    },
    {
      type: "input",
      message: "What is the employee's email address?",
      name: "employeeEmail",
    },
  ]).then((answers) => {
    const newEmployee = new Employee(
      answers.employeeName,
      answers.employeeId,
      answers.employeeEmail
    );
  });
}

function createEngineer(newEmployee) {
  prompt([
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "employeeGithub",
    },
  ]).then((answers) => {
    const newEngineer = new Engineer(newEmployee, answers.employeeGithub);
    teamMembers.push(newEngineer);
  });
}

function createIntern(newEmployee) {
  prompt([
    {
      type: "input",
      message: "Where did the intern attend school?",
      name: "employeeSchool",
    },
  ]).then((answers) => {
    const newIntern = new Intern(newEmployee, answers.employeeSchool);
    teamMembers.push(newEngineer);
  });
}

function buildTeam() {
  createManager();
  prompt([
    {
      type: "list",
      message:
        "Would you like to create a new engineer or intern? Or press done if you are done adding employees.",
      choices: ["intern", "engineer", "done"],
      name: "employeeType",
    },
  ]).then((answers) => {
    switch (answers.employeeType) {
      case "intern":
        const employee = createEmployee();
        createIntern(employee);
        break;
      case "engineer":
        const employee = createEmployee();
        createEngineer(employee);
        break;
      case "done":
        console.log(
          "Thanks for creating your team. Your HTML website is now being created."
        );
        fs.writeFile(
          `/new_htmls/${managerName}.html`,
          `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>${managerName}'s Team</title>
</head>
<body>
  <h1>${managerName}'s Team</h1>
  <div id="manager"></div>
  <div id="team"></div>
</body>
<script src="./script.js"></script>
</html>`
        );
    }
  });
}

module.exports = teamMembers;
