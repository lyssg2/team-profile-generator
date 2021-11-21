const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Jessica', 90, 'jessica@gmail', 'ASU');

    expect(intern.school).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('Jessica', 90, 'jessica@gmail.com', 'ASU');

    expect(intern.getRole()).toEqual("Intern");
});

// gets intern's school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('Jessica', 90, 'jessica@gmail', 'ASU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});