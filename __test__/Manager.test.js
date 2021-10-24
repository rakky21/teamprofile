// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number

const Manager = require("../lib/Manager");




// test('creates a player object', () => {
//     const player = new Player('Dave');
  
//     expect(player.name).toBe('Dave');
//     expect(player.health).toEqual(expect.any(Number));
//     expect(player.strength).toEqual(expect.any(Number));
//     expect(player.agility).toEqual(expect.any(Number));
  
//     expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
//   });

  

  test("Gets manager number and email and number", () => {
    const manager = new Manager('Manager');
  
    expect(manager.getStats()).toHaveProperty('(999)999-9999');
    expect(manager.getStats()).toHaveProperty('aaa@aaa.com');

  });