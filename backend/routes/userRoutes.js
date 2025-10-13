const express = require("express");
const User = require("../models/User");

const router = express.Router();

// POST: Register new user
router.post("/", async (req, res) => {
  try {
    const { name, course } = req.body;
    const newUser = new User({ name, course });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error saving user", error });
  }
});

// GET: Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

module.exports = router;
