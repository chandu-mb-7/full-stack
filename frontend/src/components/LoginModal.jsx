import React, { useState, useEffect } from "react";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timer, setTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true); 

  useEffect(() => {
    let interval;
    if (step === 2 && timer > 0) {
      interval = setInterval(() => setTimer((t) => t - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [step, timer]);

  if (!isOpen) return null;

  const sendOTP = async () => {
    try {
      setLoading(true);
      const fullPhone = `${countryCode}${phone}`;
      const res = await fetch("http://localhost:5000/api/otp/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone }),
      });
      const data = await res.json();
      if (res.ok) {
        setStep(2);
        setMessage("OTP sent successfully!");
        setTimer(30);
      } else {
        setMessage(data.error || "Error sending OTP");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const fullPhone = `${countryCode}${phone}`;
      const res = await fetch("http://localhost:5000/api/otp/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: fullPhone, otp }),
      });

      const data = await res.json();
      console.log("OTP verify response:", data);

      if (!res.ok) {
        setMessage(data.error || "Invalid OTP");
        return;
      }

      const token = data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.user));

    
      const checkRes = await fetch("http://localhost:5000/api/user/check-user", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const checkData = await checkRes.json();
      console.log(" /check-user response:", checkData);

    
      if (isLoginMode) {
        if (checkData.exists) {
          console.log(" Existing user → logging in directly...");
          const loginRes = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const loginData = await loginRes.json();
          console.log("Login API response:", loginData);

          if (loginRes.ok) {
            localStorage.setItem("user", JSON.stringify(loginData.user));
            setMessage("Login successful!");
            setStep(4);
          } else {
            setMessage(loginData.error || "Login failed");
          }
        } else {
          setMessage("No account found. Please sign up first.");
          setIsLoginMode(false); 
          setStep(3);
        }
        return;
      }

      if (!checkData.exists) {
        console.log(" New user detected → proceed to signup");
        setStep(3);
        setMessage("OTP verified successfully!");
      } else {
        setMessage("User already exists. Please login instead.");
        setIsLoginMode(true);
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setMessage("Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

const saveUserInfo = async () => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("Session expired. Please verify OTP again.");
      setStep(1);
      return;
    }

    const checkRes = await fetch("http://localhost:5000/api/user/check-user", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const checkData = await checkRes.json();
    console.log("/check-user response:", checkData);

    let res, data;
    if (checkData.exists) {
      console.log("Existing user → Logging in...");
      res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
    } else {
      console.log("New user → Signing up...");
      res = await fetch("http://localhost:5000/api/user/save-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, email }),
      });
    }

    data = await res.json();
    console.log("Server response:", data);

    if (res.ok) {
      const userData = data.user || { name, email, phone };
      localStorage.setItem("user", JSON.stringify(userData));
      setMessage(checkData.exists ? "Login successful!" : "Signup successful!");
      console.log(checkData.exists ? "LOGIN success" : " SIGNUP success");
      setStep(4);
    } else {
      setMessage(data.error || "Something went wrong");
    }
  } catch (err) {
    console.error("Error in saveUserInfo:", err);
    setMessage("Error saving user info");
  } finally {
    setLoading(false);
  }
};

  const handleClose = () => {
    setPhone("");
    setOtp("");
    setName("");
    setEmail("");
    setStep(1);
    setTimer(30);
    setMessage("");
    onClose();
  };

  const handleResend = () => sendOTP();

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          <IoClose size={22} />
        </button>

        {/* Left section */}
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
        
          {step === 1 && (
            <div className="login-mode-toggle">
              <button
                className={`toggle-btn ${isLoginMode ? "active" : ""}`}
                onClick={() => setIsLoginMode(true)}
              >
                Log In
              </button>
              <button
                className={`toggle-btn ${!isLoginMode ? "active" : ""}`}
                onClick={() => setIsLoginMode(false)}
              >
                Sign Up
              </button>
            </div>
          )}

          {/* Step 1: Phone input */}
          {step === 1 && (
            <>
              <h4 className="login-heading">
                {isLoginMode ? "Enter phone to log in" : "Enter phone to sign up"}
              </h4>
              <div className="login-input-group">
                <div className="country-container">
                  <img src="https://flagcdn.com/w20/in.png" alt="flag" className="flag-icon" />
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

              <button className="continue-btn" onClick={sendOTP} disabled={loading}>
                {loading ? "Sending..." : "Continue"}
              </button>
              {message && <p className="info-text">{message}</p>}
            </>
          )}

    
          {step === 2 && (
            <>
              <h4 className="login-heading">Verify your OTP</h4>
              <div className="phone-display-row">
                <span className="phone-text">
                  {countryCode} {phone}
                </span>
                <span className="change-phone" onClick={() => setStep(1)}>
                  Change Phone
                </span>
              </div>

              <div className="otp-container">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    className="otp-underline"
                    id={`otp-${index}`}
                    value={otp[index] || ""}
                    placeholder="_"
                    onChange={(e) => {
                      const value = e.target.value.replace(/[^0-9]/g, "");
                      if (value) {
                        const newOtp = otp.split("");
                        newOtp[index] = value;
                        setOtp(newOtp.join(""));
                        const next = document.getElementById(`otp-${index + 1}`);
                        next && next.focus();
                      }
                    }}
                  />
                ))}
              </div>

              <div className="otp-timer-row">
                {timer > 0 ? (
                  <span className="otp-timer-text">
                    00:{timer < 10 ? "0" + timer : timer}
                  </span>
                ) : (
                  <span className="resend-link" onClick={handleResend}>
                    Resend OTP
                  </span>
                )}
              </div>

              <button className="continue-btn" onClick={verifyOTP} disabled={loading}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              {message && <p className="info-text">{message}</p>}
            </>
          )}

          {step === 3 && (
            <>
              <h4 className="login-heading">Provide your name and email</h4>
              <input
                type="text"
                className="input mb-1"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="input"
                placeholder="Enter your email like name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="continue-btn" onClick={saveUserInfo} disabled={loading}>
                {loading ? "Processing..." : "Continue"}
              </button>
              {message && <p className="info-text">{message}</p>}
            </>
          )}
          {step === 4 && (
            <div className="success-page">
              <h3 className="success-title"> {isLoginMode ? "Login" : "Signup"} Successful!</h3>
              <p className="success-message">
                You’ve successfully {isLoginMode ? "logged in" : "signed up"} to NoBroker.
              </p>
              <button className="continue-btn" onClick={handleClose}>
                Continue to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
