// The first class is an Employee parent class with the following properties and methods:

// name, id, mail, getname(), getId(), getEmail(), getRole() //returns employee
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

function Employee(name = '') {
  this.name = name;

  this.id = id;

}
Employee.prototype.getName = function () {
  return `This employee's name is ${this.name}.`;
};


module.exports = Employee;

// this.email = email;