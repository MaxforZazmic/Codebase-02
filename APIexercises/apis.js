/* API's consist of 4 vital parts:
1. Endpoints
2. Paths
3. Parameters
4. Authentication

taken from: https://sv443.net/jokeapi/v2/#try-it
https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political&type=single&contains=debugging // this is the link

1.endpoint: https://v2.jokeapi.dev/joke/
2.Programming is a path : https://v2.jokeapi.dev/joke/Programming
3.parameter: https://v2.jokeapi.dev/joke/Programming?blacklistFlags=political&type=single&contains=debugging - after ?(question mark) there are parameters:
blacklistFlags=political  - this is a parameter. blacklistFlags is a key and political is a query.


weather api example:
https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0ec609b66feeab8f5f2d46cdf07ef435

jokeapi example:
https://sv443.net/jokeapi/v2/#try-it

// search for api documentations

1. make get request to external server node // you'll get a general info
2. https get node // after you find perferct match, you can

*/

// Endpoint/API initial steps

npm init // instal npm from terminal
npm install express // install npm express from terminal

const express = require("express"); // require express
const https = require("https");
const bodyParser = require('body-parser');

const app = express (); // start using express
app.use (bodyParser.urlencoded({extended: true})); // start using bodyparser


app.get ("/", function (request, response) {
  response.sendFile (__dirname + "/index.html");
});

app. post ("/" function (req, res) {
  console.log(req.body);
});

var weight  = (req.body.weight)
var height = (req.body.height);

var bmi = weight/(height*height);

res.send  ("your body mas index is " + bmi);


app. listen (8080, function () {
  console.log("app server has started!");
});
