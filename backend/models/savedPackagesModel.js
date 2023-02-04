const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema(
  {
    packages : {
        type: mongoose.Types.ObjectId, 
        ref: "Packages "
    },
    User : {
        type: mongoose.Types.ObjectId, 
        ref: "User"
    }
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", userSchema);

module.exports = User;
