let mongoose = require('mongoose');
let monthlyOendingSchema = new mongoose.Schema({
    date: String, // This date is first half month or last half month
    name: String,
    shift: String,
    money: Number,
    bonus: Number
})

let monthlyOending = module.exports = mongoose.model('monthlyoending', monthlyOendingSchema);

monthlyOending.getOendings = (timestamp, callback) => {
    monthlyOending.find({
        date: timestamp
    }, callback);
}
monthlyOending.addOending = (newOending, callback) => {
    monthlyOending.create(newOending, callback);
}
monthlyOending.updateOending = (id, newOending, callback) => {
    monthlyOending.findByIdAndUpdate(id, newOending, callback);
}
monthlyOending.deleteOending = (id, callback) => {
    monthlyOending.findByIdAndRemove(id, callback);
}
monthlyOending.getOending = (id, callback) => {
    monthlyOending.findById(id, callback);
}