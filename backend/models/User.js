import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  otp: String,
  otpExpires: Date,
  whatsappUpdates: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("User", userSchema);
