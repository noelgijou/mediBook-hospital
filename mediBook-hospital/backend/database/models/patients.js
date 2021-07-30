const mongoose = require('mongoose');

const patSchema = new mongoose.Schema({
    Name:{
        type: String,
        trim: true,
        minLength:3
    },
    Age:{
        type: Number
    }
});

const patients = mongoose.model('patients', patSchema);

module.exports = patients;