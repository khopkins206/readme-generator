// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require(`fs`);
var generateMarkdown = require(`./utils./generateMarkdown`);

// TODO: Create an array of questions for user input
//description, installation instructions, usage information, contribution guidelines, and test instructions

const questions = [{
    type: `input`,
    message: `Project Title`,
    name: `title`
  },
  {
    type: `input`,
    message: `Project Description`,
    name: `description`
  },
  {
    type: `checkbox`,
    message: `What Technologies were used?`,
    choices: ["HTML", "CSS", "JavaScript", "BootStrap", "Materialize", "JQuery", "Moment.JS", "Node.JS", ""],
    name: `tech`
  },
  {
    type: `input`,
    message: `What installation instructions are there? Please provide in-depth descriptions.`,
    name: `install`
  },
  {
    type: `input`,
    message: `What examples do you have for usage of yor project?`,
    name: `usage`
  },
  {
    type: `input`,
    message: `Who contributed to this project?`,
    name: `contribute`
  },
  {
    type: `list`,
    message: `What licensing do you need?`,
    choices: ["MIT"],
    name: `license`
  },
  {
    type: `input`,
    message: `Did you test your application? Please show examples here.`,
    name: `test`
  },
  {
    type: `input`,
    message: `What is the year?`,
    name: `year`
  },
  {
    type: `input`,
    message: `What is your full name?`,
    name: `name`
  },
  {
    type: `input`,
    message: `What is your github ID?`,
    name: `githubID`
  },
  {
    type: `input`,
    message: `What is your website URL?`,
    name: `website`
  },
  {
    type: `input`,
    message: `What is your email?`,
    name: `email`
  },
]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    error ? console.error("Something went wrong.") : console.log(`Success!!`)
  })
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (answers) {
    let title = answers.title;
    writeToFile(title, +".md", generateMarkdown(answers))
  }).catch((error) => {
    console.error(error);
  });
}

// Function call to initialize app
init();