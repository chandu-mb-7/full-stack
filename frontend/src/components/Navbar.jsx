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
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const location = useLocation();
  const navigate = useNavigate();

  const isPropertyFlow =
    location.pathname.includes("owner") || location.pathname.includes("property");

  const refreshUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
  };

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
        
          <Link to="/" className="nb-logo">
            <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
          </Link>

         
          <div className="nb-right">
 
            <button className="pay-btn">
              <FaCreditCard className="icon" /> Pay Rent
            </button>

     
            <button
              className={`owner-btn ${isPropertyFlow ? "owner-active" : ""}`}
              onClick={handleOwnerClick}
            >
              {isPropertyFlow ? "Post Your Property" : "For Property Owners"}
            </button>

            
            <div className="nbcash-wrapper">
              <span className="nbcash-badge">New</span>
              <img
                src="https://assets.nobroker.in/nb-new/public/nbCash.svg"
                alt="nbCash Icon"
                className="nb-cash-icon"
              />
            </div>

            <div className="divider"></div>

            {/* Auth Links */}
            {user ? (
              <>
                <div className="user-display">
                  <img
                    src="https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"
                    alt="User Icon"
                    className="user-icon"
                  />
                  <span className="auth-link">{user.name || "User"}</span>
                </div>
                <div className="divider"></div>
                <span className="auth-link" onClick={handleLogout}>
                  Logout
                </span>
              </>
            ) : (
              <>
                <span className="auth-link" onClick={() => setSignupOpen(true)}>
                  Sign up
                </span>
                <div className="divider"></div>
                <span className="auth-link" onClick={() => setLoginOpen(true)}>
                  Log in
                </span>
              </>
            )}

            <div className="divider"></div>

            {/* Menu */}
            <div className="menu" onClick={() => setMenuOpen(true)}>
              <span>Menu</span>
              <FaBars className="bars" />
            </div>
          </div>
        </div>
      </header>

      {/* Menu Dropdown */}
      <NavbarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

     
      <LoginModal
        isOpen={loginOpen}
        onClose={() => {
          setLoginOpen(false);
          refreshUser();
        }}
      />
      <LoginModal
        isOpen={signupOpen}
        onClose={() => {
          setSignupOpen(false);
          refreshUser();
        }}
      />
    </>
  );
};

export default Navbar;
