const Manager = require('../lib/Manager')

// Creates manager object
describe('Manager', () => {
    const name = 'Jessica'
    const id = '23'
    const email = 'jessica@mail.com'
    const office = "2323"

    const manager = new Manager(name, id, email, office)

    // Gets name from getName()
    it('should return the manager name when requested', () => {
        expect(manager.getName()).toBe('Jessica');
    })
    // Gets id from getId()
    it('should return the manager id when requested', () => {
        expect(manager.getId()).toBe('23');
    })
    // Gets email from getEmail()
    it('should return the manager email when requested', () => {
        expect(manager.getEmail()).toBe('jessica@mail.com');
    })
    // Gets role from getRole()
    it('should return the manager role when requested', () => {
        expect(manager.getRole()).toBe('Manager')
    })
    // Gets office from getOffice()
    it('should return the manager office when requested', () => {
        expect(manager.getOffice()).toBe('2323')
    })
})