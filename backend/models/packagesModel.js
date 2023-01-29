const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const PackagesSchema = mongoose.Schema(
  {      
    place : {
        type: mongoose.Types.ObjectId, 
        ref: "Places"
    },
    destination : {
        type: mongoose.Types.ObjectId, 
        ref: "Destination"
    }
    
  },

  {
    timestamps: true,
  }
);

const Packages = mongoose.model("Packages", PackagesSchema);

module.exports = Packages;
