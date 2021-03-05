const express= require('express');
const mongoose = require("./database/config");
const bodyParser= require('body-parser');
const fs = require('fs');
const app= express();
const cors = require('cors');
const loggers = require('./database/loggs');


//router

let RouteUser= require('./route/routeUser');
let RouteCategory= require('./route/routeCategory');
let RouteQuiz= require('./route/routeQuiz');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, PUT, DELETE, OPTION");
    next();
    });

app.use("/api",RouteUser);
app.use("/api",RouteCategory);
app.use("/api",RouteQuiz);


app.use((req,res,next)=>{
    res.status(404).send('Sorry Dont find this route');
    
});
const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    loggers.info(`Server listen this Port ${PORT}`);
    loggers.error("sommting wrong");
});

