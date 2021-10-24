// The first class is an Employee parent class with the following properties and methods:

// name, id, mail, getname(), getId(), getEmail(), getRole() //returns employee

const Engineer = require('./lib/Engineer.js');
const Intern = require('../Intern.js');
const Manager = require('../lib/Manager.js');

function Employee(name = '') {
  this.name = name;
  this.id = id;
  this.email = email;

}
Employee.prototype.getName = function () {
  return `This employee's name is ${this.name}.`;
};


module.exports = Employee;
