import inquirer from './node_modules/inquirer/lib/inquirer.js';

import fs from "fs";

function makeBadges(badgeArray){
  console.log(badgeArray);
  consolSe.log('L'+badgeArray.length);
  let badgeString = '';
  for(let i = 0; i < badgeArray.length; i++){
    console.log('i'+i);
    badgeString += `![badge](https://img.shields.io/badge/${badgeArray[i]})
`
    console.log(badgeString);
  }
  return badgeString;
}

function readmeMaker(answers){
const readmeContent = (
`# ${answers.title}

![badge](https://img.shields.io/badge/license-${answers.license.replace(/\s+/g, '')}-00ff00) 
   
## Description  
  
${answers.description}  
  
## Table of Contents   
  
- [Installation](#installation)  
- [Usage](#usage)  
- [Credits](#credits)  
- [License](#license)  
- [Badges](#badges)  
- [Features](#features)  
- [How to Contribute](#how-to-contribute)  
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
  
${answers.badgeContent}  
  
## Features  
  
${answers.features}  
  
## How to Contribute  
  
${answers.contribute}  
  
## Tests  
  
${answers.tests}

## Questions

GitHub user name: ${answers.github}
GitHub link: https://github.com/${answers.github}
Email: ${answers.email}`
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
        message: 'instructions and examples of usage',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'who collaborated on this project, also and third party assets used(credits)',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['Apache license 2.0', 'GNU General Public License v3.0', 'MIT', 'BSD 2-clause "Simplified" license', 'BSD 3-clause "New" or "Revised" license', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
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
      },
      {
        type: 'input',
        name: 'GitHub',
        message: 'GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
      }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // console.log(answers);
    // console.log(readmeMaker(answers));
    const badgeArray = answers.badgeContent.split(' ')
    const badgeString = makeBadges(badgeArray);
    answers.badgeContent = badgeString
    fs.writeFile('README.md',readmeMaker(answers), (err)=>
    err? console.log(err) : console.log('success! Please proofread your README!')
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('error:' + error);
    } else {
      // Something else went wrong
      console.log('an unexpected error occurred');
    }
  });
