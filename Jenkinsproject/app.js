const express = require("express");
const bodyParser = require ("body-parser");

const app = express();
app.use (bodyParser.urlencoded({extended: true}));



app.get ("/", function(req,res) {
  res.send ("hello world!")
});



app.listen (4000, function(){
  console.log("app started on port 4000");
});
