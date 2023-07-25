// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your title name?',
        name:'title',
        // validate property to check that the user provided a value
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        type: 'input',
        message:'how do you install your app?',
        name: 'installation',
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        type: 'input',
        message:'intructions to be follow?',
        name: 'instructions',
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        type: 'input',
        message:'Any credits?',
        name: 'credits',
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        type: 'input',
        message:'how do you use your app?',
        name: 'usage',
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        // list of license
        type: 'list',
        message:'What license did you use?',
        name: 'license',
        choices:['The MIT License', 'The GPL license', 'Apache license', 'GMU license', 'N/A'],
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        type:'input',
        message:'GitHub username:',
        name:'git',
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
    {
        type:'input',
        message:'E-mail:',
        name:'email',
        validate: (value)=>{if(value){return true} else {return 'i need a value top continue'}},
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log('success');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));

    })
}

// Function call to initialize app
init();
