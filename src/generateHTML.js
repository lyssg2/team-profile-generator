const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

const fs = require('fs')

function generateTeamCards(team) {
    let cards = []
    for (let i = 0; i < team.length; i++) {
        // const team = team[i];
        const employee = team[i]

        if ('Manager') {
            const managerCard = generateManagerCard(employee)
            cards.push(managerCard)
        }
        if ('Engineer') {
            const engineerCard = generateEngineerCard(employee)
            cards.push(engineerCard)
        }
        if ('Intern') {
            const internCard = generateInternCard(employee)
            cards.push(internCard)
        }

        console.log(team)

        const memberCards = cards.join(``)
        const generatePage = generateHTML(memberCards)

        return generatePage
    }
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


const generateHTML = function(cards) {
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
            ${cards}
            </div>
        </div>
    </main>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js "></script>
</body>

</html>`
}



module.exports = generateTeamCards