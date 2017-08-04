let mongoose = require('mongoose');
let empSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    baseSalary: String,
    endowmentInsurance: String,
    insurance: String,
})

let  Employee =module.exports= mongoose.model('Employee', empSchema);

Employee.getEmployees = callback => {
    Employee.find(callback);
}
Employee.addEmployee = (newEmployee, callback) => {
    Employee.create(newEmployee, callback);
}
Employee.updateEmployee = (id, newEmployee, callback) => {
    Employee.findByIdAndUpdate(id, newEmployee, callback);
}
Employee.deleteEmployee = (id, callback) => {
    Employee.findByIdAndRemove(id, callback);
}
Employee.getEmployee = (id, callback) => {
    Employee.findById(id, callback);
}
Employee.getEmployeesName = callback => {
    Employee.find({},'name', callback)
}