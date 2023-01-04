const inquirer = require("inquirer");
const fs = require("fs");
const { Manager, Intern, Engineer } = require("./lib");
const teamBuilder = require("./src/script");

const { prompt } = inquirer;

let teamMembers = [];
let teamManagerName = "";

function createManager() {
  teamManagerName = "";
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
    teamManagerName = answers.managerName;
    teamMembers.push(newManager);
    menu();
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
  ]);
}

function createEngineer() {
  prompt([
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is the engineer's ID number?",
      name: "engineerId",
    },
    {
      type: "input",
      message: "What is the engineer's email address?",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "What is the engineer's GitHub username?",
      name: "engineerGithub",
    },
  ]).then((answers) => {
    const newEngineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGithub
    );
    teamMembers.push(newEngineer);
    menu();
  });
}

function createIntern() {
  prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is the employee's ID number?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is the employee's email address?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "Where did the intern attend school?",
      name: "internSchool",
    },
  ]).then((answers) => {
    const newIntern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    teamMembers.push(newIntern);
    menu();
  });
}

function buildTeam() {
  createManager();
}
function createHtml() {
  fs.writeFileSync(`./dist/${teamManagerName}.html`, teamBuilder(teamMembers));
}

function menu() {
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
        createIntern();
        break;
      case "engineer":
        createEngineer();
        break;
      case "done":
        createHtml();
        console.log(
          "Thanks for creating your team. Your HTML website is now being created."
        );
        break;
    }
  });
}

buildTeam();
