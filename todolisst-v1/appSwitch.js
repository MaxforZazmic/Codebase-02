const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'ejs'); // start using ejs view engine


//  dayofaWeek API

app.get("/", function(req, res) {

  var today = new Date(); // new Date is javascript object that represents current day of a week
  var dayofaWeek = today.getDay(); // 0 equals to Sunday, 1 to Monday and etc.
  var day = "";

// switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }

  switch (dayofaWeek) {
    case 0:
      day = "Sunday"
      break;
    case 1:
      day = "Monday"
      break;
    case 2:
      day = "Tuesday"
      break;
    case 3:
      day = "Wednesday"
      break;
    case 4:
      day = "Thursday"
      break;
    case 5:
      day = "Friday"
      break;
    case 6:
      day = "Saturday"
      break;
    default:
console.log("Error: current day is equal to:" + dayofaWeek);
  }

res.render ("list", {
dayofaWeek: day
}); // this code renders list.ejs html file. looks at views folder to a list.ejs file.
// it's crucial to have views folder and list.ejs file. otherwise it won't see.
// and in this list.ejs file inside <%= dayofaWeek %> passes a variable day value.

});
// finish  dayofaWeek API


app.listen(3036, function() {
  console.log("server started");
});
