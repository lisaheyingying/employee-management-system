let mongoose = require('mongoose');
let dailyAssessingSchema = new mongoose.Schema({
    date: String,
    name: String,
    shift: String,
    line: Number,
    money: Number,

})

let dailyAssessing = module.exports = mongoose.model('dailymending', dailyAssessingSchema);

dailyAssessing.getAssessings = (timestamp, callback) => {
    dailyAssessing.find({
        date: timestamp
    }, callback);
}
dailyAssessing.addAssessing = (newAssessing, callback) => {
    dailyAssessing.create(newAssessing, callback);
}
dailyAssessing.updateAssessing = (id, newAssessing, callback) => {
    dailyAssessing.findByIdAndUpdate(id, newAssessing, callback);
}
dailyAssessing.deleteAssessing = (id, callback) => {
    dailyAssessing.findByIdAndRemove(id, callback);
}
dailyAssessing.getAssessing = (id, callback) => {
    dailyAssessing.findById(id, callback);
}