const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    mail:{
        type: String,
        trim: true,
        minLength:3
    },
    type:{
        type: Number,
        trim: true
    },
    passwd:{
        type: String,
    }
});

const auth = mongoose.model('auth', authSchema);

module.exports = auth;