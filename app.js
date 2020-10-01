const express = require("express");
const morgan = require("morgan");

const app = express();//calls express function

//logging middleware
app.use(morgan('dev'));


//static middleware - this serves up static files from a public folder without having to do
//an app.get for each individual file
app.use(express.static(__dirname + "/"));

//body parsing middleware
app.use(express.urlencoded({extended:false}));

//send a simple hello world
app.get('/', (req,res,next) => res.send('hello world'));


