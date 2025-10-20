import React, { useState } from "react";
import "./HomePage.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ServicePage from "./ServicePage";
import RentPage from "./RentPage";
import CitySelectorModal from "./CitySelectorModal"; // ✅ City selector modal

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [isCityModalOpen, setIsCityModalOpen] = useState(false); // ✅ modal control
  const navigate = useNavigate();

  // ✅ Top cards for each tab
  const tabTopCards = {
    buy: [
      {
        leftImg: "src/assets/HomeInteriorHome.svg",
        rightImg: "src/assets/guarantee.svg",
        text: "Home Interiors | 45-Days Guarantee",
      },
    ],
    rent: [
      {
        leftImg: "src/assets/Rental.svg",
        rightImg: "src/assets/nextday.svg",
        text: "Rental Agreement | Next Day Delivery",
      },
    ],
    commercial: [
      {
        leftImg: "src/assets/Rental.svg",
        rightImg: "src/assets/nextday.svg",
        text: "Rental Agreement | Next Day Delivery",
      },
    ],
  };

  // ✅ Handle top-card click
  const handleActionClick = (text) => {
    if (text.includes("Rental Agreement")) {
      navigate("/rental-agreement");
    } else if (text.includes("Home Interiors")) {
      navigate("/home-interiors");
    }
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  // ✅ Open city modal
  const handleOpenCityModal = () => {
    setIsCityModalOpen(true);
  };

  // ✅ When user selects city
  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityModalOpen(false);
  };

  return (
    <div className="home-container">
      {/* --- Hero Title --- */}
      <h1 className="hero-title">
        World's Largest <span className="nobroker">NoBrokerage</span> Property Site
      </h1>

      {/* --- Top Action Buttons --- */}
      <div className="action-buttons">
        {tabTopCards[activeTab].map((item, idx) => (
          <div
            key={idx}
            className="action-btn"
            onClick={() => handleActionClick(item.text)}
          >
            <img src={item.leftImg} alt="left" className="mini-icon" />
            <span className="btn-text">
              {item.text.split("|")[0].trim()}{" "}
              <span className="faded-text">
                | {item.text.split("|")[1].trim()}
              </span>
            </span>
            <img src={item.rightImg} alt="right" className="mini-icon" />
          </div>
        ))}
      </div>

      {/* --- Tabs --- */}
      <div className="tabs">
        {["buy", "rent", "commercial"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* --- Search Section --- */}
      <div className="search-card centered">
        <div className="row-top">
          <select className="dropdown">
            <option>{selectedCity}</option>
          </select>
          <input
            type="text"
            placeholder="Search upto 3 localities or landmarks"
            className="search-input"
          />
          <button className="search-btn">
            <FiSearch className="search-icon" /> Search
          </button>
        </div>

        {/* --- Filters for Buy --- */}
        {activeTab === "buy" && (
          <div className="row-bottom">
            <div className="radio-group">
              <label>
                <input type="radio" name="buyType" defaultChecked /> Full House
              </label>
              <label>
                <input type="radio" name="buyType" /> Land/Plot
              </label>
            </div>
            <div className="filters">
              <select>
                <option>BHK Type</option>
              </select>
              <select>
                <option>Property Status</option>
              </select>
              <label className="check-item">
                <input type="checkbox" /> New Builder Projects
              </label>
            </div>
          </div>
        )}

        {/* --- Filters for Rent --- */}
        {activeTab === "rent" && (
          <div className="row-bottom">
            <div className="radio-group">
              <label>
                <input type="radio" name="rentType" defaultChecked /> Full House
              </label>
              <label>
                <input type="radio" name="rentType" /> PG/Hostel
              </label>
              <label>
                <input type="radio" name="rentType" /> Flatmates
              </label>
            </div>
            <div className="filters">
              <select>
                <option>Independent House</option>
              </select>
              <select>
                <option>BHK Type</option>
              </select>
              <select>
                <option>Availability</option>
              </select>
            </div>
          </div>
        )}

        {/* --- Filters for Commercial --- */}
        {activeTab === "commercial" && (
          <div className="row-bottom">
            <div className="radio-group">
              <label>
                <input type="radio" name="commercialType" defaultChecked /> Office
              </label>
              <label>
                <input type="radio" name="commercialType" /> Shop
              </label>
              <label>
                <input type="radio" name="commercialType" /> Warehouse
              </label>
            </div>
            <div className="filters">
              <select>
                <option>Property Size</option>
              </select>
              <select>
                <option>Status</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* --- Owner Section --- */}
      <div className="owner-section">
        <p>Are you a Property Owner?</p>
        <button className="owner-btn" onClick={() => navigate("/owner")}>
          Post Free Property Ad
        </button>
      </div>

      {/* --- Blue Strip --- */}
      <div className="blue-strip">
        <p>
          Do you know how much loan you can get? Get maximum with <b>NoBroker</b>
        </p>
        <button className="eligibility-btn">Check Eligibility</button>
      </div>

      {/* --- Tab-Specific Sections --- */}
      <div className="tab-full-content">
        {activeTab === "buy" && (
          <ServicePage onOpenCityModal={handleOpenCityModal} />
        )}
        {(activeTab === "rent" || activeTab === "commercial") && <RentPage />}
      </div>

      {/* --- City Selector Modal --- */}
      <CitySelectorModal
        isOpen={isCityModalOpen}
        onClose={() => setIsCityModalOpen(false)}
        onCitySelect={handleCitySelect}
      />
    </div>
  );
};

export default HomePage;
