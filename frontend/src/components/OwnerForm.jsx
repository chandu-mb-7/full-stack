import React, { useState, useEffect, useRef } from "react";
import "./OwnerForm.css";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const OwnerForm = () => {
  const [selectedCity, setSelectedCity] = useState("Select City");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [whatsapp, setWhatsapp] = useState(true);
  const [activeProperty, setActiveProperty] = useState("Residential");
  const [activeAdType, setActiveAdType] = useState("Rent");
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // ✅ Correct place (top-level, before return)

  const cities = [
    ["Bangalore", "Mumbai"],
    ["Pune", "Chennai"],
    ["Gurgaon", "Hyderabad"],
    ["Delhi", "Faridabad"],
    ["Ghaziabad", "Noida"],
    ["Greater Noida", "Kolkata"],
  ];

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handleSelectCity = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getAdTypes = () => {
    if (activeProperty === "Residential") {
      return ["Rent", "Resale", "PG/Hostel", "Flatmates"];
    } else if (activeProperty === "Commercial") {
      return ["Rent", "Sale"];
    } else if (activeProperty === "Land/Plot") {
      return ["Resale"];
    }
    return [];
  };

  useEffect(() => {
    const adOptions = getAdTypes();
    if (!adOptions.includes(activeAdType)) {
      setActiveAdType(adOptions[0]);
    }
  }, [activeProperty]);

  // ✅ Handle Submit Navigation
  const handleSubmit = () => {
    if (selectedCity === "Select City") {
      alert("Please select a city first!");
      return;
    }
    navigate("/property-details", {
      state: {
        city: selectedCity,
        propertyType: activeProperty,
        adType: activeAdType,
      },
    });
  };

  return (
    <div className="owner-page">
      <h2 className="heading">Sell or Rent your Property For Free</h2>

      <div className="owner-wrapper">
        <div className="owner-container">
          {/* LEFT SIDE INFO CARD */}
          <div className="owner-left">
            <div>
              <h4>Why Post through us?</h4>
              <ul className="tick-list">
                <li>
                  <FaCheckCircle className="tick-icon" /> Zero Brokerage
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> Faster Tenants
                </li>
                <li>
                  <FaCheckCircle className="tick-icon" /> 10 lac tenants/buyers
                  connections
                </li>
              </ul>
            </div>

            <div className="feedback-section">
              <p className="trust-heading">30 Lac+ Home Owners Trust Us</p>
              <p className="trust-para">
                The service that I got from NoBroker was very helpful. Comparing
                this site to other sites, NoBroker gets much more tenants by
                using the right property advertisements. I got very friendly and
                productive service from the team. I am thankful to them because
                I got a good tenant in just 8 days for my place.
              </p>
              <p className="trust-name">Anil Kant | Chennai</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="owner-right">
            <form className="owner-form">
              {/* City Dropdown */}
              <div className="form-row single">
                <div className="custom-dropdown city-dropdown" ref={dropdownRef}>
                  <div className="dropdown-header" onClick={toggleDropdown}>
                    {selectedCity}
                    {isDropdownOpen ? (
                      <IoChevronUp className="arrow-icon" />
                    ) : (
                      <IoChevronDown className="arrow-icon" />
                    )}
                  </div>

                  {isDropdownOpen && (
                    <div className="dropdown-list">
                      {cities.map((pair, i) => (
                        <div className="dropdown-row" key={i}>
                          {pair.map((city) => (
                            <div
                              key={city}
                              className="dropdown-item"
                              onClick={() => handleSelectCity(city)}
                            >
                              {city}
                              {city === "Faridabad" && (
                                <span className="new-badge">New</span>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* WhatsApp toggle */}
              <div className="whatsapp-row">
                <span className="wa-text-label">Get updates on</span>
                <span className="wa-logo"> WhatsApp</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={whatsapp}
                    onChange={() => setWhatsapp(!whatsapp)}
                  />
                  <span className="slider round"></span>
                </label>
              </div>

              {/* Property Type */}
              <div className="property-type">
                <h4 className="center-heading">Property type</h4>
                <div className="btn-group property-group">
                  {["Residential", "Commercial", "Land/Plot"].map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={activeProperty === type ? "active" : ""}
                      onClick={() => setActiveProperty(type)}
                    >
                      {type}
                      {type === "Land/Plot" && (
                        <span className="new-badge">New</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ad Type */}
              <div className="ad-type">
                <h4 className="center-heading">Select Property Ad Type</h4>
                <div className="btn-group ad-group">
                  {getAdTypes().map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={activeAdType === type ? "active" : ""}
                      onClick={() => setActiveAdType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Start Posting Your Ad For FREE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerForm;
