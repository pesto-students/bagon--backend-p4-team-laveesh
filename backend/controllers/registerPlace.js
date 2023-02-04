const Places = require("../models/placesModel");
const asyncHandler = require("express-async-handler");


const getPlace = asyncHandler(async (req, res) => {
    const place = await Places.find();
    res.json(place);
  });
  
const registerPlace = asyncHandler(async (req, res) => {
    const { placeName, description, image, dates, inclusions, prices } = req.body;
  
    if (!placeName || !description || !image || !dates|| !inclusions|| !prices) {
        res.status(400);
        throw new Error("Please Fill all the fields");
        return;
      } else {
        const place = new Places({ placeName, description, image, dates, inclusions, prices });
    
        const createdPlace = await place.save();
    
        res.status(201).json(createdPlace);
      }
  });
  
  const getPlaceById = asyncHandler(async (req, res) => {
    const place = await Places.findById(req.params.id);
  
    if (place) {
      res.json(place);
    } else {
      res.status(404).json({ message: "Place not found" });
    }
  
    res.json(place);
  });
  
  module.exports= {registerPlace, getPlace, getPlaceById}