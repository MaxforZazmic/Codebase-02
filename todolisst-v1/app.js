const express = require("express");
const bodyParser = require('body-parser');

const app = express();
var items= [];
app.set('view engine', 'ejs');  // start using ejs view engine
app.use(bodyParser.urlencoded({extended: true}));


// START GET dayofaWeek API
app.get("/", function(req, res) {
  var today = new Date(); // new Date is javascript object that represents current day of a week
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};

var today = today.toLocaleDateString("en-US", options);
res.render ("list", {dayofaWeek: today, newListItems: items}); // this code renders list.ejs html file. looks at views folder to a list.ejs file.
// it's crucial to have views folder and list.ejs file. otherwise it won't see.
// and in this list.ejs file inside <%= dayofaWeek %> passes a variable day value.
});


// START post method API
app. post ("/", function (req,res) {
  item = req.body.newItem;

  items.push (item);

  res.redirect ("/");

});

// FINISH post method API


// FINISH  GET dayofaWeek API







app.listen(3030, function() {
  console.log("server started");
});
