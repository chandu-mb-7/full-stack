import User from "../models/User.js";

export const saveUser = async (req, res) => {
  const { name, email } = req.body;
  const phone = req.user.phone;

  if (!name || !email)
    return res.status(400).json({ error: "Name and email required" });

  try {
    const existingUser = await User.findOne({ phone });
    if (existingUser) return res.status(400).json({ error: "User already exists" });

    const newUser = new User({ name, email, phone });
    await newUser.save();

    res.json({ message: "User saved successfully" });
  } catch (err) {
    res.status(500).json({ error: "Database error", details: err.message });
  }
};

export const protectedRoute = (req, res) => {
  res.json({ message: "Access granted", user: req.user });
};
