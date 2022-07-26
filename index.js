
const inquirer = require('inquirer');

fs = require('inquirer');

const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")



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
            generateHTML;
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
const generateHTML = () => {
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">

div class = "employeeCard"> 

<p>Name: ${Name}</p>
<p>ID: ${answers.id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>

</div>

div class = "employeeCard"> 

<p>Name: ${Name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>

</div>

div class = "employeeCard">

<p>Name: ${Name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>

</div>

div class = "employeeCard">

<p>Name: ${Name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>
 </div>

div class = "employeeCard"> 

<p>Name: ${Name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>
</div>


  

 
</div>
</div>
</body>
</html>`;
}

const init = () => {
  mainQuestionsPrompt()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('index.html', generateHTML()))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();











     

    
 

    

  


