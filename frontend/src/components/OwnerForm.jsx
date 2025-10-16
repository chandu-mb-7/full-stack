import React from "react";
import "./OwnerForm.css";

const OwnerForm = () => {
  return (
    <div className="owner-page">
      <h2 className="heading">Sell or Rent your Property For Free</h2>

      {/* full-width wrapper */}
      <div className="owner-wrapper">
        <div className="owner-container">
          {/* LEFT SECTION */}
          <div className="owner-left">
            <h4>Why Post through us?</h4>
            <ul>
              <li>🏠 Zero Brokerage</li>
              <li>⚡ Faster Tenants</li>
              <li>🔗 10 lac tenants/buyers connections</li>
            </ul>

            <p className="trust-heading">30 Lac+ Home Owners Trust Us</p>
            <p className="trust-para">
              I found NoBroker very helpful for house rent advertisements. The team was very responsive and enthusiastic to help us find a good tenant in a short span of time. Within a week, this property listing site was able to get me a tenant and exceed my expectations.
            </p>
            <p className="trust-name">Lakshmi | Gurgaon</p>
          </div>

          {/* RIGHT SECTION */}
          <div className="owner-right">
            <form className="owner-form">
              <div className="form-row">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-row">
                <input type="tel" placeholder="Mobile Number" />
                <select>
                  <option>Select City</option>
                  <option>Bangalore</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                  <option>Pune</option>
                </select>
              </div>

              <div className="whatsapp">
                <label>
                  <input type="checkbox" defaultChecked /> Get updates on{" "}
                  <span className="green">WhatsApp</span>
                </label>
              </div>

              <div className="property-type">
                <h4>Property type</h4>
                <div className="btn-group">
                  <button type="button">Residential</button>
                  <button type="button">Commercial</button>
                  <button type="button">Land/Plot</button>
                </div>
              </div>

              <div className="ad-type">
                <h4>Select Property Ad Type</h4>
                <div className="btn-group">
                  <button type="button" className="active">Rent</button>
                  <button type="button">Resale</button>
                  <button type="button">PG/Hostel</button>
                  <button type="button">Flatmates</button>
                </div>
              </div>

              <button className="submit-btn">
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
