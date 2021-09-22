const express = require('express');
const app = express();
const mongoose =require('./database/mongoose');

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/usermenu',(req,res)=>{
    var flag = 0;
});

app.get('/usermenu',(req,res)=>{
});

app.post('/login',(req,res)=>{
});
app.listen(3000, ()=> console.log('Server connected- Express up and running'));