// The first class is an Employee parent class with the following properties and methods:

// name, id, mail, getname(), getId(), getEmail(),
//  gitHub //Github username, getGithub(), getRole() //overrridden to return Engineer
// const Employee = require('./lib/Employee.js');


// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const Employee = require('./lib/Employee.js');



class Engineer extends Employee {
    constructor(name, weapon) {
      super(name);
  
      this.weapon = weapon;
      this.potion = new Potion();
    }
  
    getDescription() {
      return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
  }



module.exports = Engineer;