const express = require('express');
const app = express();

const mongoose =require('./database/mongoose');

app.get('/', function(req,res){
    res.send("You're not supposed to be here!!")
});

app.listen(8080, ()=> console.log('Server connected- Express up and running, Database connected'));