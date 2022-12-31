const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const PORT = 3000;

const app = express();
dotenv.config();
connectDB();

app.listen(PORT, console.log(`PORT connceted to ${PORT}`));
