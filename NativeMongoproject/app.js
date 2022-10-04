const MongoClient = require ("mongodb").MongoClient;
const assert = require("assert"); //


// CREATE A CONNECTION TO DB

// connection url
const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.0";

//DB name
const dbName = "things"; // this db might not be created but it will create one while connecting.

//create a new MongoClient
const client = new MongoClient (url);

// Use connect method to connect to the Server
client.connect(function (err) {
assert.equal (null, err);
console.log("Successfully connected to server");

const db = client.db (dbName);

insertDocuments(db, function () {
    client.close();
   })
});

// FINISH CREATING CONNECTION TO DB


// START INSERTING DATA TO DB

const insertDocuments = function (db, callback) {

const collection = db.collection ("things");

collection.insertMany ( [
  {
_id: 1,
name: "Pencils",
price: 1.4,
stock: 12
  },
  {
  _id: 2,
  name: "Pen",
  price: 1.8,
  stock: 21
  },

  {
  _id: 3,
  name: "Bag",
  price: 20.1,
  stock: 10
}
], function (err, result) {
  assert.equal (err, null);
  assert.equal (3, result.result.n);
  assert.equal (3, result.ops.length);
  console.log("inserted 3 documents into collectio");
  callback (result);
});
}

// FINISH INSERTING DATA TO DB
