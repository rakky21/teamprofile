// The first class is an Employee parent class with the following properties and methods:

// name, id, mail, getname(), getId(), getEmail(), 
// officeNumber, getRole() //overridden to return 'Manager'
const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

// if selected do a function that will prompt questions for a manager

module.exports = Manager;