import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaBars } from "react-icons/fa";
import logo from "../assets/nb_logo.svg";
import NavbarMenu from "./NavbarMenu";
import LoginModal from "./LoginModal";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Detect if user is in property posting flow (owner, property-details, etc.)
  const isPropertyFlow =
    location.pathname.includes("owner") || location.pathname.includes("property");

  const handleOwnerClick = () => {
    if (!isPropertyFlow) {
      navigate("/owner");
    } else {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="nb-header">
        <div className="nb-inner">
          {/* ✅ Left Logo */}
          <Link to="/" className="nb-logo">
            <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
          </Link>

          {/* ✅ Right Section */}
          <div className="nb-right">
            {/* Pay Rent Button */}
            <button className="pay-btn">
              <FaCreditCard className="icon" /> Pay Rent
            </button>

            {/* ✅ Dynamic Button: For Property Owners → Post Your Property */}
            <button
              className={`owner-btn ${isPropertyFlow ? "owner-active" : ""}`}
              onClick={handleOwnerClick}
            >
              {isPropertyFlow ? "Post Your Property" : "For Property Owners"}
            </button>

            <div className="divider"></div>

            {/* Signup */}
            <span className="auth-link" onClick={() => setSignupOpen(true)}>
              Sign up
            </span>

            <div className="divider"></div>

            {/* Login */}
            <span className="auth-link" onClick={() => setLoginOpen(true)}>
              Log in
            </span>

            <div className="divider"></div>

            {/* Menu */}
            <div className="menu" onClick={() => setMenuOpen(true)}>
              <span>Menu</span>
              <FaBars className="bars" />
            </div>
          </div>
        </div>
      </header>

      {/* Dropdown Menu */}
      <NavbarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Modals */}
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <LoginModal isOpen={signupOpen} onClose={() => setSignupOpen(false)} />
    </>
  );
};

export default Navbar;
