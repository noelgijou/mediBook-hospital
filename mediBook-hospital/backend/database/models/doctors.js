const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        minLength:3
    },
    spec:{
        type: String,
        minLength:3
    }
});

const docs = mongoose.model('docs', docSchema);

module.exports = docs;