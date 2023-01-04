function teamBuilder(team) {
  function generateHtml(team) {
    const generatedHtml = [];
    function generateManagerHtml(manager) {
      return `
  <div class="card col-3">
    <h2>Manager: ${manager.getName()}</h2>
    <h3>Office Number: ${manager.getOffice()}</h3>
    <h3>Email: <a href="mailto: ${manager.getEmail()}">${manager.getEmail()}</a></h3>
  </div>
      `;
    }
    function generateEngineerHtml(engineer) {
      return `
  <div class="card col-3">
    <h2>Engineer: ${engineer.getName()}</h2>
    <h3>GitHub: <a href="https://www.github.com/${engineer.getGithub()}">${engineer.getName()}'s Github Profile</a></h3>
    <h3>Email: <a href="mailto: ${engineer.getEmail()}">${engineer.getEmail()}</a></h3>
  </div>
      `;
    }
    function generateInternHtml(intern) {
      return `
  <div class="card col-3">
    <h2>Intern: ${intern.getName()}</h2>
    <h3>School: ${intern.getSchool()}</h3>
    <h3>Email: <a href="mailto: ${intern.getEmail()}">${intern.getEmail()}</a></h3>
  </div>
      `;
    }

    generatedHtml.push(
      team
        .filter((object) => object.getRole() === "Manager")
        .map((manager) => generateManagerHtml(manager))
    );
    generatedHtml.push(
      team
        .filter((object) => object.getRole() === "Engineer")
        .map((engineer) => generateEngineerHtml(engineer))
        .join("")
    );
    generatedHtml.push(
      team
        .filter((object) => object.getRole() === "Intern")
        .map((intern) => generateInternHtml(intern))
        .join("")
    );

    return generatedHtml.join("");
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./reset.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
  <title>${team
    .filter((object) => object.getRole() === "Manager")
    .map((manager) => manager.getName())}'s Team Profile</title>
</head>
<body>
<header>
  <h1>${team
    .filter((object) => object.getRole() === "Manager")
    .map((manager) => manager.getName())}'s Team Profile</h1>
</header>  
<div class="container-fluid" id="body">
<div class="row justify-content-center">
${generateHtml(team)}
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
<script src="./script.js"></script>
</body>
</html>`;
}

module.exports = teamBuilder;
