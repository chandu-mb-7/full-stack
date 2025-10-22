import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaCreditCard, FaBars, FaBell } from "react-icons/fa";
import axios from "axios";
import logo from "../assets/nb_logo.svg";
import NavbarMenu from "./NavbarMenu";
import LoginModal from "./LoginModal";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [showListings, setShowListings] = useState(false);
  const [myProperties, setMyProperties] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const isPropertyFlow =
    location.pathname.includes("owner") ||
    location.pathname.includes("property");

  const isRentalPage = location.pathname.includes("rental-agreement");
  const isInteriorsPage = location.pathname.includes("interiors");

  useEffect(() => {
    if (user) fetchMyProperties();
  }, [user]);

  const fetchMyProperties = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/properties?ownerId=${user.phone}`
      );
      setMyProperties(res.data.properties || []);
    } catch (err) {
      console.error("Error fetching listings:", err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".bell-wrapper")) {
        setShowListings(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Refresh user info after login/signup modal closes
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

  // Handle “For Property Owners” button click
  const handleOwnerClick = () => {
    if (!isPropertyFlow) {
      navigate("/owner");
    } else {
      window.scrollTo({ top: 600, behavior: "smooth" });
    }
  };

  // Handle City Change (Rental Page)
  const handleCityChange = (e) => {
    const selectedCity = e.target.value;
    localStorage.setItem("selectedCity", selectedCity);
    window.dispatchEvent(new Event("storage"));
  };

  // Handle Back Button (Interiors Page)
  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="nb-header">
        <div className="nb-inner">
         
          <div className="nb-left">
            {isInteriorsPage && (
              <span className="back-arrow" onClick={handleBackClick}>
                &lt;
              </span>
            )}

            <Link to="/" className="nb-logo">
              <img src={logo} alt="NoBroker Logo" className="nb-logo-img" />
            </Link>

            {isRentalPage && <span className="legal-services">Legal Services</span>}
            {isInteriorsPage && <span className="page-title">Home Interiors</span>}
          </div>

          <div className="nb-right">
            {isInteriorsPage ? (
              <>
                <button className="contact-btn">📞 +91 9001376403</button>
                <div className="divider"></div>

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
              </>
            ) : isRentalPage ? (
              <>
          
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
                <button className="my-bookings-btn">My Bookings</button>
                <div className="divider"></div>

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

                <div className="menu" onClick={() => setMenuOpen(true)}>
                  <span>Menu</span>
                  <FaBars className="bars" />
                </div>
              </>
            ) : (
              <>
        
                <button className="pay-btn">
                  <FaCreditCard className="icon" /> Pay Rent
                </button>

       
                <div
                  className="bell-wrapper"
                  onClick={() => setShowListings(!showListings)}
                >
                  <FaBell className="bell-icon" />
                  {myProperties.length > 0 && (
                    <span className="bell-count">{myProperties.length}</span>
                  )}
                  {showListings && (
                    <div className="bell-dropdown">
                      <h4>My Listings</h4>
                      {myProperties.length === 0 ? (
                        <p className="no-listings">
                          You haven’t listed any properties yet.
                        </p>
                      ) : (
                        myProperties.slice(0, 3).map((p) => (
                          <div key={p._id} className="listing-item">
                            <strong>{p.propertyType}</strong> – {p.city}
                            <div className="listing-sub">
                              ₹{p.rent} | {p.locality}
                            </div>
                          </div>
                        ))
                      )}
                      <Link to="/my-properties" className="view-all-btn">
                        View All Listings →
                      </Link>
                    </div>
                  )}
                </div>

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

                <div className="menu" onClick={() => setMenuOpen(true)}>
                  <span>Menu</span>
                  <FaBars className="bars" />
                </div>
              </>
            )}
          </div>
        </div>
      </header>

      {isRentalPage && <div className="navbar-blue-strip"></div>}

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
