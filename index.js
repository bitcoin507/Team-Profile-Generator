
const inquirer = require('inquirer');

fs = require('inquirer');





const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const buildTeamPage = require('./src/teamBuilder.js');



const engineers=[];
const managers=[];
const interns=[];

const mainQuestionsPrompt = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Engineer', 'Manager', 'Intern', 'Generate Team Profile' ]
        },
    ])
    
    .then(answers => {
        
        if (answers.role === 'Engineer') {
            return engineerQuestionsPrompt();

        } else 
        if (answers.role === 'Manager') {
            return managerQuestionsPrompt();
        }   else 
        if (answers.role === 'Intern') {
            return internQuestionsPrompt();
            
        } else
        if (answers.role === 'Generate Team Profile') {
            buildTeamPage(engineers,managers,interns);
        }

    });

    




};   

const internQuestionsPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'Name',
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
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        interns.push(intern);

        mainQuestionsPrompt();
        
    })
}

const engineerQuestionsPrompt = ()=> {
    inquirer.prompt([
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
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        engineers.push(engineer);

        mainQuestionsPrompt();
        
    })
}   

const managerQuestionsPrompt = ()=> {
     inquirer.prompt([
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
    ])
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        managers.push(manager);

        mainQuestionsPrompt();
        
    })
    
}

mainQuestionsPrompt();













     

    
 

    

  


