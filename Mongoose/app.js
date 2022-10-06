
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
name:String
});

const Student = mongoose.model("student",userDataSchema);




// // START INSERTING DATA TO DB
//
// const fruitSchema = new mongoose.Schema ({
//   name: String,
//   rating: Number,
//   review: String
// });
//
// const Fruit = mongoose.model ("Item", fruitSchema);
//
// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 10,
//   review: "tasty"
// });
//
// fruit.save();
//
// console.log("started");
// // FINISH INSERTING DATA TO DB
