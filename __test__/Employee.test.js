const Employee = require('../lib/Employee.js');


test('creates the employee information', () => {
    const employee = new Employee('Jacky');

    expect(employee.id).toBe('123456');

});

// expect(employee.name).toBe('Jacky');