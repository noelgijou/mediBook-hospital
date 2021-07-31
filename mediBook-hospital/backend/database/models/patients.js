const mongoose = require('mongoose');

const patSchema = new mongoose.Schema({
    mail:{
        type: String,
        trim: true,
        minLength:3
    },
    name:{
        type: String,
        trim: true,
        minLength:3
    },
    age:{
        type: Number
    },
    phone:{
        type: Number
    },
    gender:{
        type: String,
        trim: true,
        minLength:3
    },
    bloodgrp:{
        type:String,
        trim: true,
        minLength:2
    },
    medHistory:{
        type: Object
    }
});

const patients = mongoose.model('patients', patSchema);

module.exports = patients;