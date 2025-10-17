import React, { useState } from "react";
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
} from "react-icons/fa";

import "./PropertyDetails.css";

const PropertyDetails = () => {
  const location = useLocation();
  const { city, propertyType, adType } = location.state || {};

  const [selectedRooms, setSelectedRooms] = useState([]);
  const [roomType, setRoomType] = useState("");
  const [tenantType, setTenantType] = useState("");
  const [otherFeatures, setOtherFeatures] = useState([]);

  const isResale = adType === "Resale";
  const isPgHostel = adType === "PG/Hostel";
  const isFlatmates = adType === "Flatmates";
  const isCommercialSale =
    propertyType === "Commercial" && adType === "Sale";

  // PG icons
  const roomOptions = [
    {
      id: "single",
      label: "Single",
      icon: "https://assets.nobroker.in/nb-new/public/Common/icons/pg-single.svg",
    },
    {
      id: "double",
      label: "Double",
      icon: "https://assets.nobroker.in/nb-new/public/Common/icons/pg-double.svg",
    },
    {
      id: "three",
      label: "Three",
      icon: "https://assets.nobroker.in/nb-new/public/Common/icons/pg-triple.svg",
    },
    {
      id: "four",
      label: "Four",
      icon: "https://assets.nobroker.in/nb-new/public/Common/icons/pg-four.svg",
    },
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

  return (
    <div className="property-page">
      <div className="property-container">
        {/* ===== LEFT SIDEBAR ===== */}
        <div className="property-sidebar">
          <ul className="sidebar-menu">
            <li className="active">
              <FaHome className="side-icon" /> Property Details
            </li>
            <li>
              <FaMapMarkerAlt className="side-icon" /> Locality Details
            </li>
            <li>
              <FaMoneyBillAlt className="side-icon" />{" "}
              {isResale || isCommercialSale ? "Resale Details" : "Rental Details"}
            </li>
            <li>
              <FaCouch className="side-icon" /> Amenities
            </li>
            <li>
              <FaImages className="side-icon" /> Gallery
            </li>
            {isResale && (
              <li>
                <FaFileAlt className="side-icon" /> Additional Information
              </li>
            )}
            <li>
              <FaCalendarAlt className="side-icon" /> Schedule
            </li>
          </ul>
        </div>

        {/* ===== MAIN FORM SECTION ===== */}
        <div className="property-main">
          {/* ==== PG / HOSTEL ==== */}
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
                    className={`room-card ${
                      selectedRooms.includes(room.id) ? "selected" : ""
                    }`}
                    onClick={() => toggleRoom(room.id)}
                  >
                    <div className="room-icon">
                      <img src={room.icon} alt={room.label} />
                    </div>
                    <p>{room.label}</p>
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

              <button type="button" className="save-btn">
                Save & Continue
              </button>
            </>
          ) : isCommercialSale ? (
            /* ==== COMMERCIAL SALE FORM ==== */
            <>
              <div className="property-header">
                <h2>Property Details</h2>
                <p>
                  Posting your <b>{propertyType}</b> for <b>{adType}</b> in{" "}
                  <b>{city}</b>
                </p>
              </div>

              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Property Type*</label>
                    <select>
                      <option>Select</option>
                      <option>Office</option>
                      <option>Shop</option>
                      <option>Showroom</option>
                      <option>Restaurant</option>
                      <option>Godown</option>
                      <option>Industrial Building</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Building Type*</label>
                    <select>
                      <option>Select</option>
                      <option>Commercial Complex</option>
                      <option>Standalone Building</option>
                      <option>Business Park</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Age of Property*</label>
                    <select>
                      <option>Select</option>
                      <option>0-1 Years</option>
                      <option>1-5 Years</option>
                      <option>5-10 Years</option>
                      <option>10+ Years</option>
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
                    <label>Super Built Up Area*</label>
                    <div className="area-box">
                      <input type="number" placeholder="Super Built Up Area" />
                      <span className="unit">Sq.ft</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Carpet Area*</label>
                    <div className="area-box">
                      <input type="number" placeholder="Carpet Area" />
                      <span className="unit">Sq.ft</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Furnishing*</label>
                    <select>
                      <option>Select</option>
                      <option>Furnished</option>
                      <option>Semi-Furnished</option>
                      <option>Unfurnished</option>
                    </select>
                  </div>

                  <div className="form-group wide">
                    <label>Other Features</label>
                    <div className="feature-buttons">
                      {["On Main Road", "Corner Property"].map((feature) => (
                        <button
                          key={feature}
                          type="button"
                          className={`feature-btn ${
                            otherFeatures.includes(feature) ? "selected" : ""
                          }`}
                          onClick={() => toggleFeature(feature)}
                        >
                          {feature}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="help-box">
                  <span>
                    📞 Don’t want to fill all the details? Let us help you!
                  </span>
                  <button className="help-btn">I’m interested</button>
                </div>

                <button type="button" className="save-btn">
                  Save & Continue
                </button>
              </form>
            </>
          ) : (
            /* ==== RENT / RESALE / FLATMATES ==== */
            <>
              <div className="property-header">
                <h2>Property Details</h2>
                <p>
                  Posting your <b>{propertyType}</b> for <b>{adType}</b> in{" "}
                  <b>{city}</b>
                </p>
              </div>

              <form>
                <div className="form-grid">
                  <div className="form-group">
                    <label>
                      {isResale ? "Property Type*" : "Apartment Type*"}
                    </label>
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

                  {isResale && (
                    <div className="form-group">
                      <label>Ownership Type*</label>
                      <select>
                        <option>Select</option>
                        <option>Freehold</option>
                        <option>Leasehold</option>
                        <option>Co-operative Society</option>
                        <option>Power of Attorney</option>
                      </select>
                    </div>
                  )}

                  {isFlatmates && (
                    <div className="form-group wide">
                      <label>Room Type*</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            name="roomType"
                            value="Single Room"
                            checked={roomType === "Single Room"}
                            onChange={(e) => setRoomType(e.target.value)}
                          />
                          Single Room
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="roomType"
                            value="Shared Room"
                            checked={roomType === "Shared Room"}
                            onChange={(e) => setRoomType(e.target.value)}
                          />
                          Shared Room
                        </label>
                      </div>
                    </div>
                  )}

                  {isFlatmates && (
                    <div className="form-group wide">
                      <label>Tenant Type*</label>
                      <div className="radio-group">
                        <label>
                          <input
                            type="radio"
                            name="tenantType"
                            value="Male"
                            checked={tenantType === "Male"}
                            onChange={(e) => setTenantType(e.target.value)}
                          />
                          Male
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="tenantType"
                            value="Female"
                            checked={tenantType === "Female"}
                            onChange={(e) => setTenantType(e.target.value)}
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  )}

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

                <button type="button" className="save-btn">
                  Save & Continue
                </button>
              </form>
            </>
          )}
        </div>

        {/* ===== RIGHT SIDEBAR ===== */}
        <div className="property-right">
          <div className="tenant-box">
            <h4>
              {isCommercialSale ? "Get Buyers Faster" : "Get Tenants Faster"}
            </h4>
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
