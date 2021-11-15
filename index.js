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