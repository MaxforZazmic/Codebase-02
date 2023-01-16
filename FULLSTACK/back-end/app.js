//require 
const express = require("express");
const https = require ("https");
const bodyParser = require ("body-parser");


//use 
const app = express ();
app.use (bodyParser.urlencoded({extended: true}));

app.get ("/api", (req, res) => {
res.json ({"users": ["userOne", "userTwo", "userThree"]})
});


app.listen (9090, () => {
    console.log("port 9090 has started");
});
