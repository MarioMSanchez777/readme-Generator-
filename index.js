// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input



const questions = [
    {
        type: 'input',
        message: 'the name of your app?',
        name: 'name',
        validate: input => {
            if (input.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'describe of your app?',
        name: 'description',
        validate: discription => {
            if (discription.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'add you contents here?',
        name: 'tableofContent',
        validate: tableofContent => {
            if (tableofContent.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },

    {
        type: 'input',
        message: 'instructions to install app?',
        name: 'install',
        validate: install => {
            if (install.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'how is the apped being used?',
        name: 'usage',
        validate: usage => {
            if (usage.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'license',
        choices: ['Apache-2.0', 'BSD-3', 'GPL', 'LGPL', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0', 'N/A']
    },


    {
        type: 'input',
        message: 'who is contributing to your app?',
        name: 'contributers',
        validate: contributers => {
            if (contributers.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'how will the user test the code?',
        name: 'test',
        validate: test => {
            if (test.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'add your questions here?',
        name: 'questions',
        validate: questions => {
            if (questions.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },


    {
        type: 'input',
        message: 'What is your GitHub Username?',
        name: 'gitHub',
        validate: gitHub => {
            if (gitHub.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if (email.trim() === "") {
                return "Not valid"
            }
            return true
        }
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Created!')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile("./read-me/README.md", generateMarkdown(data))
        })
}

// Function call to initialize app
init();

















