import React from "react";
import ReactDOM from "react-dom";
import Card from "./compononets/Card";
import Cardtwo from "./compononets/Cardtwo";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Charles Leclerc"
      email="b@beyonce.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
    />

    <Cardtwo
      name="Max Verstappen"
      email="any@where.com"
      img="https://upload.wikimedia.org/wikipedia/en/b/b9/Jack_Bauer.jpg"
      phone="+134 444 444"
    />

    <input id="Fname" placeholder="who do you like" />
  </div>,
  document.getElementById("root")
);
