const fs = require('fs');

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const buildTeamPage = (managers,interns, engineers ) => {
    let html= fs.readFileSync('./templates/index.html', 'utf8');
    if (html)   
    {
        let managerHTML = '';
        managers.forEach(manager => {
            managerHTML += `<div class="card">
            <div class="card-header">
            <h2>${manager.getName()}</h2>
            <p>Employee ID: ${manager.getId()}</p>
            <p>Email: ${manager.getEmail()}</p>
            <p>Office Number: ${manager.getofficeNumber()}</p>
            </div>
            </div>`;
        })
        let internHTML = '';  
        interns.forEach(intern => {
            internHTML += `<div class="card">
            <div class="card-header">
            <h2>${intern.getName()}</h2>
            <p>Employee ID: ${intern.getId()}</p>
            <p>Email: ${intern.getEmail()}</p>
            <p>School: ${intern.getSchool()}</p>
            </div>
            </div>`;
        })
        let engineerHTML = '';
        engineers.forEach(engineer => {
            engineerHTML += `<div class="card">
            <div class="card-header">
            <h2>${engineer.getName()}</h2>
            <p>Employee ID: ${engineer.getId()}</p>
            <p>Email: ${engineer.getEmail()}</p>
            <p>GitHub: ${engineer.getGithub()}</p>
            </div>
            </div>`;
        })

        html = html.replace('{{manager}}', managerHTML);
        html = html.replace('{{intern}}', internHTML);
        html = html.replace('{{engineer}}', engineerHTML);
        
        fs.writeFileSync('./index.html', html, 'utf8');

        console.log('Successfully wrote to index.html');

    }
}


        

        
