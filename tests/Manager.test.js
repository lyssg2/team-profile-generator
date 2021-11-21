const Manager = require('../lib/Manager')

// creating manager object  
test('creates an Manager object', () => {
    const jessica = new Manager('Jessica', 23, 'Jessica23@gmail', 2);

    expect(jessica.this.office).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Jessica', 23, 'Jessica.elisaw@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});