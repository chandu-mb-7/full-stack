

import React, { useState } from "react";
import "./LoginModal.css";
import { IoClose } from "react-icons/io5";
import signupHome from "../assets/signupHome.png";

const LoginModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [whatsapp, setWhatsapp] = useState(true);

  if (!isOpen) return null;

  const sendOTP = async () => {
    try {
      const fullPhone = `${countryCode}${phone}`;
      const res = await fetch("http://localhost:5000/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(2);
        setMessage("OTP sent successfully!");
      } else {
        setMessage(data.error || "Error sending OTP");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error sending OTP");
    }
  };

  const verifyOTP = async () => {
    try {
      const fullPhone = `${countryCode}${phone}`;
      const res = await fetch("http://localhost:5000/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("OTP verified successfully!");
        setStep(1);
        setPhone("");
        setOtp("");
        onClose();
      } else {
        setMessage(data.error || "Invalid OTP");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error verifying OTP");
    }
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <IoClose size={22} />
        </button>

        <div className="login-left">
          <img src={signupHome} alt="House" className="login-left-img" />
          <h3 className="login-left-title">Login/Sign up</h3>
          <ul className="login-left-list">
            <li>Zero Brokerage.</li>
            <li>Thousands of new listings daily.</li>
            <li>100 Cr+ Brokerage saved monthly.</li>
          </ul>
        </div>

        <div className="login-right">
          <h4 className="login-heading">
            {step === 1 ? "Enter phone to continue" : "Enter OTP"}
          </h4>

          {step === 1 && (
            <>
              <div className="login-input-group">
                <div className="country-container">
                  
                  <img
                    src="https://flagcdn.com/w20/in.png"
                    alt="flag"
                    className="flag-icon"
                  />
                  <select
                    className="country-code-dropdown"
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                </div>
                <input
                  type="tel"
                  className="mobile-input"
                  placeholder="Enter Mobile Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="whatsapp-toggle-row">
                 <span className="whatsapp-label">
                  Get updates on <span className="wa-text">WhatsApp</span>
                </span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={whatsapp}
                    onChange={() => setWhatsapp(!whatsapp)}
                  />
                  <span className="slider round"></span>
                </label>
               
              </div>
            </>
          )}

          {step === 2 && (
            <input
              type="text"
              placeholder="Enter OTP"
              className="mobile-input otp-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          )}

          <button
            className="continue-btn"
            onClick={step === 1 ? sendOTP : verifyOTP}
          >
            {step === 1 ? "Continue" : "Verify OTP"}
          </button>

          {message && <p className="info-text">{message}</p>}

          {step === 1 && (
            <p className="terms-text">
              By continuing, you agree to our{" "}
              <span className="link">Terms & Conditions</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;




