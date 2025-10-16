require('dotenv').config();
const express = require('express');
const twilio = require('twilio');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

let otpStore = {}; // Temporary in-memory store

// Generate OTP
function generateOTP(length = 4) {
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10);
  }
  return otp;
}

app.post('/send-otp', async (req, res) => {
  console.log("Request body:", req.body); // <- check if phone exists
  const { phone } = req.body;
  if (!phone) return res.status(400).json({ error: 'Phone number required' });

  const otp = generateOTP();
  otpStore[phone] = { otp, expires: Date.now() + 1 * 60 * 1000 }; // 1 min expiry

  try {
    const message = await client.messages.create({
      body: `Your OTP is ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone
    });

    console.log("OTP generated:", otp);  // <- check if OTP is generated
    console.log("Twilio SID:", message.sid);

    return res.json({
      success: true,
      otp: otp,
      sid: message.sid
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
});


// Verify OTP endpoint
app.post('/verify-otp', (req, res) => {
  const { phone, otp } = req.body;
  const record = otpStore[phone];

  if (!record) return res.status(400).json({ error: 'OTP not sent' });
  if (record.expires < Date.now()) {
    delete otpStore[phone];
    return res.status(400).json({ error: 'OTP expired' });
  }
  if (record.otp !== otp) return res.status(400).json({ error: 'Invalid OTP' });

  delete otpStore[phone]; // OTP used
  return res.json({ success: true, message: 'OTP verified!' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
