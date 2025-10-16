import React from "react";
import { useLocation } from "react-router-dom";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  const location = useLocation();
  const { city, propertyType, adType } = location.state || {};

  return (
    <div className="property-container">
      {/* LEFT SIDEBAR */}
      <aside className="property-sidebar">
        <ul>
          <li className="active">🏠 Property Details</li>
          <li>📍 Locality Details</li>
          <li>💰 Rental Details</li>
          <li>🛋️ Amenities</li>
          <li>🖼️ Gallery</li>
          <li>📅 Schedule</li>
        </ul>
      </aside>

      {/* MAIN CENTER SECTION */}
      <main className="property-main">
        <div className="property-header">
          <h2>Property Details</h2>
          <p>
            {city && (
              <>
                Posting your <b>{propertyType}</b> for <b>{adType}</b> in{" "}
                <b>{city}</b>
              </>
            )}
          </p>
        </div>

        <form className="property-form">
          <div className="form-grid">
            <div className="form-group">
              <label>Apartment Type*</label>
              <select>
                <option>Select</option>
                <option>Apartment</option>
                <option>Independent House</option>
                <option>Villa</option>
              </select>
            </div>

            <div className="form-group">
              <label>BHK Type*</label>
              <select>
                <option>Select</option>
                <option>1 BHK</option>
                <option>2 BHK</option>
                <option>3 BHK</option>
              </select>
            </div>

            <div className="form-group">
              <label>Floor*</label>
              <select>
                <option>Select</option>
                <option>Ground</option>
                <option>1st</option>
                <option>2nd</option>
              </select>
            </div>

            <div className="form-group">
              <label>Total Floor*</label>
              <select>
                <option>Select</option>
                <option>5</option>
                <option>10</option>
                <option>15</option>
              </select>
            </div>

            <div className="form-group">
              <label>Property Age*</label>
              <select>
                <option>Select</option>
                <option>0-2 years</option>
                <option>2-5 years</option>
                <option>5-10 years</option>
              </select>
            </div>

            <div className="form-group">
              <label>Facing</label>
              <select>
                <option>Select</option>
                <option>East</option>
                <option>West</option>
                <option>North</option>
                <option>South</option>
              </select>
            </div>

            <div className="form-group wide">
              <label>Built Up Area*</label>
              <div className="area-box">
                <input type="text" placeholder="Built-up Area" />
                <span className="unit">Sq.ft</span>
              </div>
            </div>
          </div>

          <button className="save-btn">Save & Continue</button>
        </form>
      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="property-right">
        <div className="tenant-box">
          <h4>Get Tenants Faster</h4>
          <p>Subscribe to our owner plans and find Tenants quickly and easily</p>
          <ul>
            <li>🔒 Privacy</li>
            <li>⭐ Promoted Listing</li>
            <li>📣 Social Marketing</li>
            <li>💬 Price Consultation</li>
          </ul>
          <button className="interest-btn">Show Interest</button>
        </div>
      </aside>
    </div>
  );
};

export default PropertyDetails;
