// The first class is an Employee parent class with the following properties and methods:

// name, id, mail, getname(), getId(), getEmail(), 
// school, getSchool(), getRole() //Overridden to return 'Intern'
const Intern = require('../lib/Intern.js');
const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name = ''){
        this.school = school;
        this.role = role;
    }

    getSchool(){
        return `${this.name} attended ${this.school}.`;
    }

    get
}



module.exports = Intern;