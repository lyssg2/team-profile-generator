// Exports info to generate file
const generateHTML = require('./src/generateHTML')

// Node modules
const inquirer = require('inquirer');
const fs = require('fs')

// Team member profiles

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Employee = require('./lib/Employee')
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
                name: 'member'
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

    ).then(({ role, member, id, email }) => {
        if (role === "Manager") {
            return inquirer
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
                ).then(({ office, newMember }) => {
                    Manager.push(new Manager(member, id, email, office))
                    if (newMember) {
                        return prompt()
                    }
                })

        } else if (role === "Engineer") {
            return inquirer
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
                ).then(({ github, newMember }) => {
                    Engineer.push(new Engineer(member, id, email, github))
                    if (newMember) {
                        return prompt()
                    }
                })
        } else if (role === "Intern") {
            return inquirer
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
                ).then(({ school, newMember }) => {
                    Intern.push(new Intern(member, id, email, school))
                    if (newMember) {
                        return prompt()
                    }
                })
        }
    })
}