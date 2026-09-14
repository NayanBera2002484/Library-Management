// server/schema/user-schema.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  urn: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "User" }
});

module.exports = mongoose.model("User", userSchema);
