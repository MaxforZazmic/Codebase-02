const express = require ("express");
const https = require("https");
const bodyParser = require('body-parser');
const request = require ("request");

const api = express(); // start using express
api.use (bodyParser.urlencoded({extended: true}));
api.use (express.static("public"));

// get data from interface code. p.s. in HTML you need to have form, this form should have action and action value should be the same endpoint where you're sending html from)
api.get ("/", function(req,res) {
res.sendFile (__dirname + "/signup.html");
});

// you indetify input values by input names. so in HTML inputs always add name="name"  to parse data by name identifier.
api.post ("/", function (req, res) {
const name = req.body.Fname;
const lname = req.body.Lname;
const email = req.body.Uemail;

console.log(name, lname, email);

const data = {
members: [
  {
  email_address: email,
  status: "subscribed",
  merge_fields: {
    FNAME: name,
    LNAME: lname,

  }
  }
]
};

const jsonData = JSON.stringify(data);  // this is  finished version of data that app will pass to Mailchimp server.

});

//                POST THIS DATA TO MAILCHIMP API

// 1. generate API key from the mailchimp user account
// 2. find unique audience id


const url = "https://us11.api.mailchimp.com/3.0/lists/dc17d5e518";
const options =  {
method: "POST",
auth: "max:6bd66e9acb70b24d950c5dae8f7416c7-us11",
};

const request = https.request (url, options, function (response) {

if (response.statusCode === 200) {
  res.send ("successfully subscribed");
}else {
  res.send ("error with signing up. please try again");
}


response.on ("data", function (data) {
  console.log(JSON.parse(data));
});
});

request.write (jsonData);
request.write (end);

// // 6bd66e9acb70b24d950c5dae8f7416c7-us11
// // dc17d5e518.





api.listen (8085, function () {
  console.log("server started on port 8085");
});
