const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors"); 

const AdminRoutes = require("./Routes/AdminRoutes.js");
const healthFormRoutes = require("./Routes/healthFormRoutes.js");


dotenv.config();

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error("DB connection error:", err));

  
app.use('/api/admin', AdminRoutes);
app.use("/api/healthform", healthFormRoutes);


const PORT = process.env.PORT ;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
