let express = require('express');
let router = express.Router();
let Employee = require('./model');

let dailyProduction = require('./dailyProduction');
let monthProduction = require('./monthProduction');


router.get('/employee', (req, res) => {
    Employee.getEmployees((err, employees) => {
        if (err) throw err;
        res.json(employees);
    });
})
router.get('/employee/name', (req, res) => {

    Employee.getEmployeesName((err, names) => {
        if (err) throw err;
        res.json(names);
    });
})
router.get('/productions/:date', (req, res) => {
    dailyProduction.getProductions(req.params.date, (err, productions) => {
        if (err) throw err;
        res.json(productions);
    });
})

router.post('/employee', (req, res) => {
    let newEmployee = {
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        baseSalary: req.body.baseSalary,
        endowmentInsurance: req.body.endowmentInsurance,
        insurance: req.body.insurance,
    }
    Employee.addEmployee(newEmployee, (err, employee) => {
        if (err) throw err;
        res.json(employee);
    });
})

router.post('/production', (req, res) => {
    let newProduction = {
        name: req.body.name,
        date: req.body.date,
        shift: req.body.shift,
        area: req.body.area,
        c1: req.body.c1,
        c2: req.body.c2,
        c3: req.body.c3,
        c4: req.body.c4,
        c5: req.body.c5,
        c6: req.body.c6,
        c7: req.body.c7
    }
    dailyProduction.addProduction(newProduction, (err, production) => {
        if (err) throw err;
        res.json(newProduction);
    });
})

router.put('/employee/:_id', (req, res) => {
    let update = {
        name: req.body.name,
        position: req.body.position,
        department: req.body.department,
        baseSalary: req.body.baseSalary,
        endowmentInsurance: req.body.endowmentInsurance,
        insurance: req.body.insurance,
    }
    Employee.updateEmployee(req.params._id, update, (err, employee) => {
        if (err) throw err;
        res.json(employee);
    });
})
router.put('/production/:_id', (req, res) => {
    let newProduction = {
        name: req.body.name,
        date: req.body.date,
        shift: req.body.shift,
        area: req.body.area,
        c1: req.body.c1,
        c2: req.body.c2,
        c3: req.body.c3,
        c4: req.body.c4,
        c5: req.body.c5,
        c6: req.body.c6,
        c7: req.body.c7
    }
    dailyProduction.updateProduction(req.params._id, newProduction, (err, production) => {
        if (err) throw err;
        res.json(production);
    });
})
router.delete('/employee/:_id', (req, res) => {

    Employee.deleteEmployee(req.params._id, (err, employee) => {
        if (err) throw err;
        res.json(employee);
    });
})
router.delete('/production/:_id', (req, res) => {

    dailyProduction.deleteProduction(req.params._id, (err, production) => {
        if (err) throw err;
        res.json(production);
    });
})
router.get('/employee/:_id', (req, res) => {

    Employee.getEmployee(req.params._id, (err, employee) => {
        if (err) throw err;
        res.json(employee);
    });
})
router.get('/production/:_id', (req, res) => {

    dailyProduction.getProduction(req.params._id, (err, production) => {
        if (err) throw err;
        res.json(production);
    });
})
module.exports = router;