const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please enter name for the user"]
    },
    age: {
        type: Number,
        required: [true, "Please enter age"]
    },
    email: {
        type: String,
        required: [true, "Please enter email address"]
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User',userSchema);
