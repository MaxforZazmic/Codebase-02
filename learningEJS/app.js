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
  res.render ("pages/index", {  //express and EJS directly looks into views folder in root directory. so no need to contain views/pages/index into path.
    user:user
  })
}) ;


app.listen (3000, function (req, res) {
  console.log("app started on 3000 port");
});
