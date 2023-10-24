// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// https://www.npmjs.com/package/inquirer/v/8.2.4

var inquirer = require('inquirer');
const fs = require('fs');

function readmeMaker(answers){
const readmeContent = (
`# ${answers.title}  
  
## Description
  
${answers.description}
  
## Table of Contents
  
${answers.contents}
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [How to Contribute](#how to contribute)
- [Tests](#tests)
  
## Installation
  
${answers.installation}
  
## Usage
  
${answers.usage}
  
![website screenshot](assets/images/screenshot.png)
  
## Credits
  
${answers.credits}
  
## License
  
${answers.license}
  
## Badges
  
${answers.badges}
  
## Features
  
${answers.features}
  
## How to Contribute
  
${answers.contribute}
  
## Tests
  
${answers.tests}`
);
return readmeContent;
};

console.log('README builder if you do not wish to have content in an area leave blank or type n/a')

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'what is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'a description of your project(motivation, why built, what does it solve)',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'how to install step by step',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'instructions and examples of use',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'who collaborated on this project, also and third party assets used',
      },
      {
        type: 'input',
        name: 'license',
        message: 'what license are you using?',
      },
     
      {
        type: 'input',
        name: 'badgeContent',
        message: 'badge content(if>1 space between): first%20part-second%20part(optional)-(color name or hex):',
      },
      {
        type: 'input',
        name: 'features',
        message: 'list features here:',
      },
      {
        type: 'input',
        name: 'contribute',
        message: 'how others can contribute:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'write tests for app:',
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    console.log(readmeMaker(answers));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
