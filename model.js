let mongoose = require('mongoose');
let empSchema = new mongoose.Schema({
    name: String,
    position : String,
    department : String,
    salary : String
})

let Employee = module.exports = mongoose.model('Employee', empSchema);

module.exports.getEmployees = callback => {
    Employee.find(callback);
}
module.exports.addEmployee = (newEmployee, callback) => {
    Employee.create(newEmployee, callback);
}
module.exports.updateEmployee = (id, newEmployee, callback) => {
    Employee.findByIdAndUpdate(id, newEmployee, callback);
}
module.exports.deleteEmployee = (id, callback) => {
    Employee.findByIdAndRemove(id, callback);
}
module.exports.getEmployee = (id, callback) => {
    Employee.findById(id, callback);
}
