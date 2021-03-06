function generateHTML(employeeInfo) {
    let cards = '';
    
let body = `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Profile</title>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Team</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon mb-0 h1"></span></button>
        </div>
    </nav>
</head>

<body>
    <div class="container">
        <div class="row align-items-start">
        ${cards}
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Team Member Name</h5>
                  <p class="card-text">ID:</p>
                  <p class="card-text">Email:</p>
                </div>
              </div>

              <!-- name, id, mail, getname(), getId(), getEmail(), getRole() //returns employee -->

              <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Team Member Name</h5>
                  <p class="card-text">ID:</p>
                  <p class="card-text">Email:</p>
                </div>
              </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Team Member Name</h5>
                  <p class="card-text">ID:</p>
                  <p class="card-text">Email:</p>
                </div>
              </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Team Member Name</h5>
                  <p class="card-text">ID:</p>
                  <p class="card-text">Email:</p>
                </div>
              </div>

            <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">Team Member Name</h5>
                  <p class="card-text">ID:</p>
                  <p class="card-text">Email:</p>
                </div>
              </div>



            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                crossorigin="anonymous"></script>

</body>

</html>`
return body;
};

module.exports = generateHTML;