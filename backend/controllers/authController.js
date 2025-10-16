import User from "../models/User.js";
import otpGenerator from "otp-generator";
import jwt from "jsonwebtoken";

export const sendOtp = async (req, res) => {
  const { phone, whatsappUpdates } = req.body;
  if (!phone) return res.status(400).json({ message: "Phone number required" });

  let otp = otpGenerator.generate(4, { upperCaseAlphabets: false, specialChars: false });
  let otpExpires = new Date(Date.now() + 1 * 60 * 1000); // 1 minutes

  let user = await User.findOne({ phone });
  if (!user) user = new User({ phone });

  user.otp = otp;
  user.otpExpires = otpExpires;
  user.whatsappUpdates = whatsappUpdates;
  await user.save();

  console.log(` OTP for ${phone}: ${otp}`); 

  res.status(200).json({ message: "OTP sent successfully" });
};

export const verifyOtp = async (req, res) => {
  const { phone, otp } = req.body;
  const user = await User.findOne({ phone });
  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.otp !== otp || user.otpExpires < Date.now())
    return res.status(400).json({ message: "Invalid or expired OTP" });

  // OTP valid
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  user.otp = undefined;
  user.otpExpires = undefined;
  await user.save();

  res.status(200).json({ message: "Login successful", token });
};
