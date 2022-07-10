
import Employee from "./lib/employee";
import Intern from "./lib/intern";
import Engineer from "./lib/engineer";
import Manager from "./lib/manager";

const fs = require('fs');
const inquirer = require('inquirer');
const html = require('./utililites/generatehtml');

fs = require('inquirer');

const mainQuestionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is your role?',
            validate: (value) => {
                if (value === '') {
                    return 'Please enter your role.';   
                } else {    
                    if (value === 'intern') => {
                        internQuestions();  
                    }   else if (value === 'engineer') => {
                        engineerQuestions();
                    }   else if (value === 'manager') => {
                        managerQuestions();
                    }   else {
                        return 'Please enter your role.';
                    }  
                }   
            }   
                                 



    

    




const internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school did you attend?'
        }
    ])
}

const engineerQuestions = ()=> {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        }
    ]);
}

const managerQuestions = ()=> {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your ID?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?'
        }
    ]);
}

const init = () => {
    mainQuestionsPrompt()
      .then((answers) => fs.writeFileSync('index.html', generateHTML(answers)))
      .then(() => console.log('Successfully created Team Profile!'))
      .catch((err) => console.error(err));
  };
  
  init();

     

    
 

    

  


