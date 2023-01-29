const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const destinationSchema = mongoose.Schema(
  {
    destinationName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


const Destination = mongoose.model("Destination", destinationSchema);

module.exports = Destination;
