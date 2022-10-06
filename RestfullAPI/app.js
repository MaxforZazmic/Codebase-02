//require
const express = require ("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require ("ejs");

//use
const app = express(); // start using express
app.use (bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// connect to db
mongoose.connect ("mongodb://localhost:27017/wikiDB",{ useNewUrlParser: true});

//create a schema
const articleSchema = {
  title: String,
  content: String
};

//create a model
const Article = mongoose.model("Article", articleSchema);


//get

app.get ("/articles", function(req,res) {
Article.find(function(err,foundArticles) {
  console.log(foundArticles);

  if (!err) {
    res.send (foundArticles);
  }else {
    res.send(err);
  }
});
});










app.listen (3035, function() {
  console.log("server started on 3035 port");
});
