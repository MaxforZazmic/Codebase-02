// require 
const express = require ("express");

//start using 
const app = express()


app.get ("/api",  (req, res) => {
  res.json ({"users": ["UserOne", "UserTwo", "UserThree", "UserFor"] })
})


app.listen (3090, () => {
  console.log("server started on 3090 port");
});
