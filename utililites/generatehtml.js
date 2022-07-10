const generateHTML = ({ name, email, github, id,role,school }) =>
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
    <h1 class="display-4">Hi! My name is ${name}</h1>
    <p class="lead">My role is ${role}</p>
    <p class="lead">My ID is ${id}</p>
    <p class="lead">My email is ${email}</p>
    <p class="lead">My GitHub username is ${github}</p>
    <p class="lead">My school is ${school}</p>

   
  </div>
</div>
</body>
</html>`;

export default generateHTML;