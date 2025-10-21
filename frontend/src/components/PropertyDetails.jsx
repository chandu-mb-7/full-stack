import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaHome,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaCouch,
  FaImages,
  FaFileAlt,
  FaCalendarAlt,
  FaLock,
  FaStar,
  FaBullhorn,
  FaCommentsDollar,
   FaBed, FaUserFriends, FaUsers, 
} from "react-icons/fa";
import "./PropertyDetails.css";
import paintImg from "../assets/paint.jpg";
import cleanImg from "../assets/cleaning.jpg";
import axios from "axios";

const PropertyDetails = () => {
  const location = useLocation();
  const { city: initialCity, propertyType, adType } = location.state || {};
const [photos, setPhotos] = useState([]);
const [videos, setVideos] = useState([]);
const [availability, setAvailability] = useState("");
const [startTime, setStartTime] = useState("");
const [endTime, setEndTime] = useState("");
const [isAllDay, setIsAllDay] = useState(false);

  // States
  const [city, setCity] = useState(initialCity || "");
  const [locality, setLocality] = useState("");
  const [landmark, setLandmark] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
const [rent, setRent] = useState("");
const [deposit, setDeposit] = useState("");

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const stepSections = [
    "Property Details",
    "Locality Details",
    "Rental Details",
    "Amenities",
    "Gallery",
    "Schedule",
  ];

  // Other form states
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomType, setRoomType] = useState("");
  const [tenantType, setTenantType] = useState("");
  const [otherFeatures, setOtherFeatures] = useState([]);

  const isResale = adType === "Resale";
  const isPgHostel = adType === "PG/Hostel";
  const isFlatmates = adType === "Flatmates";
  const isCommercialSale = propertyType === "Commercial" && adType === "Sale";

  // PG options
  const roomOptions = [
   
    { id: "single", name: "Single Sharing", icon: <FaBed className="room-icon" /> },
    { id: "double", name: "Double Sharing", icon: <FaUserFriends className="room-icon" /> },
    { id: "triple", name: "Three Sharing", icon: <FaUsers className="room-icon" /> },
    { id: "four", name: "Four Sharing", icon: <FaHome className="room-icon" /> },
  
  ];

  const toggleRoom = (roomId) => {
    setSelectedRooms((prev) =>
      prev.includes(roomId)
        ? prev.filter((id) => id !== roomId)
        : [...prev, roomId]
    );
  };

  const toggleFeature = (feature) => {
    setOtherFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((item) => item !== feature)
        : [...prev, feature]
    );
  };
const [bathrooms, setBathrooms] = useState(0);
const [balcony, setBalcony] = useState(0);
const [toggles, setToggles] = useState({});
const [similarUnits, setSimilarUnits] = useState("");
const [selectedAmenities, setSelectedAmenities] = useState([]);
const handleFinishPosting = async () => {
  try {
    // Retrieve JWT from login flow
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first to post a property!");
      return;
    }

 
    const data = {
      city,
      locality,
      landmark,
      propertyType,
      adType,
      rent,
      deposit,
      amenities: selectedAmenities || [],
      photos: photos.map((file) => file.name), 
      videos: videos.map((file) => file.name),
      availability,
      startTime,
      endTime,
      isAllDay,
    };

    // Send POST request to backend
    const response = await axios.post(
      "http://localhost:5000/api/properties",
      data,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    alert(` ${response.data.message}\nProperty ID: ${response.data.propertyId}`);

  } catch (error) {
    console.error("Error posting property:", error);
    alert("Failed to post property. Please try again.");
  }
};

  return (
    <div className="property-page">
      <div className="property-container">
   
        <div className="property-sidebar">
          <ul className="sidebar-menu">
            {stepSections.map((section, index) => (
              <li
                key={index}
                className={currentStep === index ? "active" : ""}
                onClick={() => setCurrentStep(index)}
              >
                {index === 0 && <FaHome className="side-icon" />}
                {index === 1 && <FaMapMarkerAlt className="side-icon" />}
                {index === 2 && <FaMoneyBillAlt className="side-icon" />}
                {index === 3 && <FaCouch className="side-icon" />}
                {index === 4 && <FaImages className="side-icon" />}
                {index === 5 && <FaCalendarAlt className="side-icon" />}
                {section}
              </li>
            ))}
          </ul>
        </div>

        <div className="property-main">
      
<div className="progress-container">
  <div className="progress-header">
    <span className="progress-step">
      Step {currentStep + 1} of {stepSections.length}
    </span>
    <span className="progress-title">{stepSections[currentStep]}</span>
  </div>

  <div className="progress-bar">
    <div
      className="progress-fill"
      style={{ width: `${((currentStep + 1) / stepSections.length) * 100}%` }}
    ></div>
  </div>
</div>

          {/* Property Details */}
          {currentStep === 0 && (
            <>
              {isPgHostel ? (
                <>
                  <div className="property-header">
                    <h2>Provide details about your place to find a tenant soon</h2>
                    <p>Select the type of rooms available in your PG</p>
                  </div>

                  <div className="room-grid">
  {roomOptions.map((room) => (
    <div
      key={room.id}
      className={`room-card ${selectedRooms.includes(room.id) ? "selected" : ""}`}
      onClick={() => toggleRoom(room.id)}
    >
      <div className="room-icon-wrapper">{room.icon}</div>
      <h4 className="room-name">{room.name}</h4>
      <input
        type="checkbox"
        checked={selectedRooms.includes(room.id)}
        readOnly
      />
    </div>
  ))}
</div>


                  <div className="help-box">
                    <span>📞 Don’t want to fill all the details? Let us help you!</span>
                    <button className="help-btn">I’m interested</button>
                  </div>

                  <button type="button" className="save-btn" onClick={() => setCurrentStep(1)}>
                    Save & Continue
                  </button>
                </>
              ) : (
                <>
                  <div className="property-header">
                    <h2>Property Details</h2>
                    <p>
                      Posting your <b>{propertyType}</b> for <b>{adType}</b> in <b>{city || "Select City"}</b>
                    </p>
                  </div>

                  <form>
                    <div className="form-grid">
                      <div className="form-group">
                        <label>{isResale ? "Property Type*" : "Apartment Type*"}</label>
                        <select>
                          <option>Select</option>
                          <option>Apartment</option>
                          <option>Independent House</option>
                          <option>Villa</option>
                          <option>Studio</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>BHK Type*</label>
                        <select>
                          <option>Select</option>
                          <option>1 BHK</option>
                          <option>2 BHK</option>
                          <option>3 BHK</option>
                          <option>4+ BHK</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Floor*</label>
                        <select>
                          <option>Select</option>
                          <option>Ground</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3+</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Total Floor*</label>
                        <select>
                          <option>Select</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3+</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Property Age*</label>
                        <select>
                          <option>Select</option>
                          <option>0-1 Years</option>
                          <option>1-5 Years</option>
                          <option>5-10 Years</option>
                          <option>10+ Years</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Facing*</label>
                        <select>
                          <option>Select</option>
                          <option>North</option>
                          <option>South</option>
                          <option>East</option>
                          <option>West</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Built Up Area*</label>
                        <div className="area-box">
                          <input type="number" placeholder="Built-up Area" />
                          <span className="unit">Sq.ft</span>
                        </div>
                      </div>
                    </div>

                    <button type="button" className="save-btn" onClick={() => setCurrentStep(1)}>
                      Save & Continue
                    </button>
                  </form>
                </>
              )}
            </>
          )}

          {/* STEP 1: Locality Details */}
{currentStep === 1 && (
  <>
    <div className="property-header">
      <h2>Locality Details</h2>
      <p>Set your property's exact location to attract nearby tenants faster</p>
    </div>

    <form className="locality-form">
      <div className="form-group full city-dropdown-box">
        <label className="city-label">Select City *</label>
        <div
          className="dropdown-city-wrapper"
          ref={dropdownRef}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="dropdown-header">
            {city || "Select City"}
            <span className="arrow-icon">{dropdownOpen ? "▲" : "▼"}</span>
          </div>

          {dropdownOpen && (
            <div className="dropdown-city-grid">
              {[
                ["Bangalore", "Mumbai"],
                ["Pune", "Chennai"],
                ["Gurgaon", "Hyderabad"],
                ["Delhi", "Faridabad"],
                ["Ghaziabad", "Noida"],
                ["Greater Noida", "Kolkata"],
              ].map((row, i) => (
                <div className="dropdown-row" key={i}>
                  {row.map((cityName) => (
                    <div
                      key={cityName}
                      className={`dropdown-item ${city === cityName ? "selected" : ""}`}
                      onClick={() => {
                        setCity(cityName);
                        setDropdownOpen(false);
                      }}
                    >
                      {cityName}
                      {cityName === "Faridabad" && (
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

      <div className="form-row">
        <div className="form-group half">
          <label>Locality *</label>
          <input
            type="text"
            placeholder="Enter Locality"
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
          />
        </div>
        <div className="form-group half">
          <label>Landmark / Street *</label>
          <input
            type="text"
            placeholder="e.g. Near market or metro station"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />
        </div>
      </div>

      {city && (
        <div className="map-section">
          <p className="map-label">📍 Mark Locality on Map</p>
         <iframe
  title="map"
  width="100%"
  height="300"
  style={{ border: "none", borderRadius: "8px" }}
  src={`https://www.google.com/maps?q=${encodeURIComponent(
    `${landmark || ""} ${locality || ""} ${city || ""}`
  )}&output=embed`}
/>

        </div>
      )}

      <div className="form-buttons">
        <button type="button" className="back-btn" onClick={() => setCurrentStep(0)}>
          Back
        </button>
        <button type="button" className="save-btn" onClick={() => setCurrentStep(2)}>
          Save & Continue
        </button>
      </div>
    </form>
  </>
)}

{/* STEP 2: Rental Details */}
{currentStep === 2 && (
  <>
    <div className="property-header">
      <h2>Provide rental details about your property</h2>
    </div>

    <form className="rental-form">
      <div className="form-grid">
        <div className="form-group">
          <label>Property available for</label>
          <div className="radio-group">
            <label><input type="radio" name="avail" defaultChecked /> Only Rent</label>
            <label><input type="radio" name="avail" /> Only Lease</label>
          </div>
        </div>

        <div className="form-group">
  <label>Expected Rent *</label>
  <input
    type="number"
    placeholder="Enter Amount"
    value={rent}
    onChange={(e) => setRent(e.target.value)}
  />
</div>

<div className="form-group">
  <label>Expected Deposit *</label>
  <input
    type="number"
    placeholder="Enter Amount"
    value={deposit}
    onChange={(e) => setDeposit(e.target.value)}
  />
</div>


        <div className="form-group">
          <label>Monthly Maintenance</label>
          <select>
            <option>Select</option>
            <option>Included</option>
            <option>Extra</option>
          </select>
        </div>

        <div className="form-group">
          <label>Available From *</label>
          <input type="date" />
        </div>

        <div className="form-group wide">
          <label>Preferred Tenants *</label>
          <div className="radio-group">
            {["Anyone", "Family", "Bachelor Female", "Bachelor Male", "Company"].map((t) => (
              <label key={t}><input type="checkbox" /> {t}</label>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label>Furnishing *</label>
          <select>
            <option>Select</option>
            <option>Furnished</option>
            <option>Semi-Furnished</option>
            <option>Unfurnished</option>
          </select>
        </div>

        <div className="form-group">
          <label>Parking *</label>
          <select>
            <option>Select</option>
            <option>1</option>
            <option>2</option>
          </select>
        </div>

        <div className="form-group full">
          <label>Description</label>
          <textarea
            rows="3"
            placeholder="Write a few lines about your property..."
          ></textarea>
        </div>
      </div>

      <div className="form-buttons">
        <button type="button" className="back-btn" onClick={() => setCurrentStep(1)}>
          Back
        </button>
        <button type="button" className="save-btn" onClick={() => setCurrentStep(3)}>
          Save & Continue
        </button>
      </div>
    </form>
  </>
)}
{currentStep === 3 && (
  <>
    <div className="property-header">
      <h2>Provide additional details about your property to get maximum visibility</h2>
    </div>

    <div className="amenities-section">
      {/* === Counters row === */}
      <div className="amenities-row top-row">
        <div className="form-group">
          <label>Bathroom(s)*</label>
          <div className="counter">
            <button onClick={() => setBathrooms(Math.max(0, bathrooms - 1))}>−</button>
            <span>{bathrooms}</span>
            <button onClick={() => setBathrooms(bathrooms + 1)}>+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Balcony*</label>
          <div className="counter">
            <button onClick={() => setBalcony(Math.max(0, balcony - 1))}>−</button>
            <span>{balcony}</span>
            <button onClick={() => setBalcony(balcony + 1)}>+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Water Supply</label>
          <select>
            <option>Borewell</option>
            <option>Corporation</option>
            <option>Both</option>
          </select>
        </div>
      </div>

      {/* === Toggles === */}
      <div className="amenities-row toggles-row">
        {[
          { key: "pet", label: "Pet Allowed*", icon: "🐾" },
          { key: "gym", label: "Gym*", icon: "🏋️" },
          { key: "nonVeg", label: "Non-Veg Allowed*", icon: "🍗" },
          { key: "gated", label: "Gated Security*", icon: "🛡️" },
        ].map((item) => (
          <div className="toggle-box" key={item.key}>
            <div className="toggle-label">
              <span className="toggle-icon">{item.icon}</span>
              {item.label}
            </div>
            <div className="toggle-buttons">
              <button
                className={`btn-toggle ${toggles[item.key] === false ? "active" : ""}`}
                onClick={() => setToggles({ ...toggles, [item.key]: false })}
              >
                No
              </button>
              <button
                className={`btn-toggle ${toggles[item.key] === true ? "active" : ""}`}
                onClick={() => setToggles({ ...toggles, [item.key]: true })}
              >
                Yes
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* === Who shows property & condition === */}
      <div className="amenities-row">
        <div className="form-group">
          <label>Who will show the property?*</label>
          <select>
            <option>I will show</option>
            <option>Tenant will show</option>
          </select>
        </div>

        <div className="form-group">
          <label>Current Property Condition?</label>
          <select>
            <option>Select</option>
            <option>New</option>
            <option>Renovated</option>
            <option>Old</option>
          </select>
        </div>
      </div>

      {/* === Secondary Number === */}
      <div className="form-group secondary-row">
        <label>Secondary Number</label>
        <div className="phone-box">
          <span className="flag">🇮🇳 +91</span>
          <input type="text" placeholder="8787878787" />
        </div>
      </div>

      {/* === Similar Units === */}
      <div className="toggle-box inline-toggle">
        <div className="toggle-label">Do you have more similar units/properties available?</div>
        <div className="toggle-buttons">
          <button className="btn-toggle">No</button>
          <button className="btn-toggle">Yes</button>
        </div>
      </div>

      {/* === Directions === */}
      <div className="form-group direction-tip">
        <label>Add directions to reach using landmarks</label>
        <input
          type="text"
          placeholder="Eg. Take the road opposite to Amrita College, take right after 300m..."
        />
      </div>

      {/* === Amenity checkboxes === */}
      <div className="amenities-list">
        <h4>Select the available amenities</h4>
        <div className="amenities-grid">
          {[
            "Lift", "Air Conditioner", "Internet Services", "Club House",
            "Intercom", "Swimming Pool", "Children Play Area", "Fire Safety",
            "Servant Room", "Shopping Center", "Gas Pipeline", "Park",
            "Rain Water Harvesting", "Sewage Treatment Plant", "House Keeping",
            "Power Backup", "Visitor Parking"
          ].map((a) => (
            <label key={a} className="amenity-item">
              <input type="checkbox" /> {a}
            </label>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="form-buttons">
        <button type="button" className="back-btn" onClick={() => setCurrentStep(2)}>
          Back
        </button>
        <button type="button" className="save-btn" onClick={() => setCurrentStep(4)}>
          Save & Continue
        </button>
      </div>
    </div>
  </>
)}



{/* STEP 4: Gallery */}
{currentStep === 4 && (
  <>
    <div className="property-header gallery-header">
      <h2>Upload photos & videos</h2>
      <button className="upload-phone-btn">Upload through phone</button>
    </div>

    <form className="gallery-form">
      {/* ===== PHOTO UPLOAD SECTION ===== */}
      <div className="upload-section">
        <div className="upload-box" onClick={() => document.getElementById("photoInput").click()}>
          <div className="upload-icon">📷</div>
          <p className="upload-text">
            <strong>Add photos</strong> to get <b>5× more responses</b>.<br />
            90% tenants contact on properties with photos.
          </p>
          <button type="button" className="add-btn">
            Add Photos
          </button>
          <input
            id="photoInput"
            type="file"
            accept="image/*"
            multiple
            style={{ display: "none" }}
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setPhotos([...photos, ...files]);
            }}
          />
        </div>

        {/* ===== PHOTO PREVIEW GRID ===== */}
        {photos.length > 0 && (
          <div className="preview-grid">
            {photos.map((file, index) => (
              <div key={index} className="preview-item">
                <img src={URL.createObjectURL(file)} alt={`photo-${index}`} />
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() =>
                    setPhotos(photos.filter((_, i) => i !== index))
                  }
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===== DIVIDER ===== */}
      <div className="divider"><span>OR</span></div>

      {/* ===== CONTACT UPLOAD ===== */}
      <div className="contact-upload">
        <h4>We can upload photos on your behalf</h4>
        <div className="contact-cards">
          <div className="contact-card whatsapp">
            <span>💬</span>
            <div>
              <p>Whatsapp us on</p>
              <h5>0-9241-700-000</h5>
            </div>
          </div>
          <div className="contact-card email">
            <span>✉️</span>
            <div>
              <p>Email to</p>
              <h5>photos@nobroker.in</h5>
            </div>
          </div>
        </div>
      </div>

      {/* ===== VIDEO UPLOAD SECTION ===== */}
      <div className="video-section">
        <div className="upload-box" onClick={() => document.getElementById("videoInput").click()}>
          <div className="upload-icon">🎥</div>
          <p className="upload-text">
            <strong>Add videos</strong> to get 5× more responses.<br />
            90% tenants contact on properties with videos.
          </p>
          <button type="button" className="add-btn">
            Add Videos
          </button>
          <input
            id="videoInput"
            type="file"
            accept="video/*"
            multiple
            style={{ display: "none" }}
            onChange={(e) => {
              const files = Array.from(e.target.files);
              setVideos([...videos, ...files]);
            }}
          />
        </div>

        {/* ===== VIDEO PREVIEW GRID ===== */}
        {videos.length > 0 && (
          <div className="preview-grid">
            {videos.map((file, index) => (
              <div key={index} className="preview-item">
                <video width="100%" height="100%" controls>
                  <source src={URL.createObjectURL(file)} type="video/mp4" />
                </video>
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() =>
                    setVideos(videos.filter((_, i) => i !== index))
                  }
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ===== BUTTONS ===== */}
      <div className="form-buttons">
        <button
          type="button"
          className="back-btn"
          onClick={() => setCurrentStep(3)}
        >
          Back
        </button>
        <button
          type="button"
          className="save-btn"
          onClick={() => setCurrentStep(5)}
        >
          Save & Continue
        </button>
      </div>
    </form>
  </>
)}


         {currentStep === 5 && (
  <>
    <div className="property-header schedule-header">
      <h2>Make house visits hassle-free by providing us your availability</h2>
    </div>

    <form className="schedule-form">
      {/* ---- Promo Cards ---- */}
      <div className="promo-section">
        <div className="promo-card">
          
            <img src={paintImg} alt="painting" />
           
      
          <div className="promo-content">
            <h4>Freshly painted homes get rented out <span>73% faster</span></h4>
            <p>
              Get professional painting services at the best prices
            </p>
            <button type="button" className="book-btn">Book Now</button>
          </div>
        </div>

        <div className="promo-card">
            <img src={cleanImg} alt="cleaning" />
          <div className="promo-content">
            <h4>
              Get your house tenant-ready with <span>Deep Cleaning</span>
            </h4>
            <p>Trusted by 50,000+ owners</p>
            <div className="cleaning-buttons">
              <button type="button" className="book-btn">Book Now</button>
              <button type="button" className="skip-btn">I Don’t Want Cleaning</button>
            </div>
          </div>
        </div>
      </div>

      {/* ---- Availability ---- */}
      <div className="availability-section">
        <div className="availability-options">
          <h4>Availability</h4>
          <div className="option-buttons">
           {[
  { main: "Everyday", sub: "Mon–Sun" },
  { main: "Weekday", sub: "Mon–Fri" },
  { main: "Weekend", sub: "Sat–Sun" },
].map((opt, idx) => (
  <button
    key={idx}
    type="button"
    className={`option-btn ${availability === opt.main ? "active" : ""}`}
    onClick={() => setAvailability(opt.main)}
  >
    {opt.main}
    <span>{opt.sub}</span>
  </button>
))}

          </div>
        </div>

        <div className="time-section">
          <h4>Select Time Schedule</h4>
          <div className="time-inputs">
            <div className="time-box">
              <label>Start Time</label>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="time-box">
              <label>End Time</label>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>

          <label className="allday-checkbox">
            <input
              type="checkbox"
              checked={isAllDay}
              onChange={() => setIsAllDay(!isAllDay)}
            />
            Available All Day
          </label>
        </div>
      </div>

      {/* ---- Buttons ---- */}
      <div className="form-buttons">
        <button
          type="button"
          className="back-btn"
          onClick={() => setCurrentStep(4)}
        >
          Back
        </button>
       <button
  type="button"
  className="save-btn"
  onClick={handleFinishPosting}
>
  Finish Posting
</button>

      </div>
    </form>
  </>
)}
    </div>

        {/* Right Sidebar */}
        <div className="property-right">
          <div className="tenant-box">
            <h4>{isCommercialSale ? "Get Buyers Faster" : "Get Tenants Faster"}</h4>
            <p>
              Subscribe to our owner plans and find{" "}
              {isCommercialSale ? "Buyers" : "Tenants"} quickly and easily.
            </p>
            <ul className="feature-list">
              <li><FaLock className="feature-icon" /> Privacy</li>
              <li><FaStar className="feature-icon" /> Promoted Listing</li>
              <li><FaBullhorn className="feature-icon" /> Social Marketing</li>
              <li><FaCommentsDollar className="feature-icon" /> Price Consultation</li>
            </ul>
            <button className="interest-btn">Show Interest</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PropertyDetails;
