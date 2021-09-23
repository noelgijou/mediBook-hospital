const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose =require('./database/mongoose');

const jwt=require('jsonwebtoken');

username="noelgijou@gmail.com"
password="123456"

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());


app.post('/usermenu',(req,res)=>{
    var flag = 0;
});

app.get('/usermenu',(req,res)=>{
});

app.post('/login',(req,res)=>{
    console.log("gotinpost")
    console.log(req.body)
    let userData=req.body;
    if(!username){
        console.log("username not okay")
        res.status(401).send("Invalid Username")
    }
    else{
        if(password!==userData.password){
            console.log("password not okay")
            res.status(401).send("Invalid Password")
        }
        else{
            console.log("login okay aavum")
            let payload={subject:username+password,user:username}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token})
        }
    }
});

app.listen(3000, ()=> console.log('Server connected- Express up and running'));