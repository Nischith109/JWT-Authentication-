require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const app = express();
const MONGO_URL = process.env.MONGO_URL;
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB");
});
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("API running");
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});