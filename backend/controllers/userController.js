import User from "../models/User.js";
import nodemailer from "nodemailer";


export const saveUser = async (req, res) => {
  try {
    let { name, email } = req.body;
    let phone = req.user.phone;

    if (!name || !email || !phone)
      return res.status(400).json({ error: "Name, email, and phone are required" });

    email = email.trim().toLowerCase();
    phone = phone.replace(/\s+/g, "").replace(/^\+?91/, "");

    const existingUser = await User.findOne({
      $or: [{ email }, { phone }],
    }).collation({ locale: "en", strength: 2 });

    if (existingUser) {
      return res.status(400).json({
        error: "User already exists. Please login instead.",
      });
    }
    const newUser = new User({ name, email, phone });
    await newUser.save();

    await sendWelcomeEmail(newUser);

    res.status(201).json({
      message: "Signup successful! Welcome email sent.",
      user: newUser,
    });
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(500).json({ error: "Server error", details: err.message });
  }
};

export const checkUserExists = async (req, res) => {
  try {
    let phone = req.user.phone;
    if (!phone) {
      return res.status(400).json({ error: "Phone not found in token" });
    }

    // 🔹 Normalize phone number to 10 digits
    phone = phone.toString().trim().replace(/\s+/g, "").replace(/^(\+91|91)/, "");

    console.log("Token Phone:", req.user.phone);
    console.log("Normalized Phone:", phone);

    const user = await User.findOne({
      $or: [{ phone }, { phone: `+91${phone}` }, { phone: `91${phone}` }],
    });

    if (user) {
      console.log("User found:", user.email || user.phone);
      return res.status(200).json({ exists: true, user });
    } else {
      console.log("No user found for:", phone);
      return res.status(200).json({ exists: false });
    }
  } catch (err) {
    console.error("Check-user error:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    let phone = req.user.phone;
    if (!phone) {
      return res.status(400).json({ error: "Phone not found in token" });
    }

    // Normalize phone
    phone = phone.toString().trim().replace(/\s+/g, "").replace(/^(\+91|91)/, "");

    const user = await User.findOne({
      $or: [{ phone }, { phone: `+91${phone}` }, { phone: `91${phone}` }],
    });

    if (!user) {
      return res.status(404).json({
        error: "No account found with this number. Please sign up first.",
      });
    }

    console.log("Login successful for:", user.email || user.phone);
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error during login" });
  }
};


const sendWelcomeEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"NoBroker Team" <${process.env.EMAIL_USER}>`,
      to: user.email,
      subject: "Welcome to NoBroker – India's Largest Real Estate Platform",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
          <h2 style="color:#16a085;">Welcome to NoBroker!</h2>
          <p>
            India's largest real estate website that helps you find, rent, and sell homes without paying brokerage.
          </p>
          <p>Your account has been created with the following details:</p>
          <ul style="line-height:1.8; padding-left: 20px;">
            <li><strong>Name:</strong> ${user.name}</li>
            <li><strong>Contact No:</strong> +91${user.phone}</li>
            <li><strong>Email:</strong> ${user.email}</li>
          </ul>
          <br/>
          <p>Thanks,</p>
          <p><strong>The NoBroker Team</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Welcome email sent to:", user.email);
  } catch (error) {
    console.error("Error sending welcome email:", error);
  }
};
