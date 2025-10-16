import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FaCreditCard } from "react-icons/fa";
import logo from "../assets/nb_logo.svg";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isOwnerPage = location.pathname === "/owner";

  const handleOwnerClick = () => {
    if (isOwnerPage) {
      navigate("/"); // Go back to home
    } else {
      navigate("/owner"); // Go to owner form
    }
  };

  return (
    <>
      <header className="nb-header">
        <div className="nb-inner">
          <Link to="/" className="nb-logo">
            <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
          </Link>

          <div className="nb-right">
            <button className="pay-btn">
              <FaCreditCard className="icon" /> Pay Rent
            </button>

            <button className="owner-btn" onClick={handleOwnerClick}>
              {isOwnerPage ? "Post Your Property" : "For Property Owners"}
            </button>

            <div className="divider"></div>
            <Link to="/signup" className="auth-link">Sign up</Link>
            <div className="divider"></div>
            <Link to="/login" className="auth-link">Log in</Link>
            <div className="divider"></div>

            <div className="menu" onClick={() => setMenuOpen(true)}>
              <span>Menu</span>
              <span className="bars">☰</span>
            </div>
          </div>
        </div>
      </header>

      <NavbarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
