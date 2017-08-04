let mongoose = require('mongoose');
let dailyProductionSchema = new mongoose.Schema({
    name: String,
    date: String,
    shift: String,
    area: String,
    c1: Number,
    c2: Number,
    c3: Number,
    c4: Number,
    c5: Number,
    c6: Number,
    c7: Number,
})

let dailyProduction = module.exports = mongoose.model('dailyProduction', dailyProductionSchema);

// dailyProduction.getProductions = callback => {
//     dailyProduction.find(callback);
// }
dailyProduction.getProductions = (timestamp,callback) => {
    dailyProduction.find({date:timestamp},callback);
}

dailyProduction.addProduction = (newProduction, callback) => {
    dailyProduction.create(newProduction, callback);
}
dailyProduction.updateProduction = (id, newProduction, callback) => {
    dailyProduction.findByIdAndUpdate(id, newProduction, callback);
}
dailyProduction.deleteProduction = (id, callback) => {
    dailyProduction.findByIdAndRemove(id, callback);
}
dailyProduction.getProduction = (id, callback) => {
    dailyProduction.findById(id, callback);
}