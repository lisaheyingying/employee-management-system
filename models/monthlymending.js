let mongoose = require('mongoose');
let monthlyMendingSchema = new mongoose.Schema({
    date: String, // This date is first half month or last half month
    name: String,
    shift: String,
    money: Number,
    bonus: Number
})

let monthlyMending = module.exports = mongoose.model('monthlymending', monthlyMendingSchema);

monthlyMending.getMendings = (timestamp, callback) => {
    monthlyMending.find({
        date: timestamp
    }, callback);
}
monthlyMending.addMending = (newMending, callback) => {
    monthlyMending.create(newMending, callback);
}
monthlyMending.updateMending = (id, newMending, callback) => {
    monthlyMending.findByIdAndUpdate(id, newMending, callback);
}
monthlyMending.deleteMending = (id, callback) => {
    monthlyMending.findByIdAndRemove(id, callback);
}
monthlyMending.getMending = (id, callback) => {
    monthlyMending.findById(id, callback);
}