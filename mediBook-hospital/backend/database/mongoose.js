const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/test',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log("Database connected"))
    .catch((error)=> console.log(error));

module.exports = mongoose;