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
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const location = useLocation();
  const navigate = useNavigate();

  const isPropertyFlow =
    location.pathname.includes("owner") ||
    location.pathname.includes("property");

  const isRentalPage = location.pathname.includes("rental-agreement");

  // Refresh user info
  const refreshUser = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setUser(null);
  };

  // For Property Owners click
  const handleOwnerClick = () => {
    if (!isPropertyFlow) {
      navigate("/owner");
    } else {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  };

  // ✅ Handle City Change
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    localStorage.setItem("selectedCity", selectedCity);
    window.dispatchEvent(new Event("storage")); // notify rental page
  };

  return (
    <>
      <header className="nb-header">
        <div className="nb-inner">
          {/* ===== LEFT SECTION ===== */}
          <div className="nb-left">
            <Link to="/" className="nb-logo">
              <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
            </Link>

            {/* Show Legal Services text only on rental page */}
            {isRentalPage && (
              <span className="legal-services">Legal Services</span>
            )}
          </div>

          {/* ===== RIGHT SECTION ===== */}
          <div className="nb-right">
            {isRentalPage ? (
              <>
                {/* ✅ City Dropdown FIRST (Left of My Bookings) */}
                <select
                  className="city-dropdown-right"
                  onChange={handleCityChange}
                  value="Change City"
                >
                  <option disabled hidden>
                    Change City
                  </option>
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Pune</option>
                  <option>Hyderabad</option>
                  <option>Chennai</option>
                  <option>Delhi</option>
                  <option>Noida</option>
                  <option>Gurgaon</option>
                  <option>Faridabad</option>
                  <option>Nagpur</option>
                </select>

                <div className="divider"></div>

                {/* === My Bookings === */}
                <button className="my-bookings-btn">My Bookings</button>

                <div className="divider"></div>

                {/* === Logged User === */}
                {user && (
                  <div className="user-display">
                    <img
                      src="https://assets.nobroker.in/nb-new/public/MaterialIcons/accountCircle.svg"
                      alt="User Icon"
                      className="user-icon"
                    />
                    <span className="auth-link">{user.name || "User"}</span>
                  </div>
                )}

                <div className="divider"></div>

                {/* === Menu === */}
                <div className="menu" onClick={() => setMenuOpen(true)}>
                  <span>Menu</span>
                  <FaBars className="bars" />
                </div>
              </>
            ) : (
              <>
                {/* === Default Home / Other Pages === */}
                <button className="pay-btn">
                  <FaCreditCard className="icon" /> Pay Rent
                </button>

                <button
                  className={`owner-btn ${
                    isPropertyFlow ? "owner-active" : ""
                  }`}
                  onClick={handleOwnerClick}
                >
                  {isPropertyFlow
                    ? "Post Your Property"
                    : "For Property Owners"}
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

                {/* === Auth === */}
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
                    <span
                      className="auth-link"
                      onClick={() => setSignupOpen(true)}
                    >
                      Sign up
                    </span>
                    <div className="divider"></div>
                    <span
                      className="auth-link"
                      onClick={() => setLoginOpen(true)}
                    >
                      Log in
                    </span>
                  </>
                )}

                <div className="divider"></div>

                {/* === Menu === */}
                <div className="menu" onClick={() => setMenuOpen(true)}>
                  <span>Menu</span>
                  <FaBars className="bars" />
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Blue strip below navbar for rental page */}
      {isRentalPage && <div className="navbar-blue-strip"></div>}

      {/* Navbar Menu Drawer */}
      <NavbarMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Login / Signup Modals */}
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
