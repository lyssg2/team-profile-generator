// Node modules
const inquirer = require('inquirer');
const fs = require('fs')

// Exports info to generate file
const generateHTML = require('./src/generateHTML')


// Team member profiles

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

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

            switch (managerInput.addMember) {
                case 'Engineer':
                    engineerQuestions();
                    break;
                case 'Intern':
                    internQuestions();
                    break;
                default:
                    writeToFile('dist/index.html', generateHTML(team))
            }
        })
}

const engineerQuestions = () => {
    inquirer.prompt([{

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
                writeToFile('dist/index.html', generateHTML(team))
        }
    })
}

const internQuestions = () => {
    inquirer.prompt([{

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
                writeToFile('dist/index.html', generateHTML(team))
        }
    })
}

managerQuestions()

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
        err ? console.error('error', err) : console.log('Success! your Team Profile has been generated!')
    )
}