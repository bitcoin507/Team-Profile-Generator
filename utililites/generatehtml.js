

const generateHTML = ({ name, email, github, id,role,school,officeNumber }) =>
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

export default generateHTML;