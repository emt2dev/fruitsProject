// Mongoose
const mongoose = require("mongoose");

// Connects to Mongoose on Port 27017
// leaves this connection open
mongoose.connect("mongodb://localhost:27017/fruitsDB");

//  C with mongoose part 1: need new schema/structure the incoming data
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  // rating: Number,  instead of this, add validation rating must be between 1 and 10
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const peopleSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

// Mongoose model ("collection/table name", Schema) it automatically pluralizes the name
const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", peopleSchema);

//  C with mongoose part 2
// template
// const fruit = new Fruit ({
//   name: "name"
//   rating: 10,
//   review: "Pretty solid as a fruit."
// });
//
const blackberries = new Fruit ({
  name: "blackberries",
  rating: 8,
  review: "delicious."
});
//
// pineapple.save();
//
// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });


//
// const orange = new Fruit ({
//   name: "orange",
//   rating: 4,
//   review: "sour."
// });
//
// const banana = new Fruit ({
//   name: "banana",
//   rating: 3,
//   review: "weird texture."
// });

// Fruit.insertMany([kiwi, orange, banana],(err)=>{
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDb")
//   }
// });
//  ^ this allows an array to save multiple fruits

// blackberries.save()
// person.save();
// // ^ commented out to prevent saving the same apple
//
// //  R with mongoose
Fruit.find((err, fruits)=>{
  if (err) {
    console.log(err);
  } else {
    // tells us the entire array
    // console.log(fruits);
    // loops through the fruits array and tells us the name only.

    // mongoose.connection.close();

    fruits.forEach((fruit)=>{
      console.log(fruit.name);
    });
  }
});
//
// //  U with mongoose
// Fruit.updateOne({_id: "61b505ee4bec33e0a821d284"}, {name: "Banana"}, (err)=>{
//   if(err){
//     console.log(err);
//   } else {
//         // mongoose.disconnect()
//     console.log("Successfully updated the document");
//   }
// });
// Person.updateOne({name:"John"}, {favoriteFruit: blackberries}, (err)=>{
//   if(err){
//     console.log(err);
//   } else {
//         // mongoose.disconnect()
//     console.log("Successfully updated the document");
//   }
// });





// //  D with mongoose
// Fruit.deleteOne({name: "blackberries"}, (err)=>{
//   if(err){
//     console.log(err);
//   } else {
//         mongoose.disconnect()
//     console.log("Successfully deleted the document");
//   }
// });
