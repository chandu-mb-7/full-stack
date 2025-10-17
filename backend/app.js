
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import jwt from "jsonwebtoken";
// import mongoose from "mongoose";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const OTP_EXPIRY_MS =   60 * 1000;
// const JWT_SECRET = "your-secret-key";

// mongoose.connect("mongodb://127.0.0.1:27017/nobroker_clone", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log(" MongoDB connected"))
//   .catch((err) => console.log(" MongoDB error:", err));

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
//   phone: { type: String, required: true, unique: true },
// });

// const User = mongoose.model("User", userSchema);

// const otpStore = new Map();

// function generateOtp() {
//   return Math.floor(1000 + Math.random() * 9000).toString();
// }

// app.post("/send-otp", (req, res) => {
//   const { phone } = req.body;
//   if (!phone) return res.status(400).json({ error: "Phone number required" });

//   const otp = generateOtp();
//   otpStore.set(phone, { otp, expiresAt: Date.now() + OTP_EXPIRY_MS });

//   console.log(` OTP for ${phone}: ${otp}`);
//   res.json({ message: "OTP generated successfully (dummy)", otp });
// });

// app.post("/verify-otp", (req, res) => {
//   const { phone, otp } = req.body;
//   if (!phone || !otp) return res.status(400).json({ error: "Phone and OTP required" });

//   const record = otpStore.get(phone);
//   if (!record) return res.status(400).json({ error: "No OTP generated for this number" });
//   if (Date.now() > record.expiresAt) return res.status(400).json({ error: "OTP expired" });
//   if (record.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

//   const token = jwt.sign({ phone }, JWT_SECRET, { expiresIn: "1h" });
//   otpStore.delete(phone);

//   res.json({ message: "OTP verified successfully", token });
// });

// app.post("/save-user", async (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ error: "No token provided" });

//   const token = authHeader.split(" ")[1];
//   let decoded;
//   try {
//     decoded = jwt.verify(token, JWT_SECRET);
//   } catch {
//     return res.status(403).json({ error: "Invalid or expired token" });
//   }

//   const { name, email } = req.body;
//   if (!name || !email) return res.status(400).json({ error: "Name and email required" });

//   try {
//     const existingUser = await User.findOne({ phone: decoded.phone });
//     if (existingUser) return res.status(400).json({ error: "User already exists" });

//     const newUser = new User({ name, email, phone: decoded.phone });
//     await newUser.save();

//     res.json({ message: "User saved successfully" });
//   } catch (err) {
//     res.status(500).json({ error: "Database error", details: err.message });
//   }
// });

// app.get("/protected", (req, res) => {
//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ error: "No token provided" });

//   const token = authHeader.split(" ")[1];
//   try {
//     const decoded = jwt.verify(token, JWT_SECRET);
//     res.json({ message: "Access granted", user: decoded });
//   } catch {
//     res.status(403).json({ error: "Invalid or expired token" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
