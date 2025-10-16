import React from "react";
import "./LoginModal.css";
import { IoClose } from "react-icons/io5";
import signupHome from "../assets/signupHome.png";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-box"
        onClick={(e) => e.stopPropagation()} 
      >
        <button className="close-btn" onClick={onClose}>
          <IoClose />
        </button>

   
        <div className="login-left">
          <img
            src={signupHome}
            alt="House illustration"
            className="login-left-img"
          />
          <h3 className="login-left-title">Login / Sign up</h3>
          <ul className="login-left-list">
            <li>Zero Brokerage</li>
            <li>Thousands of new listings daily.</li>
            <li>100 Cr+ Brokerage saved monthly.</li>
          </ul>
        </div>

        <div className="login-right">
          <h4 className="login-heading">Enter phone to continue</h4>

          <div className="login-input-group">
            <select className="country-code">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>
            <input
              type="tel"
              placeholder="Enter Mobile Number"
              className="mobile-input"
            />
          </div>

          <button className="continue-btn">Continue</button>

          <p className="terms-text">
            By continuing, you agree to our{" "}
            <span className="link">Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
