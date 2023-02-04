const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const placesSchema = mongoose.Schema(
  {      
    placeName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    dates: {
      type: String,
      required: true,
    },
    inclusions: {
      type: String,
      required: true,
    },
    prices: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Places = mongoose.model("Places", placesSchema);

module.exports = Places;
