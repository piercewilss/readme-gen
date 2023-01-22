// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs') 
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
 inquirer
 .prompt([
    {
       type: 'input',
       name: 'title',
       message: 'What is your project title?', 
    },
    // {
    //     type: 'input',
    //    name: 'what',
    //    message: 'What does your project do?', 
    // },
    // {
    //     type: 'inout',
    //    name: 'how',
    //    message: 'How did you build this project?', 
    // },
    // {
    //     type: 'input',
    //    name: 'why',
    //    message: 'Why did you build this project?', 
    // },
    // {
    //     type: 'input',
    //    name: 'motivation',
    //    message: 'What was your motivation?', 
    // },
    // {
    //     type: 'input',
    //    name: 'learn',
    //    message: 'What did you learn?', 
    // }
    
]).then(function(data){
    // console.log(data)
    init(data)
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(data) {
const readmeTemp = generateMarkdown(data)
console.log(readmeTemp)
fs.writeFile('./utils/readme.md', readmeTemp, function(err){
    if (err) throw new Error('uh oh', err)
})
}

// Function call to initialize app
// init();

