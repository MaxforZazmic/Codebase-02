// https://blog.logrocket.com/how-to-use-ejs-template-node-js-application/


const express = require('express')
const app = express();


app.set('view engine', 'ejs')

const client = {
  firstName: "Max",
  lastName: "Verstappen"

}

const user = {
Fname: "Daniel",
Lname: "Ricciardo"

}

app.get ("/", function (req,res) {
  res.render ("pages/index", {  // res.render() will look in a views folder for the view. So you only have to define pages/index since the full path is views/pages/index.
    user:user
  })
}) ;


app.listen (3000, function (req, res) {
  console.log("app started on 3000 port");
});
