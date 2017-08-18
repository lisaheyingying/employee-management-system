let express = require('express');
let router = express.Router();
let Employee = require('./models/model');

let dailyProduction = require('./models/dailyProduction');
let monthProduction = require('./models/monthProduction');
let dailyDeduction = require('./models/dailyDeduction');
let dailyMending = require('./models/dailyMending');
let monthlyMending = require('./models/monthlyMending');
let monthlyOending = require('./models/monthlyOending');

//******   Get request ********/

//******  Get a specific object *******/
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

router.get('/deduction/:_id', (req, res) => {

    dailyDeduction.getDeduction(req.params._id, (err, deduction) => {
        if (err) throw err;
        res.json(deduction);
    });
})

router.get('/mending/:_id', (req, res) => {

    dailyMending.getMending(req.params._id, (err, mending) => {
        if (err) throw err;
        res.json(mending);
    });
})

router.get('/monthlymending/:_id', (req, res) => {

    monthlyMending.getMending(req.params._id, (err, mending) => {
        if (err) throw err;
        res.json(mending);
    });
})


router.get('/employee', (req, res) => {
    Employee.getEmployees((err, employees) => {
        if (err) throw err;
        res.json(employees);
    });
})
router.get('/employees/name', (req, res) => {

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
router.get('/deductions/:date', (req, res) => {
    dailyDeduction.getDeductions(req.params.date, (err, deductions) => {
        if (err) throw err;
        res.json(deductions);
    });
})

router.get('/mendings/:date', (req, res) => {
    dailyMending.getMendings(req.params.date, (err, mendings) => {
        if (err) throw err;
        res.json(mendings);
    });
})
router.get('/monthlyoendings/:date', (req, res) => {
    monthlyOending.getOendings(req.params.date, (err, oendings) => {
        if (err) throw err;
        res.json(oendings);
    });
})


//******   Post request ********/
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
router.post('/deduction', (req, res) => {
    let newDeduction = {
        date: req.body.date,
        name: req.body.name,
        shift: req.body.shift,
        area: req.body.area,
        money: req.body.money
    }
    dailyDeduction.addDeduction(newDeduction, (err, Deduction) => {
        if (err) throw err;
        res.json(newDeduction);
    });
})

router.post('/mending', (req, res) => {
    let newMending = {
        date: req.body.date,
        name: req.body.name,
        shift: req.body.shift,
        category: req.body.category,
        production: req.body.production
    }
    dailyMending.addMending(newMending, (err, Mending) => {
        if (err) throw err;
        res.json(newMending);
    });
})

router.post('/monthlymending', (req, res) => {
    let newMending = {
        date: req.body.date,
        name: req.body.name,
        shift: req.body.shift,
        money: req.body.money,
        bonus: req.body.bonus
    }
    monthlyMending.addMending(newMending, (err, Mending) => {
        if (err) throw err;
        res.json(newMending);
    });
})
router.post('/monthlyoending', (req, res) => {
    let newOending = {
        date: req.body.date,
        name: req.body.name,
        shift: req.body.shift,
        money: req.body.money,
        bonus: req.body.bonus
    }
    monthlyOending.addOending(newOending, (err, Oending) => {
        if (err) throw err;
        res.json(newOending);
    });
})

//******   Put request ********/
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
router.put('/deduction/:_id', (req, res) => {
    let newDeduction = {

        date: req.body.date,
        name: req.body.name,
        shift: req.body.shift,
        area: req.body.area,
        money: req.body.money

    }
    dailyDeduction.updateDeduction(req.params._id, newDeduction, (err, deduction) => {
        if (err) throw err;
        res.json(deduction);
    });
})
router.put('/mending/:_id', (req, res) => {
    let newMending = {
        date: req.body.date,
        name: req.body.name,
        shift: req.body.shift,
        category: req.body.category,
        production: req.body.production
    }
    dailyMending.updateMending(req.params._id, newMending, (err, mending) => {
        if (err) throw err;
        res.json(mending);
    });
})
//******   Delete request ********/

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
router.delete('/deduction/:_id', (req, res) => {

    dailyDeduction.deleteDeduction(req.params._id, (err, deduction) => {
        if (err) throw err;
        res.json(deduction);
    });
})
router.delete('/mending/:_id', (req, res) => {

    dailyMending.deleteMending(req.params._id, (err, mending) => {
        if (err) throw err;
        res.json(mending);
    });
})

router.delete('/monthlymending/:_id', (req, res) => {

    monthlyMending.deleteMending(req.params._id, (err, mending) => {
        if (err) throw err;
        res.json(mending);
    });
})

module.exports = router;