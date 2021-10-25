const Employee = require('../lib/Employee.js');

test("Gets manager number and email and number", () => {
    const employee = new Employee('JJ','4','eee@eee.com');
  
    expect(employee.getName()).toBe('JJ');
  });

  test("Gets manager number and email and number", () => {
    const employee = new Employee('JJ','4','eee@eee.com');
  
    expect(employee.getId()).toBe('4');
  });

  test("Gets manager number and email and number", () => {
    const employee = new Employee('JJ','4','eee@eee.com');
  
    expect(employee.getEmail()).toBe('eee@eee.com');
  });

// expect(employee.name).toBe('Jacky');