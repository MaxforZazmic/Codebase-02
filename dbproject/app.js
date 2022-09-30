const MongoClient = require ("mongodb").MongoClient;
const assert = require("assert"); //



// START to create connection to DB

// connection url
const url = "mongodb://localhost:27017";

//DB name

const dbName = "myproject"; // db name

//create a mongo client

const client = new MongoClient (url);

// use connect method to connect to the server
client/conect(function (err) {
assert.equal (null,err);
console.log("connected successfyully to server");

const db = client.db (dbName);
  client.close();
});

// FINISH creating connection to db


// START inserting document to collection

const insertDocuments = function (db, callback) {

const collection = db.collection ("documents");

collection.insertMany ( [
  {a:1},
  {a:2},
  {a:3}
], function (err, result) {
  assert.equal (err, null);
  assert.equal (3, result.result.n);
  assert.equal (result.ops.length);
  console.log("inserted 3 documents into collectio");
  callback (resulr);
});
}


}
