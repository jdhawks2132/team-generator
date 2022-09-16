const generateTeam = (team) => {
	//generate the manager html
	const generateManager = (manager) => {
		return `
    <div style="filter: drop-shadow(16px 16px 10px black)" class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `;
	};

	//generate the engineer html
	const generateEngineer = (engineer) => {
		return `
    <div style="filter: drop-shadow(16px 16px 10px black)" class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
    `;
	};

	//generate the intern html
	const generateIntern = (intern) => {
		return `
    <div style="filter: drop-shadow(16px 16px 10px black)" class="card employee-card">
      <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
    `;
	};

	//create an array of html for each employee
	const html = [];

	//push the manager html to the array
	html.push(
		team
			.filter((employee) => employee.getRole() === 'Manager')
			.map((manager) => generateManager(manager))
	);

	//push the engineer html to the array
	html.push(
		team
			.filter((employee) => employee.getRole() === 'Engineer')
			.map((engineer) => generateEngineer(engineer))
			.join('')
	);

	//push the intern html to the array
	html.push(
		team
			.filter((employee) => employee.getRole() === 'Intern')
			.map((intern) => generateIntern(intern))
			.join('')
	);

	//return the array of html
	return html.join('');
};

//export the function
module.exports = (team) => {
	//return the html
	return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
      <script src="https://kit.fontawesome.com/fa973cab36.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
      <div class="container-fluid">
        <div class="row">
          <div style="background: pink" class="col-12 jumbotron mb-3 team-heading">
            <h1 class="text-center">My Team</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="team-area col-12 d-flex justify-content-around">
            ${generateTeam(team)}
          </div>
        </div>
      </div>
    </body>
    
    </html>
    `;
};
