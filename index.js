
const inquirer = require('inquirer');

fs = require('inquirer');



const employees =[];
const engineers=[];
const managers=[];
const interns=[];

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
                    if (value === 'intern')  {
                        internQuestions();  
                    }   else if (value === 'engineer')  {
                        engineerQuestions();
                    }   else if (value === 'manager')  {
                        managerQuestions();
                    }   else {
                        return 'Please enter your role.';
                    }  
                }   
            }   
        }   
    ])
    .then(Response => {
        const employee = new Employee( Response.role);
        employees.push(employee);
        
        
    })
                                 



    

};




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
    .then(Response => {
        const intern = new Intern(Response.name, Response.id, Response.email, Response.school);
        interns.push(intern);
        
    })
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
    ])
    .then(Response => {
        const engineer = new Engineer(Response.name, Response.id, Response.email, Response.github);
        engineers.push(engineer);
        
    })
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
    ])
    .then(Response => {
        const manager = new Manager(Response.name, Response.id, Response.email, Response.officeNumber);
        managers.push(manager);
        
    })
    
}
const generateHTML = ({ name,role, email, github, id,school,officeNumber }) =>
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
<p>Role: ${role}</p>
<p>Name: ${name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>

</div>

div class = "employeeCard"> 
<p>Role: ${role}</p>
<p>Name: ${name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>

</div>

div class = "employeeCard">
<p>Role: ${role}</p>
<p>Name: ${name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>

</div>

div class = "employeeCard">
<p>Role: ${role}</p>
<p>Name: ${name}</p>
<p>ID: ${id}</p>
<p>Email: ${email}</p>
<p>GitHub: ${github}</p>
<p>School: ${school}</p>
<p>Office Number: ${officeNumber}</p>
 </div>

div class = "employeeCard"> 
<p>Role: ${role}</p>
<p>Name: ${name}</p>
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

const init = () => {
  mainQuestionsPrompt()
    // Use writeFileSync method to use promises instead of a callback function
    .then((Response) => fs.writeFileSync('index.html', generateHTML(Response)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();











     

    
 

    

  


