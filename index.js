var inquirer = require('inquirer');
const fs = require(`fs`)

inquirer
  .prompt([
    {
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
      type: `confirm`,
      message: `Are there componenets that need to be installed`,
      name: `install`
    },
    {
      type: `checkbox`,
      message: `What Technologies were used?`,
      choices: [ "HTML", "CSS", "JavaScript","BootStrap","Materialize","JQuery","Moment.JS","Node.JS","" ],
      name: `tech`
    },
    {
      type: `input`,
      message: `Who did you collaborate with?`,
      name: `collaborate`
    },
    {
      type: `input`,
      message: `What licensing do you need?`,
      name: `license`
    },
  ])
  .then((response) =>
   fs.writeFile(response.title + `.json`, JSON.stringify(response), (error) => error ? console.error("Something went wrong."): console.log(`Success!!`))
);
  