// Node modules
const inquirer = require('inquirer');
const fs = require('fs')

// Exports info to generate file
const generateHTML = require('./src/generateHTML')


// Team member profiles

const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')

//  Blank Team array
const team = []

// Questions prompts through Inquirer

const prompt = () => {
    inquirer.prompt([{
            type: 'list',
            message: "What is the employee's role?",
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            message: "What is this employee's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is this employee's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is this employee's email?",
            name: 'email',
        }
    ])
    if (role === 'Manager') {
        return inquirer.prompt([{
                    type: 'input',
                    message: "What is the manager's office number?",
                    name: 'office'
                },
                {
                    type: 'confirm',
                    name: 'newMember',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            .then(({ office, newMember }) => {
                Manager.push(new Manager(employee, id, email, office))

                if (newMember) {
                    return prompt();
                } else {
                    writeToFile('dist/index.html', generateHTML(team))
                }
            })
    } else if (role === "Engineer") {
        return inquirer.prompt([{
                    type: 'input',
                    message: 'What is your GitHub username?',
                    type: 'github'
                },
                {
                    type: 'confirm',
                    name: 'newMember',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            .then(({ github, newMember }) => {
                Engineer.push(new Engineer(employee, id, email, github))

                if (newMember) {
                    return prompt();
                } else {
                    writeToFile('dist/index.html', generateHTML(team))
                }
            })

    } else if (role === 'Intern') {
        return inquirer.prompt([{
                    type: 'input',
                    message: 'Which school are you attending?',
                    type: 'school'
                },
                {
                    type: 'confirm',
                    name: 'newMember',
                    message: "What you like to add another employee?",
                    default: false
                }
            ])
            .then(({ school, newMember }) => {
                Intern.push(new Intern(employee, id, email, school))

                if (newMember) {
                    return prompt();
                } else {
                    writeToFile('dist/index.html', generateHTML(team))
                }
            })

    }
}

prompt()

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) throw err;
        console.log('file saved')
    });
};