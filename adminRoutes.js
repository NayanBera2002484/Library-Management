const express = require("express");
const router = express.Router();
const { getAllUsers, deleteUser } = require("../controller/adminController");

router.get("/users", getAllUsers);
router.delete("/user/:id", deleteUser);

module.exports = router;
