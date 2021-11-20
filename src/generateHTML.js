const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

function generateTeamCards(team) {
    let cards = []
    for (let i = 0; i < team.length; i++) {
        const team = array[i];
        switch (team.getRole()) {
            case 'Manager':
                const manager = new Manager(team.id, team.name, team.email, team.office);
                cards.push(generateManagerCard(manager));
                break;
            case 'Engineer':
                const engineer = new Engineer(team.id, team.name, team.email, team.github);
                cards.push(generateEngineerCard(engineer));
                break;
            case 'Intern':
                const intern = new Intern(team.id, team.name, team.email, team.school);
                cards.push(generateInternCard(intern));
                break;
        }
    }
    return cards.join(``)
}

let generateManagerCard = (Manager) => {
    return `
    <div class="col s12 m6" id="cards">
        <div class="card grey darken-4">
            <div class="card-content white-text">
                <span class="card-title">${Manager.name}</span>
                        <h5>Manager</h4>
                        <p class="id">ID: ${Manager.id}</p>
                        <p class="email">Email: ${Manager.email}</p>
                        <p class="office">Office Number: ${Manager.office}</p>
            </div>        
        </div>
    </div>
    `
}

let generateEngineerCard = (Engineer) => {
    return `
    <div class="col s12 m6" id="cards">
        <div class="card grey darken-4">
            <div class="card-content white-text">
                <span class="card-title">${Engineer.name}</span>
                        <h5>Engineer</h4>
                        <p class="id">ID: ${Engineer.id}</p>
                        <p class="email">Email: ${Engineer.email}</p>
                        <p class="office">Office Number: ${Engineer.github}</p>
            </div>        
        </div>
    </div>
    `
}

let generateInternCard = (Intern) => {
    return `
    <div class="col s12 m6" id="cards">
        <div class="card grey darken-4">
            <div class="card-content white-text">
                <span class="card-title">${Intern.name}</span>
                        <h5>Intern</h4>
                        <p class="id">ID: ${Intern.id}</p>
                        <p class="email">Email: ${Intern.email}</p>
                        <p class="office">Office Number: ${Intern.office}</p>
            </div>        
        </div>
    </div>
    `
}

function generateTeamProfile(team) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <header>
        <nav>
            <div class="nav-wrapper grey darken-4">
                <a href="#" class="brand-logo center">Team Profile</a>
            </div>
        </nav>
    </header>

    <main>
        <div class="big">
            <div class="row valign-wrapper">
            ${generateTeamCards(team)}
            </div>
        </div>
    </main>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js "></script>
</body>

</html>`
}