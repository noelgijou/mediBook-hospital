const mongoose = require('mongoose');

const patSchema = new mongoose.Schema({
    mail:String,
    date:String,
    doctor:String,
    doctortype:String,
        
});

var Patients = mongoose.model('booking', patSchema);

module.exports = Patients;