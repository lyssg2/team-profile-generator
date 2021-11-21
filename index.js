// Node modules
const inquirer = require('inquirer');
const fs = require('fs')


// Team member profiles

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')

//  Blank Team array
var team = ['']

// Questions prompts through Inquirer

const managerQuestions = () => {
    inquirer.prompt([{
                type: 'input',
                message: "What is this manager's name?",
                name: 'name'
            },
            {
                type: 'input',
                message: "What is this manager's ID?",
                name: 'id'
            },
            {
                type: 'input',
                message: "What is this manager's email?",
                name: 'email'
            },
            {
                type: 'input',
                message: "What is the manager's number?",
                name: 'office'
            },
            {
                type: 'confirm',
                message: 'Would you like to add another member?',
                name: 'anotherMember',
                default: 'false'
            }
        ])
        .then(managerInput => {
            const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.office)
            team.push(manager)

            switch (managerInput.anotherMember) {
                case 'anotherMember':
                    addEmployee()
                    break;
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    generateTeamCards()
            }
        })
}

const engineerQuestions = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            message: "What is this member's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is this member's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            type: 'github'
        },
        {
            type: 'confirm',
            message: 'Would you like to add another member?',
            name: 'anotherMember',
            default: 'false'
        }
    ]).then(engineerInput => {
        const engineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.office)
        team.push(engineer)


        switch (engineerInput.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                generateTeamCards()
        }
    })
}

const internQuestions = () => {
    inquirer.prompt([{
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {

            type: 'input',
            message: "What is this member's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is this member's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is this member's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: 'Which school are you attending?',
            type: 'school'
        },
        {
            type: 'confirm',
            message: 'Would you like to add another member?',
            name: 'anotherMember',
            default: 'false'
        }
    ]).then(internInput => {
        const intern = new Intern(internInput.name, internInput.id, internInput.email, internInput.office)
        team.push(intern)

        switch (internInput.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                generateTeamCards()
        }
    })
}

managerQuestions()

function generateTeamCards(team) {

    let cards = []

    for (let i = 0; i < team.length; i++) {

        switch (team[i].role) {
            case 'Manager':
                let generateManagerCard =
                    `
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
                cards.push(generateManagerCard)

                break;
            case 'Engineer':
                let generateEngineerCard =
                    `
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
                cards.push(generateEngineerCard)
                break;

            case 'Intern':
                let generateInternCard =
                    `
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
                cards.push(generateInternCard)
                break;
        }
    }
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
            ${cards.join(``)}
            </div>
        </div>
    </main>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js "></script>
</body>

</html>`
    }

    const writeToFile = (fileName, data) => {

        fs.writeFile(`${fileName}`, data, (err) =>
            err ? console.error('Error! : ' + err) : console.log('Your HTML has been successfully generated!'))
    }

    module.exports = generateHTML