const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose =require('./database/mongoose');

const jwt=require('jsonwebtoken');
const cors = require('cors');
const Patients = require('./database/models/patients.js'); 
const booknow = require('./database/models/book.js')
const records = require('./database/models/records.js')
username="noelgijou@gmail.com"
password="123456"

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors());
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
        console.log("Login details: ",value)
        if(value.password == upass){
            console.log("login okay aavum")
            let payload={subject:umail}
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
        gender: req.body.user.gender, 
        age: req.body.user.age,
        bloodgrp :req.body.user.bloodgrp
       
    }
    var user= new Patients(user);
    user.save();
})  

// get details
app.get('/getdetails/:xyz',function(req,res) {
    id = req.params.xyz
    console.log(id)
    
    Patients.findOne({mail:id})
    .then((value)=>{
        res.send(value)
    })

})


// update details
app.put('/update',(req,res)=>{
    console.log(req.body)
    id = req.body._id,
       
        name= req.body.name,
        age= req.body.age,
        phone = req.body.phone,
        bloodgrp= req.body.bloodgrp,
       

        Patients.findByIdAndUpdate({ "_id": id }, {
            $set: {
                "name": name,
                "age": age,
                "phone": phone,
                "bloodgrp": bloodgrp,
              
            }
        })
        .then(function() {
            res.send();
        })
})

app.post('/book' , (req, res)=>{
    var user = {
        
        mail:req.body.data.mail,
        date: req.body.data.date,
        doctor: req.body.data.doctorname,
        doctortype: req.body.data.doctortype, 
        
       
    }
    var user= new booknow(user);
    user.save();

    
})


app.get('/getbook/:id',function(req,res) {
    id = req.params.id
    console.log(id)
    
    booknow.find({mail:id})
    .then((value)=>{
        res.send(value)
        console.log(value)
    })

})

app.get('/del/:id', (req, res) => {


    id = req.params.id;
    console.log(id)
    booknow.findByIdAndDelete({ "_id": id })
        .then(() => {
            console.log('success')
            res.send();
        })
})

//getrecords
app.get('/getrecords/:id',(req,res)=>{
    id = req.params.id;
    console.log("reached get records: ",id)

    records.find({mail:id})
    .then((value)=>{
        res.send(value)
        console.log(value)
    })
})

app.listen(3000, ()=> console.log('Server connected- Express up and running'));