let mongoose = require('mongoose');
let monthProductionSchema = new mongoose.Schema({
    name: String,
    date: String,
    day: Number,
    night: Number,
    product: {
        c1: Number,
        c2: Number,
        c3: Number,
        c4: Number,
        c5: Number,
        c6: Number,
        c7: Number,
    }
})
//export default mongoose.model('monthProduction', monthProductionSchema);
let monthProduction = module.exports = mongoose.model('monthProduction', monthProductionSchema);