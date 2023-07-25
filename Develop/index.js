// TODO: Include packages needed for this application
// package for handling the user input through the command line
const inquirer = require('inquirer');

// file system module to read and write files 
const fs = require('fs'); 

// custom module to generate the markdown content
const generateMarkdown = require('./utils/generateMarkdown'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your title name?',
        name:'title',
        // validate property to check that the user provided a value
        // returns true if value is provided
        // returns an error message if no value is provided
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
        message:'Any Test to follow',
        name: 'test',
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
    // fs.writeFile is a method provided by the 'fs' (file system) module in Node.js.
    // It allows us to write data to a file.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        // This is a callback function that will be executed once the writing operation is done.
        // The 'fileName' parameter is the name of the file we want to write to.
        // The 'data' parameter is the content we want to write to the file.
        // If there's an error during the writing operation, 'err' will not be null.
        if (err) {
            // If an error occurs, the code inside this block will be executed.
            // We log the error message to the console using 'console.log'.
            // The error message will give us information about what went wrong during the file write.
            return console.log(err);
        } else { 
            // If there is no error (i.e., the file was written successfully), the code inside this block will be executed.
            // Here, we log the 'fileName' and 'data' to the console just for debugging purposes.
            // This will show us the name of the file and the content that was written to it.
            console.log(fileName);
            console.log(data);

            console.log('success'); // Indicates a successful file writing
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions) // Prompts the user with the defined questions
    .then(function(data) {
        // once the user answers all the questions, this function is executed with the users responses
        // Generate the README content based on user input and write it to README.md file
        writeToFile("README.md", generateMarkdown(data)); 

    })
}

// start the applicatiob by calling the init() function
// Function call to initialize app
init();
