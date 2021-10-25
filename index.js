const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');


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
            choices: ['Manager', 'Intern', 'Engineer', 'Employee']
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
                    })
            }
            else if (data.role === 'Manager') {
                inquirer
                    .prompt({
                        type: 'text',
                        name: 'Office Number',
                        message: 'What is your office number?'
                    })
            }
            else if (data.role === 'Intern') {
                inquirer
                .prompt({
                    type: 'text',
                    name: 'School',
                    message: 'What school did you attend?'
                })
            }
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        })
}

initializeTeamprofile();