const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose =require('./database/mongoose');

const jwt=require('jsonwebtoken');

const Patients = require('./database/models/patients.js'); 

username="noelgijou@gmail.com"
password="123456"

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
});




// app.use(bodyParser.json());


app.post('/usermenu',(req,res)=>{
    var flag = 0;
});

app.get('/usermenu',(req,res)=>{
});

// login
app.post('/login',(req,res)=>{
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log("App.js,login")
    var umail=req.body.user.mail;
    var upass=req.body.user.password;
    console.log("umail",umail)
    console.log("upass",upass)

    Patients.findOne({mail:umail})
    .then((value)=>{
        console.log("SUpposedley something",value)
        if(value.password == upass){
            console.log("login okay aavum")
            let payload={subject:username+password}
            let token=jwt.sign(payload,'secretKey')
            res.status(200).send({token,umail})
        }
        else{            
            console.log("password not okay")
            res.status(401).send("Invalid Password")
        }
    })
})

// signup
app.post('/adduser', function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header('Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS')
    console.log("App.js",req.body);
    var user = {
        name:req.body.user.name,
        mail:req.body.user.mail,
        password: req.body.user.password,
        phone: req.body.user.phone,
        gender: req.body.user.gender        
    }
    var user= new Patients(user);
    user.save();
})  

// get details
app.post('/getdetails',function(req,res) {
    console.log(req.body)
    
    Patients.findOne({mail:req.body.xyz})
    .then((value)=>{
        console.log("SUpposedley something",value)
    })

})


// update details
app.put('/updetails',(req,res)=>{
    console.log("LOL update")
})

app.listen(3000, ()=> console.log('Server connected- Express up and running'));