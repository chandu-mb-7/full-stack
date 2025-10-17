import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { FaRedo, FaFileAlt } from "react-icons/fa";
import CitySelectorModal from "../components/CitySelectorModal";

import biometricImg from "../assets/biometric.png";
import agreementImg from "../assets/rentalagreement.png";
import estampImg from "../assets/stamp.png";
import techAssistance from "../assets/techAssistance.png";
import extraVisit from "../assets/extraVisit.png";
import legalIDVerificationAddon from "../assets/legalIDVerificationAddon.png";
import legalDeliveryAddon from "../assets/legalDeliveryAddon.png";
import powerOfAttorney from "../assets/powerOfAttorneyImg.svg";
import fillDetails from "../assets/fillDetail.png";
import ScheduleBiometric from "../assets/ScheduleBiometric.png";
import stamping from "../assets/stamping.png";
import hdfcImg from "../assets/hdfc.png";
import amazonImg from "../assets/amazon.png";
import nBPromise from "../assets/nBPromise.png";
import "./RentalAgreementPage.css";

const RentalAgreementPage = () => {
  const storedCity = localStorage.getItem("selectedCity");
  const [selectedCity, setSelectedCity] = useState(storedCity || "");
  const [showCityModal, setShowCityModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCityModal(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    localStorage.setItem("selectedCity", city);
    setShowCityModal(false);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const city = localStorage.getItem("selectedCity") || "";
      setSelectedCity(city);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <div className="rental-page-container">
      
      <CitySelectorModal
        isOpen={showCityModal}
        onClose={() => setShowCityModal(false)}
        onCitySelect={handleCitySelect}
      />

      <section className="rental-blue-section">
        <div className="rental-content-wrapper">
          <div className="rental-header">
            <h1>
              Online Rent Agreement
              {selectedCity && (
                <>
                  {" "}
                  in <span className="city-highlight">{selectedCity}</span>
                </>
              )}
            </h1>
            <p>Now available in 150+ cities in India ✨</p>
          </div>

          <div className="rental-top-cards">
            <div className="top-card renew">
              <div>
                <h4>
                  <FaRedo className="icon" /> Renew Your Agreement
                </h4>
                <p>Renew your existing agreement</p>
              </div>
              <FiArrowRight className="arrow" />
            </div>

            <div className="top-card ongoing">
              <div>
                <h4>
                  <FaFileAlt className="icon" /> Your Ongoing Agreements
                </h4>
                <p>Click to see details</p>
              </div>
              <FiArrowRight className="arrow" />
            </div>
          </div>

          <div className="rental-divider">
            <span>SELECT A RENT AGREEMENT</span>
            <div className="divider-line"></div>
          </div>

          <div className="rental-card-grid">
            <div className="agreement-card">
              <div className="img-wrapper brown">
                <img src={biometricImg} alt="Biometric" />
              </div>
              <h3>Rental Agreement with Biometric + Police Intimation</h3>
              <FiArrowRight className="arrow" />
            </div>

            <div className="agreement-card">
              <div className="img-wrapper gray">
                <img src={agreementImg} alt="Agreement" />
              </div>
              <h3>Rental Agreement</h3>
              <FiArrowRight className="arrow" />
            </div>

            <div className="agreement-card">
              <div className="img-wrapper beige">
                <img src={estampImg} alt="E-Stamp" />
              </div>
              <h3>Rental Agreement with E-Stamp & Notary</h3>
              <FiArrowRight className="arrow" />
            </div>
          </div>
        </div>
      </section>

      <div className="rental-info-section">
        <div className="rental-info-bar">
          <span>🏛 Maharashtra Govt. Registered</span>
          <span>✅ Legally Valid Agreement</span>
          <span>💰 Guaranteed Lowest Price</span>
        </div>
      </div>

      <section className="addons-wrapper">
        <div className="addons-card">
          <h2>Available Add ons</h2>
          <div className="addons-grid">
            <div className="addon-box purple">
              <img src={techAssistance} alt="Tech Assistance" />
              <h4>Tech Assistance</h4>
              <p>Get technical assistance for distant registration</p>
            </div>

            <div className="addon-box pink">
              <img src={extraVisit} alt="Extra Visit" />
              <h4>Extra Visit for Biometric</h4>
              <p>Get your Biometric done from anywhere anytime</p>
            </div>

            <div className="addon-box beige">
              <img src={legalIDVerificationAddon} alt="Tenant Verification" />
              <h4>Tenant Verification</h4>
              <p>Verify your tenant’s identity instantly</p>
            </div>

            <div className="addon-box peach">
              <img src={legalDeliveryAddon} alt="Hardcopy Delivery" />
              <h4>Hardcopy Delivery</h4>
              <p>Hardcopy delivery at your doorstep</p>
            </div>

            <div className="addon-box blue">
              <img src={powerOfAttorney} alt="Power Of Attorney" />
              <h4>Power Of Attorney</h4>
              <p>Drafting of Power Of Attorney</p>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-wrapper">
        <div className="how-card">
          <h2>How it works</h2>
          <div className="how-grid">
            <div className="how-box">
              <div className="number-bg">1</div>
              <img src={fillDetails} alt="Fill Details" />
              <h4>Fill Details Online</h4>
              <p>
                Prepare your agreement approved by the Government of Maharashtra
                and submit the draft.
              </p>
            </div>

            <div className="how-box">
              <div className="number-bg">2</div>
              <img src={ScheduleBiometric} alt="Biometric" />
              <h4>Biometric at Your Doorstep</h4>
              <p>
                Get the registration of the agreement done through Biometric and
                Aadhaar validation at your home or any location.
              </p>
            </div>

            <div className="how-box">
              <div className="number-bg">3</div>
              <img src={stamping} alt="Registered" />
              <h4>Agreement is Registered</h4>
              <p>
                After biometric data collection, your agreement is registered
                and sent to you within 3-4 working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="compare-agreement-wrapper">
        <div className="compare-card">
          <h2>Select to Compare Agreement</h2>
          <div className="compare-grid">
            <div className="compare-box">
              <h4>Rental Agreement with Biometric + Police Intimation</h4>
              <ul>
                <li>✔ Govt. portal registered</li>
                <li>✔ Police verification included</li>
                <li>✔ Free biometric visit</li>
              </ul>
            </div>

            <div className="compare-box popular">
              <div className="popular-badge">POPULAR</div>
              <h4>Rental Agreement</h4>
              <ul>
                <li>✔ Govt. portal registered</li>
                <li>✔ Doorstep Biometric KYC</li>
                <li>✔ Free visit for biometric</li>
              </ul>
            </div>

            <div className="compare-box">
              <h4>Rental Agreement with E-Stamp & Notary</h4>
              <ul>
                <li>✔ Printed with legal E-Stamp</li>
                <li>✔ Hardcopy Delivery</li>
                <li>✔ Legally valid in court</li>
              </ul>
            </div>
          </div>

          <div className="compare-btns">
            <button className="btn-outline">Preview</button>
            <button className="btn-primary">Proceed →</button>
          </div>
        </div>
      </section>

      <section className="discount-wrapper">
        <div className="discount-card">
          <h2>Discount Coupons</h2>
          <p className="sub-text">Apply Coupon at the summary screen</p>
          <div className="coupon-grid">
            <div className="coupon-box">
              <img src={hdfcImg} alt="HDFC" />
              <div className="coupon-info">
                <h4>5% HDFC Bank</h4>
                <p>Upto ₹1500 off</p>
              </div>
            </div>
            <div className="coupon-box">
              <img src={amazonImg} alt="Amazon Pay" />
              <div className="coupon-info">
                <h4>₹100 Amazon Pay discount</h4>
                <p>On spend of ₹2000</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="promise-wrapper">
        <div className="promise-card">
          <div className="promise-content">
            <div className="promise-left">
              <h2>NoBroker Promise</h2>

              <div className="promise-item">
                <i className="icon">💸</i>
                <div>
                  <h4 className="promise-title blue">Guaranteed Lowest Prices</h4>
                  <p>Best-in-class legal documentation at lowest prices.</p>
                </div>
              </div>

              <div className="promise-item">
                <i className="icon">⚖️</i>
                <div>
                  <h4 className="promise-title blue">Legally Valid</h4>
                  <p>
                    Make genuine documents legally valid in court of law.
                  </p>
                </div>
              </div>

              <div className="promise-item">
                <i className="icon">❤️</i>
                <div>
                  <h4 className="promise-title blue">
                    100% Convenience. 0% Stress.
                  </h4>
                  <p>
                    Get delighted with super fast documentation at home.
                  </p>
                </div>
              </div>
            </div>

            <div className="promise-right">
              <img src={nBPromise} alt="NoBroker Promise" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RentalAgreementPage;
