




const buildTeamPage = (managers,interns, engineers ) => {
    let html= fs.readFileSync('./template/index.html', 'utf8');
    if (html)   
    {
        let managerHTML = '';
        managers.forEach(manager => {
            managerHTML += `<div class="card">
            <div class="card-header">
            <h2>${manager.getName()}</h2>
            <p>Employee ID: ${manager.getId()}</p>
            <p>Email:<a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
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
            <p>Email:<a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
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
            <p>Email:<a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p>GitHub: ${engineer.getGithub()}</p>
            </div>
            </div>`;
        })
        html = html.replace('{{MANAGERS}}', managerHTML);
        html = html.replace('{{INTERNS}}', internHTML);
        html = html.replace('{{ENGINEERS}}', engineerHTML);
        
        
       
        
       fs.writeFileSync( '.dist/team.html',html,'utf8');
        console.log('Successfully wrote to team.html');

    }
}

module.exports = buildTeamPage



        

        
