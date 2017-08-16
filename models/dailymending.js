let mongoose = require('mongoose');
let dailyMendingSchema = new mongoose.Schema({
    date: String,
    name: String,
    shift: String,
    category: String,
    production: Number,

})

let dailyMending = module.exports = mongoose.model('dailymending', dailyMendingSchema);

dailyMending.getMendings = (timestamp, callback) => {
    dailyMending.find({
        date: timestamp
    }, callback);
}
dailyMending.addMending = (newMending, callback) => {
    dailyMending.create(newMending, callback);
}
dailyMending.updateMending = (id, newMending, callback) => {
    dailyMending.findByIdAndUpdate(id, newMending, callback);
}
dailyMending.deleteMending = (id, callback) => {
    dailyMending.findByIdAndRemove(id, callback);
}
dailyMending.getMending = (id, callback) => {
    dailyMending.findById(id, callback);
}