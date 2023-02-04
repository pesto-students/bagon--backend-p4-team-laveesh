const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const bookedPackagesSchema = mongoose.Schema(
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


const bookedPackages = mongoose.model("BookedPackages", userSchema);

module.exports = bookedPackages;
