//mongoose-encryption, md5, bcrypt.
//require
require('dotenv').config()
const express = require ("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require ("ejs");
const md5 = require ("md5");

//use
const app = express();
app.use (bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

//connect to db
mongoose.connect ("mongodb://localhost:27017/userDB",{ useNewUrlParser: true});

//create a schema
const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

//create a model
const User = new mongoose.model("User", userSchema);

// render pages
app.get ("/", function(req,res) {
  res.render("home");
});

app.get ("/login", function(req,res) {
  res.render("login");
});

app.get ("/register", function(req,res) {
  res.render("register");
});

//resgister handler: save user credentials into User collection and only after it show them secrets page
app.post ("/register", function(req,res){

    const newUser = new User ({
    email: req.body.username,
    password: md5(req.body.password)
    });

    newUser.save(function (err) {
    if (err) {
      console.log(err);
    }else {
      res.render("secrets");
    }
    });

});

// login page handler
app.post ("/login", function(req,res) {

const email = req.body.username;
const password = md5(req.body.password);

User.findOne ({email: email}, function (err,foundUser){
  if (err) {
    console.log(err);
  }else {
    if (foundUser) {
  if (foundUser.password === password) {
        res.render ("secrets");
      }
    }
    }
  });
});





app.listen (3040, function () {
  console.log("app started on 3040 port!");
});
