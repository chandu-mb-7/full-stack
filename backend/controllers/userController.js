import User from "../models/User.js";

export const saveUser = async (req, res) => {
  const { name, email } = req.body;
  const phone = req.user.phone; 

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email required" });
  }

  try {
    let user = await User.findOne({ phone });

    if (user) {
     
      user.name = name;
      user.email = email;
      await user.save();

      return res.json({
        message: "User logged in successfully",
        user,
      });
    }

    const newUser = new User({ name, email, phone });
    await newUser.save();

    res.json({
      message: "User saved successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Database error", details: err.message });
  }
};
