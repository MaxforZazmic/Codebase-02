//you need to create two folders 1. back-end and 2. front-end. 

//in back-end folder, you should follow next steps: 

npm init // instal npm from terminal
npm install express // install npm express from terminal

const express = require("express"); // require express
const https = require("https");
const bodyParser = require('body-parser');

const app = express (); // start using express
app.use (bodyParser.urlencoded({extended: true})); // start using bodyparser

//endpoint 
app.get ("/", function (request, response) {
    response.sendFile (__dirname + "/index.html");
  });

//run port 
app.listen (8080, function(){
    console.log("port 8080 has started");
});


// in the front-end folder you need to follow next steps
npx create-react app . // run this in console 

// after this command installs react app, in App.js you can create simple components 
import React from "react";

const App = () => {
return (
  <div>
    <h1>Hello</h1>
  </div>

)
};

export default App;