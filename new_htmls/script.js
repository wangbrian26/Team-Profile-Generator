const teamMembers = require("../index.js");

function teamBuilder() {
  let managerName = document.createElement("h2");
  let managerId = document.createElement("h3");
  let managerEmail = document.createElement("h3");
  let managerOffice = document.createElement("h3");
  managerName.textContent = `Manager Name: ${teamMembers[0].managerName}`;
  managerId.textContent = `Manager ID: ${teamMembers[0].managerId}`;
  managerEmail.textContent = `Email: ${teamMembers[0].managerEmail}`;
  managerOffice.textContent = `Manager Office: ${teamMembers[0].managerOffice}`;
  document
    .querySelector("#manager")
    .appendChild(managerName, managerId, managerEmail, managerOffice);
  if (teamMembers.length > 1) {
    for (const i = 1; i < teamMembers.length; i++) {
      let employeeName = document.createElement("h2");
      let employeeId = document.createElement("h3");
      let employeeEmail = document.createElement("h3");
      // switch (teamMembers[i].) {
      //   case
      // }
      let employeeOffice = document.createElement("h3");
    }
  }
}
