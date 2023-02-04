const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userProfileSchema = mongoose.Schema(
  {
    User : {
        type: mongoose.Types.ObjectId, 
        ref: "User"
    },
    isActive : {
        type: Boolean, 
        isrequired   : true
    },
    imageURL : {
        type: String, 
    },
  },
  {
    timestamps: true,
  }
);


const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
