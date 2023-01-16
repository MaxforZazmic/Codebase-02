//require 
const express = require("express");
const https = require ("https");
const bodyParser = require ("body-parser");


//use 
const app = express ();
app.use (bodyParser.urlencoded({extended: true}));

app.get ("/", function(req, res) {

})


app.listen(9090, function () {
    console.log("port 9090 has started");
});
