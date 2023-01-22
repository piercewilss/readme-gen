// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       name: 'title',
       message: 'What is your project title?', 
    },
    {
        type: 'input',
       name: 'what',
       message: 'What does your project do?', 
    },
    {
        type: 'inout',
       name: 'how',
       message: 'How did you build this prject?', 
    },
    {
        type: 'input',
       name: 'why',
       message: 'Why did you build this project?', 
    },
    {
        type: 'input',
       name: 'motivation',
       message: 'What was your motivation?', 
    },
    {
        type: 'input',
       name: 'learn',
       message: 'What did you learn?', 
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

