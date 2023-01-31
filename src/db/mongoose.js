const mongoose = require("mongoose");
// const validator = require("validator");
mongoose.connect("mongodb://127.0.0.1:27017/Medicine-donation", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify:false
});


// user model use kore user create kora .eta lagbe na jodi postman use kore kora hoy.

// const me = new User({
//   name: "  mike  ",
//   age: 23,
//   email: "  tasmiah@gmail.com  ",
//   password: "red27654  ",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });

// const Tasks = mongoose.model("Tasks", {
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   completed: {
//     type: Boolean,
//     optional: true,
//     default: false,
//   },
// });

// same as user ,postman use kore korle js file e data input dite hobe na .

// const task = new Tasks({
//   description: "  learn the mongoose library",
//   //completed: false,
// });
// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   });
