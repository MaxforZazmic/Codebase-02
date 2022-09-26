const express = require ("express");
const bodyParser = require('body-parser');

const app = express();
app.use (bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs'); // start using ejs view engine


//  current day API

app.get ("/", function (req,res) {

var today = new Date (); // new Date is javascript object that represents current day of a week
var currentDay = today.getDay();
var day = "";

if ( currentDay === 6 || currentDay === 0 ) {   // 6 equals Saturday, 0 equals Sunday
  day = "Weekend";
  res.render ("list", {dayofaWeek: day }); // this code renders list.ejs html file. looks at views folder to a list.ejs file. it's crucial to have views folder and list.ejs file.
// otherwise it won't see. and in this list.ejs file inside <%= dayofaWeek %> passes a variable day, which here equals to Weekend.
} else {
  day = "Weekday";
res.render ("list", {dayofaWeek: day});
};

// this way you can create logic for each day of a week e.g. if currenDay = 1 var day =Monday and you'll print it's Monda

});
// finish  current day API


app.listen (3031, function () {
  console.log("server started");
});
