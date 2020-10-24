//require modules
var express = require('express');

//configure app
var app = express();
var port = 5000;

//main get request
app.get('/',(req,res)=>res.json("server up and running"))

//server listen at port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))