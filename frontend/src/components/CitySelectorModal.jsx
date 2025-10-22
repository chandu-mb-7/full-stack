import React, { useState } from "react";
import "./CitySelectorModal.css";
import bangalore from "../assets/Banglore.png";
import mumbai from "../assets/Mumbai.png";
import pune from "../assets/Pune.png";
import chennai from "../assets/Chennai.png";
import hyderabad from "../assets/Hyderabad.png";
import gurgaon from "../assets/Gurgaon.png";
import delhi from "../assets/delhi.png";
import noida from "../assets/Noida.png";
import greaternoida from "../assets/greater_noida.png";
import ghaziabad from "../assets/Ghaziabad.png";
import faridabad from "../assets/Faridabad.png";
import nagpur from "../assets/nagpur.png";

const cities = [
  { name: "Bangalore", img: bangalore },
  { name: "Mumbai", img: mumbai },
  { name: "Pune", img: pune },
  { name: "Chennai", img: chennai },
  { name: "Hyderabad", img: hyderabad },
  { name: "Gurgaon", img: gurgaon },
  { name: "Delhi", img: delhi },
  { name: "Noida", img: noida },
  { name: "Greater Noida", img: greaternoida },
  { name: "Ghaziabad", img: ghaziabad },
  { name: "Faridabad", img: faridabad },
  { name: "Nagpur", img: nagpur },
];

export default function CitySelectorModal({ isOpen, onClose, onCitySelect }) {
  const [search, setSearch] = useState("");

  if (!isOpen) return null;

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );


  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("city-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className={`city-overlay ${isOpen ? "show" : ""}`}
      onClick={handleOverlayClick}
    >
      <div
        className={`city-modal ${isOpen ? "slide-in" : "slide-out"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <h2>Select your property City</h2>
        <p className="subtitle">Now available in 150+ Cities in India!</p>
        <input
          type="text"
          className="city-search"
          placeholder="Type city name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="city-grid">
          {filteredCities.map((city, i) => (
            <div
              key={i}
              className="city-item"
              onClick={() => onCitySelect(city.name)}
            >
              {city.img && <img src={city.img} alt={city.name} />}
              <span>{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
