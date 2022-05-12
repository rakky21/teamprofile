// The first class is an Employee parent class with the following properties and methods:

// name, id, mail, getname(), getId(), getEmail(), 
// school, getSchool(), getRole() //Overridden to return 'Intern'
const Employee = require('../lib/Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}


module.exports = Intern;

