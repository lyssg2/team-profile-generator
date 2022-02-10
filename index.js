// Node modules
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path'); 

// Team member profiles

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Employee = require('./lib/Employee')

//  Blank Team array
var team = []; 

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
                type: 'list',
                message: 'What type of member would you like to add?',
                name: 'anotherMember',
                choices: ['Engineer', 'Intern', 'No new member']
            }
        ])
        .then(managerInput => {
            const manager = new Manager(managerInput.name, managerInput.id, managerInput.email, managerInput.office)
            team.push(manager)
            console.log(team)

            switch (managerInput.anotherMember) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    generateTeamCards(team); 
                    break; 
            }
        })
}

const engineerQuestions = () => {
    inquirer.prompt([{
            type: 'input',
            message: "What is this engineer's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is this engineer's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is this engineer's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'github'
        },
        {
            type: 'list',
            message: 'What type of member would you like to add?',
            name: 'anotherMember',
            choices: ['Engineer', 'Intern', 'No new member']
        }
    ]).then(engineerInput => {
        console.log("Engineer Input", engineerInput); 

        const engineer = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.github)
        team.push(engineer)


        switch (engineerInput.anotherMember) {
            case 'Engineer':
                engineerQuestions(team);
                break;
            case 'Intern':
                internQuestions(team);
                break;
            default:
                generateTeamCards(team)
        }
    })
}

const internQuestions = () => {
    inquirer.prompt([{

            type: 'input',
            message: "What is this intern's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is this intern's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is this intern's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: 'Which school are you attending?',
            name: 'school'
        },
        {
            type: 'list',
            message: 'What type of member would you like to add?',
            name: 'anotherMember',
            choices: ['Engineer', 'Intern', 'No new member']
        }
    ]).then(internInput => {
        const intern = new Intern(internInput.name, internInput.id, internInput.email, internInput.school)
        team.push(intern)

        switch (internInput.anotherMember) {
            case 'Engineer':
                engineerQuestions(team);
                break;
            case 'Intern':
                internQuestions(team);
                break;
            default:
                generateTeamCards(team)
        }
    })
}

managerQuestions()

function generateTeamCards(team) {

    let cards = []; 
    let pageData;  
    //console.log(team)

    for (let i = 0; i < team.length; i++) {
        //console.log("Each Member Info ", team[i]);
        
        switch (team[i].getRole()) {
            case 'Manager':
                let generateManagerCard =
                    `
                    <div class="col s12 m6" id="cards">
                        <div class="card grey darken-4">
                            <div class="card-content white-text">
                                <span class="card-title">${team[i].getName()}</span>
                                        <h5>Manager</h4>
                                        <p class="id">ID: ${team[i].getId()}</p>
                                        <p class="email">Email: ${team[i].getEmail()}</p>
                                        <p class="office">Office: ${team[i].getOffice()}</p>
                            </div>        
                        </div>
                    </div>
                    `; 
                cards.push(generateManagerCard)
                break;
            case 'Engineer':
                let generateEngineerCard =
                    `<div class="col s12 m6" id="cards">
                        <div class="card grey darken-4">
                            <div class="card-content white-text">
                                <span class="card-title">${team[i].getName()}</span>
                                        <h5>Engineer</h4>
                                        <p class="id">ID: ${team[i].getId()}</p>
                                        <p class="email">Email:  ${team[i].getEmail()}</p>
                                        <p class="office">Github Username: ${team[i].getGithub()}</p>
                            </div>        
                        </div>
                    </div>
                    `
                cards.push(generateEngineerCard)
                break;

            case 'Intern':
                let generateInternCard =
                    `<div class="col s12 m6" id="cards">
                        <div class="card grey darken-4">
                            <div class="card-content white-text">
                                <span class="card-title">${team[i].getName()}</span>
                                        <h5>Intern</h4>
                                        <p class="id">ID: ${team[i].getId()}</p>
                                        <p class="email">Email: ${team[i].getEmail()}</p>
                                        <p class="office">School Name:${team[i].getSchool()}</p>
                            </div>        
                        </div>
                    </div>
                    `
                cards.push(generateInternCard)
                break;
            default:
               
               break; 
        }
    }
     //HTML template with userdata
     pageData=generateHTML(cards); 

    //console.log("Html template", pageData);
    //grabbing the dist folder to save the html outcome there 
    const folder = path.resolve(__dirname, 'dist'); 
    writeToFile(path.join(folder,'teamprofile.html'), pageData);  
}
const writeToFile = (fileName, data) => {

    fs.writeFile(`${fileName}`, data, (err) =>
        err ? console.error('Error! : ' + err) : console.log('Your HTML has been successfully generated!'))
}


const generateHTML = function(cards) {
        return `<!DOCTYPE html>
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