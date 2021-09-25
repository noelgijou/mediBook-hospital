const mongoose = require('mongoose');

const recdets = new mongoose.Schema({
    mail:String,
    name:String,
    date:String,
    details:String,
});

var Records = mongoose.model('records', recdets);

module.exports = Records;