// Exports info to generate file
const generateHTML = require('./src/generateHTML')

// Node modules
const inquirer = require('inquirer');
const fs = require('fs')

// Team member profiles

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//  Blank Team array
var team = ['']

// Questions prompts through Inquirer

function addMember() {
    inquirer.prompt([{
                type: 'list',
                message: "Please select team member's role",
                choices: [
                    "Manager",
                    "Engineer",
                    "Employee",
                    "Intern"
                ],
                name: 'role'
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
            }

        ]

    ).then(async({ role, name, id, email }) => {
        if (role === "Manager") {
            const { office, newMember } = await inquirer
                .prompt(
                    [{
                            type: 'input',
                            message: 'What is your office number?',
                            name: 'office'
                        },
                        {
                            type: 'confirm',
                            message: 'Would you like to add another member?',
                            name: 'anotherMember',
                            default: 'false'
                        }
                    ]
                );
            Manager.push(new Manager(name, id, email, office));
            if (newMember) {
                return prompt();
            }

        } else if (role === "Engineer") {
            const { github, newMember: newMember_1 } = await inquirer
                .prompt(
                    [{
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
                    ]
                );
            Engineer.push(new Engineer(name, id, email, github));
            if (newMember_1) {
                return prompt();
            }
        } else if (role === "Intern") {
            const { school, newMember: newMember_2 } = await inquirer
                .prompt(
                    [{
                            type: 'input',
                            message: 'What school are you attending?',
                            type: 'school'
                        },
                        {
                            type: 'confirm',
                            message: 'Would you like to add another member?',
                            name: 'anotherMember',
                            default: 'false'
                        }
                    ]
                );
            Intern.push(new Intern(name, id, email, school));
            if (newMember_2) {
                return prompt();
            }
        }
    })
}

// Creates the HTML to be generated 
function writeToFile(fileName, data) {
    fs.writeFile('./dist/index.html', data, (err) =>
        err ? console.error('error', err) : console.log('Success! your HTML was generated')
    )
}
// Initializes app
function init() {
    inquirer.prompt(addMember)
        .then((data) => {
            writeToFile('team.html', generateHTML(data))
        })
}