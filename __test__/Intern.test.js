
const Intern = require("../lib/Intern.js");

test("Gets manager number and email and number", () => {
    const intern = new Intern('Jacob', '6', 'iii@iii.com', 'school');

    expect(intern.getName()).toBe('Jacob');
});

test("Gets manager number and email and number", () => {
    const intern = new Intern('Jacob', '6', 'iii@iii.com', 'school');

    expect(intern.getId()).toBe('6');

});

test("Gets manager number and email and number", () => {
    const intern = new Intern('Jacob', '6', 'iii@iii.com', 'school');

    expect(intern.getEmail()).toBe('iii@iii.com');

});

test("Gets manager number and email and number", () => {
    const intern = new Intern('Jacob', '6', 'iii@iii.com', 'school');

    expect(intern.getSchool()).toBe('school');

});


module.exports = Intern;