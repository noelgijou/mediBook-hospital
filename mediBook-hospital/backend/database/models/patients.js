const mongoose = require('mongoose');

const patSchema = new mongoose.Schema({
    mail:String,
    name:String,
    age:String,
    password:String,
    phone:String,
    gender:String,
    bloodgrp:String,    
});

var Patients = mongoose.model('patients', patSchema);

module.exports = Patients;