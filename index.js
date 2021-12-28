const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


const employeeinfo = [ ] 

function initializeTeamprofile() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'text',
            name: 'id',
            message: 'What is your company id?'
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is your email?'
        }, {
            type: 'list',
            name: 'role',
            message: 'What is your position?',
            choices: ['Manager', 'Intern', 'Engineer']
        }])
        .then(function (data) {
            if (data.role === 'Engineer') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'github',
                        message: 'What is your github?'
                    }).then(function (data2) {
                        const engineer = new Engineer(data.name, data.id, data.email, data2.github);
                        employeeinfo.push(engineer);
                        continueProgram();
                    })
            }
            else if (data.role === 'Manager') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'officeNumber',
                        message: 'What is your office number?'
                    }).then( function (data2) {
                        const manager = new Manager(data.name, data.id, data.email, data2.officeNumber);
                        employeeinfo.push(manager);
                        continueProgram();
                    })
            }
            else if (data.role === 'Intern') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'School',
                        message: 'What school did you attend?'
                    }).then(function (data2) {
                        const intern = new Intern(data.name, data.id, data.email, data2.school);
                        employeeinfo.push(intern);
                        continueProgram();
                    })
            }

        }).catch(function (err) {
            console.log(err);
        })
}

function continueProgram() {
    inquirer
        .prompt({
            type: 'list',
            name: 'quit',
            choices: ['Yes', 'No'],
            message: 'Would you like to quit?'
        }).then(function (data) {
            if (data.quit === "Yes") {
                //quit()
            } else if (data.quit === "No") {
                initializeTeamprofile();
            }
        })

}
function quit() {
    console.log(employeeinfo)
};

function writeFile(data2) {
    fs.writeFile('README.md', generateMarkdown(data), function(err) {
    if (err) {
        return console.log(err);
    }
    });
}
initializeTeamprofile();