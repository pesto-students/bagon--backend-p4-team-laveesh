const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = 3001;
const userRoute = require("./routes/userRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running successfully");
});

app.use("/api/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`PORT connceted to ${PORT}`));
