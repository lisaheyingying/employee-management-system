let mongoose = require('mongoose');
let dailyDeductionSchema = new mongoose.Schema({
    date: String,
    name: String,
    shift: String,
    area: String,
    money: Number

})

let dailyDeduction = module.exports = mongoose.model('dailydeduction', dailyDeductionSchema);

// dailyDeduction.getDeductions = callback => {
//     dailyDeduction.find(callback);
// }
dailyDeduction.getDeductions = (timestamp, callback) => {
    dailyDeduction.find({
        date: timestamp
    }, callback);
}

dailyDeduction.addDeduction = (newDeduction, callback) => {
    dailyDeduction.create(newDeduction, callback);
}
dailyDeduction.updateDeduction = (id, newDeduction, callback) => {
    dailyDeduction.findByIdAndUpdate(id, newDeduction, callback);
}
dailyDeduction.deleteDeduction = (id, callback) => {
    dailyDeduction.findByIdAndRemove(id, callback);
}
dailyDeduction.getDeduction = (id, callback) => {
    dailyDeduction.findById(id, callback);
}