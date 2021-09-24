const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://user1:user1@medibook.pcoco.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=> console.log("Database connected"))
    .catch((error)=> console.log(error));

module.exports = mongoose;


// const uri = "mongodb+srv://userone:Dysph0r!c@medibook.xc9ec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// mongodb+srv://hrishi:BhbQd6P2sVFYSxQ@hkm7.js3cl.mongodb.net/test