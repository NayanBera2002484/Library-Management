// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", userRoutes);
app.use("/api/books", require("./routes/bookRoutes.js"));
app.use("/api/admin", require("./routes/adminRoutes.js"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(5000, () => console.log("Server started on port 5000"));
  })
  .catch((err) => console.log("DB connection failed:", err));
