// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

const Manager = require("../lib/Manager");


  test("Gets manager number and email and number", () => {
    const manager = new Manager('Bob','7','aaa@aaa.com','(111)111');
  
    expect(manager.getName()).toBe('Bob');
  });

  test("Gets manager number and email and number", () => {
    const manager = new Manager('Bob','7','aaa@aaa.com','(111)111');
  
    expect(manager.getId()).toBe('7');

  });

  test("Gets manager number and email and number", () => {
    const manager = new Manager('Bob','7','aaa@aaa.com','(111)111');

    expect(manager.getofficeNumber()).toBe('(111)111');
  });

  test("Gets manager number and email and number", () => {
    const manager = new Manager('Bob','7','aaa@aaa.com','(111)111');
  
    expect(manager.getEmail()).toBe('aaa@aaa.com');
  });