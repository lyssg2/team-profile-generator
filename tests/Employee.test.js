const Employee = require('../lib/Employee');

// Creates employee object
describe('Employee', () => {
    const name = 'Lyss'
    const id = '22'
    const email = 'lyss@mail.com'

    const employee = new Employee(name, id, email)

    // Gets name from getName()
    it('should return the employee name when requested', () => {
        expect(employee.getName()).toBe('Lyss');
    })
    // Gets id from getId()
    it('should return the employee id when requested', () => {
        expect(employee.getId()).toBe('22');
    })
    // Gets email from getEmail()
    it('should return the employee email when requested', () => {
        expect(employee.getEmail()).toBe('lyss@mail.com');
    })
    // Gets role from getRole()
    it('should return the employee role when requested', () => {
        expect(employee.getRole()).toBe('Employee')
    })
})