
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import twilio from "twilio";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("DB error:", err));

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const otpSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  otp: String,
  expiresAt: Date,
});

const Otp = mongoose.model("Otp", otpSchema);

const generateOTP = () => Math.floor(1000 + Math.random() * 9000).toString();

app.post("/send-otp", async (req, res) => {
  try {
    const { phone, viaWhatsApp } = req.body;
    if (!phone) return res.status(400).json({ error: "Phone required" });

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 60 * 1000);

    await Otp.findOneAndUpdate({ phone }, { otp, expiresAt }, { upsert: true });

    const from = viaWhatsApp
      ? process.env.WHATSAPP_FROM
      : process.env.TWILIO_PHONE_NUMBER;
    const to = viaWhatsApp ? `whatsapp:${phone}` : phone;

    await client.messages.create({
      body: `Your OTP is ${otp}`,
      from,
      to,
    });

    res.json({ success: true, message: "OTP sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/verify-otp", async (req, res) => {
  try {
    const { phone, otp } = req.body;
    const record = await Otp.findOne({ phone });

    if (!record) return res.status(400).json({ error: "OTP not found" });
    if (record.expiresAt < new Date()) return res.status(400).json({ error: "OTP expired" });
    if (record.otp !== otp) return res.status(400).json({ error: "Invalid OTP" });

    await Otp.deleteOne({ phone });
    res.json({ success: true, message: "OTP verified" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
