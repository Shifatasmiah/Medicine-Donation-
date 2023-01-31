const mongoose = require("mongoose");
const validator = require("validator");



const Tasks = mongoose.model("Tasks", {
    description: {
      type: String,
      required: true,
      trim: true,
    },
   

    Medicine_Name:{
      type: String,
      required:true,
      trim:true,
    },
    tablet_count:{
      type:Number,
      required:true,
    },
    Expiry_Date:{
      type:Number,
      validate(value) {
        if (!validator.isDate(value)) {
          throw new Error("Date is invalid");
        }
      },
    }
  });
module.exports=Tasks  