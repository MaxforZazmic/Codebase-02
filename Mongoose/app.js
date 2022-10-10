//require mongoose
const mongoose = require('mongoose');

//connect to db
mongoose.connect ("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true});


//FRUITS COLLECTION

//create a schema (Schema is a structure of a db)
const fruitSchema = new mongoose.Schema ({
name: String,
rating: Number,
review: String
})

//create a model - this creates collection
const Fruit = mongoose.model("Fruit", fruitSchema); // "Fruit" is a collection name (in mongo it will shown as fruits, so with lower case + s) fruitSchema is a schema this collection should use

// create a document that will be inserted to
const fruit = new Fruit ({       // this (fruit )is a first document in Fruit collection. Fruit is comming from model, where we specified name of a collection.
name: "Apple",
rating: 7,
review: "pretty decent fruit"
});


// fruit.save(); // calls save method to save fruit document into Fruit collection in a fruitsDB database.

// FINISH FRUITS collection


// PEOPLE COLLECTION (another collection iside fruitsDB database)

// create a schema
const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
});

//create a model
const Person = mongoose.model ("Person", personSchema);

//create a document

const person = new Person ({
name:"Max",
age: 24
});

// person.save();

// FINISH PEOPLE COLLECTION

// DOGS COLLECTION

//create a schema
const dogSchema = new mongoose.Schema ({
name: String,
age: Number
});

//create a model
const Dog = mongoose.model ("Dog", dogSchema);

//create a document
const dog = new Dog ({
  name: "Charlie",
  age: 5
});

// dog.save();

// FINISH DOGS COLLECTION


// INSERT MANY DOCUMENTS AT ONCE IN FRUITS collection
const banana = new Fruit ({
name: "banana",
rating: 9,
review: "amazing"
});


const kiwi = new Fruit ({
name: "kiwi",
rating: 6,
review: "not so good"
});

const mango = new Fruit ({
name: "mango",
rating: 9,
review: "great fruit"
});

// Fruit.insertMany([banana,kiwi,mango], function(err) {  // we just added this callback to log if any err ocured.
//   if (err) {
//     console.log(err);
//   }else {
//     console.log("Successfully saved");
//   }
// });

// FINISH INSERTING MANY DOCUMENTS AT ONCE IN FRUITS collection




// FIND DOCUMENTS IN fruit's collection

Fruit.find (function(err, fruits) {
if (err) {
  console.log(err);
}else {
  console.log(fruits);
}

mongoose.connection.close();
});

// FINISH FIND DOCUMENTS IN fruit's collection

// UPDATE AND DELETE CODE

Fruit.updateOne({_id: "633f07d0bf77b9fda0fceca5"}, {name: "Peach"}, function(err){
  if (err) {
    console.log(err);
  }else {
    console.log("Successfully updated document");
  }
}); //in this id, we update name to "Peach"


Fruit.deleteOne ({name:"Peach"}, function(err) {
  if (err) {
    console.log(err);
  }else {
    console.log("Successfully deleted document");
  }
});
// UPDATE AND DELETE CODE





console.log("mongoose project started");
