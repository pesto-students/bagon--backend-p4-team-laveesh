const Destination = require("../models/destinationModel");
const asyncHandler = require("express-async-handler");


const getDestination = asyncHandler(async (req, res) => {
    const destination = await Destination.find();
    res.json(destination);
  });
  
const registerDestination = asyncHandler(async (req, res) => {
    const { destinationName, description, image } = req.body;
  
    if (!destinationName || !description || !image) {
        res.status(400);
        throw new Error("Please Fill all the feilds");
        return;
      } else {
        const destination = new Destination({ destinationName, description, image });
    
        const createdDestination = await destination.save();
    
        res.status(201).json(createdDestination);
      }
  });
  
  const getDestinationById = asyncHandler(async (req, res) => {
    const destination = await Destination.findById(req.params.id);
  
    if (destination) {
      res.json(destination);
    } else {
      res.status(404).json({ message: "Destination not found" });
    }
  
    res.json(destination);
  });
  
  module.exports= {registerDestination, getDestination, getDestinationById}