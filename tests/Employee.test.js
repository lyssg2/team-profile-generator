const Employee = require('../lib/Employee');

describe('Employee', () => {
    const name = 'Lyss'
    const id = '22'
    const email = 'lyss@mail.com'

    const employee = new Employee(name, id, email)

    it('should return the employee name when requested', () => {
        expect(employee.getName()).toBe('Lyss');
    })
    it('should return the employee id when requested', () => {
        expect(employee.getId()).toBe('22');
    })
    it('should return the employee email when requested', () => {
        expect(employee.getEmail()).toBe('lyss@mail.com');
    })
    it('should return the employee role when requested', () => {
        expect(employee.getRole()).toBe('Employee')
    })
})