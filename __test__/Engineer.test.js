
const Engineer = require("../lib/Engineer.js");

test("Gets manager number and email and number", () => {
    const engineer = new Engineer('Jen','5','jjj@jjj.com','githubJ');
  
    expect(engineer.getName()).toBe('Jen');

  });

  test("Gets manager number and email and number", () => {
    const engineer = new Engineer('Jen','5','jjj@jjj.com','githubJ');
  
    expect(engineer.getId()).toBe('5');

  });

  test("Gets manager number and email and number", () => {
    const engineer = new Engineer('Jen','5','jjj@jjj.com','githubJ');
  
    expect(engineer.getEmail()).toBe('jjj@jjj.com');

  });

  test("Gets manager number and email and number", () => {
    const engineer = new Engineer('Jen','5','jjj@jjj.com','githubJ');
  
    expect(engineer.getGithub()).toBe('githubJ');

  });