import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import logo from "../assets/nb_logo.svg";
import NavbarMenu from "./NavbarMenu";
import LoginModal from "./LoginModal";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  return (
    <>
      <header className="nb-header">
        <div className="nb-inner">
  
          <Link to="/" className="nb-logo">
            <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
          </Link>

          {/* Right Section */}
          <div className="nb-right">
            <button className="pay-btn">
              <FaCreditCard className="icon" /> Pay Rent
            </button>

           <button
  className="owner-btn"
  onClick={() => (window.location.href = "/owner")}
>
  For Property owners
</button>


            <div className="divider"></div>

            <span
              className="auth-link"
              onClick={() => {
                console.log("Signup clicked");
                setSignupOpen(false);
              }}
            >
              Sign up
            </span>

            <div className="divider"></div>

            <span
              className="auth-link"
              onClick={() => {
                console.log("Login clicked");
                setLoginOpen(true);
              }}
            >
              Log in
            </span>

            <div className="divider"></div>

            <div className="menu" onClick={() => setMenuOpen(true)}>
              <span>Menu</span>
          <FaBars className="bars" />

            </div>
          </div>
        </div>
      </header>


      <NavbarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />


      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
      <LoginModal isOpen={signupOpen} onClose={() => setSignupOpen(false)} />
    </>
  );
};

export default Navbar;
