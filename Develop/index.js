// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
function init() {
    inquirer
        .prompt([
            {
                name: 'Title',
                type: 'input',
                message: 'Please Enter a Title',
            },
            {
                name: 'Description',
                type: 'input',
                message: 'Please Enter a Description including Installation, Table of Contents, etc.',
            },
            {
                name: 'License',
                type: 'checkbox',
                message: 'Please Choose a License',
                choices: [
                    "MIT License",
                    "GNU GPLv3",
                    "Apache License 2.0",
                ]
            },
            {
                name: 'GitHubUser',
                type: 'input',
                message: 'Please Enter your GitHub Username',
            },
            {
                name: 'Email',
                type: 'input',
                message: 'Please Enter your email address.',
            },
        ])
        .then((answers) => {
            writeToFile('README.md', generateREADME(answers));
        });
}
    
    
    function generateREADME(data) {
        return `
        # ${data.Title}

        ## Description
        ${data.Description}

        ## License
        ${data.License.join(", ")}

        ## Contact
        GitHub: [${data.GitHubUser}](https://github.com/${data.GitHubUser})  
        Email: ${data.Email}
        `;
    }
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated successfully')
    );
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
