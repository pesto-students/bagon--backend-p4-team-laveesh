const express = require("express");
const cors= require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = 3001;
const userRoute = require("./routes/userRoute");
const destinationRoute = require("./routes/destinationRoute");
const placeRoute = require("./routes/placeRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/users", userRoute);
app.use("/api/destination", destinationRoute)
app.use("/api/places", placeRoute)
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`PORT connceted to ${PORT}`));
