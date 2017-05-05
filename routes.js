let express = require('express');
let router = express.Router();
let Employee = require('./model');
router.get('/', (req, res) => {
     Employee.getEmployees((err, employees) => {
         if(err) throw err;
         res.json(employees);
     });
 })
router.post('/', (req, res) => {
    let newEmployee = {
        name: req.body.name,
        position : req.body.position,
        department : req.body.department,
        salary: req.body.salary
    }
     Employee.addEmployee(newEmployee, (err, employee) => {
         if(err) throw err;
         res.json(employee);
     });
 })
 router.put('/:_id', (req, res) => {
     let update = {
        name: req.body.name,
        position : req.body.position,
        department : req.body.department,
        salary: req.body.salary
    }
     Employee.updateEmployee(req.params._id , update, (err, employee) => {
         if(err) throw err;
         res.json(employee);
     });
 })
 router.delete('/:_id', (req, res) => {

     Employee.deleteEmployee(req.params._id ,  (err, employee) => {
         if(err) throw err;
         res.json(employee);
     });
 })
 router.get('/:_id', (req, res) => {

     Employee.getEmployee(req.params._id , (err, employee) => {
         if(err) throw err;
         res.json(employee);
     });
 })
module.exports = router;
