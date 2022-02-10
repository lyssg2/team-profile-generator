const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email)
        // this.name = name
        // this.id = id
        // this.email = email
        this.office = office
    }
    getOffice() {
        return `Office: ${this.office}`
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Manager