//require
require('dotenv').config()
const express = require ("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require ("ejs");
const md5 = require ("md5");
const session = require ("express-session");
const passport = require("passport");
const passportLocalMongoose = require ("passport-local-mongoose");

//use
const app = express();
app.use (bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));

// use passport and session
app.use(session({
  secret: "everything is secret.",
  resave: false,
  saveUninitialized: false,
}));

app.use (passport.initialize());
app.use (passport.session());

//connect to db
mongoose.connect ("mongodb://localhost:27017/userDB",{ useNewUrlParser: true});

//create a schema
const userSchema = new mongoose.Schema ({
  email: String,
  password: String
});

//
userSchema.plugin(passportLocalMongoose);

//create a model
const User = new mongoose.model("User", userSchema);

//
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.get ("/secrets", function(req,res){
  if (req.isAuthenticated()){
    res.render("/secrets");
  }else {
    res.redirect("/login");
  }
});

//resgister handler: save user credentials into User collection and only after it show them secrets page
app.post ("/register", function(req,res){

User.register({username: req.body.username}, req.body.password, function (err,user){
  if (err) {
    console.log(err);
    res.redirect("/register");
  }else {
    passport.authenticate("local")(req,res, function(){
    res.redirect("/secrets");
    })
  }
})
});


// login page handler
app.post ("/login", function(req,res) {

const user = new User ({

username:req.body.username,
password: req.body.password
});
req.login(user,function(err) {
  if(err){
    console.log(err);
  }else{
    passport.authenticate("local")(req,res, function () {
      res.redirect("/secret");
    })
  }
});

});


app.listen (3041, function () {
  console.log("app started on 3041 port!");
});
