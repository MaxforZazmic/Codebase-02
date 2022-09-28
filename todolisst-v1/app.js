const express = require("express");
const bodyParser = require('body-parser');


const app = express();
var items= [];
let workItems= [];
app.set('view engine', 'ejs');  // start using ejs view engine
app.use(bodyParser.urlencoded({extended: true}));
app.use (express.static ("public"));


// START GET dayofaWeek API
app.get("/", function(req, res) {
  var today = new Date(); // new Date is javascript object that represents current day of a week
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};
var today = today.toLocaleDateString("en-US", options);

res.render ("list", {
dayofaWeek: today,
newListItems: items
});
});
// FINISH  GET dayofaWeek API



// START post method API
app. post ("/", function (req,res) {
  item = req.body.newItem;

  items.push (item);

  res.redirect ("/");

});

// FINISH post method API









app.listen(3030, function() {
  console.log("server started");
});
